<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database credentials
$servername = "localhost:3306";
$database = "u125382637_solutions";
$username = "u125382637_trishastik";
$password = "Deva@123deva";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Get JSON input data
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['name']) && isset($data['email']) && isset($data['password'])) {
    $name = $data['name'];
    $email = $data['email'];
    $password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password
    $businessType = $data['businessType'];
    $organizationName = $data['organizationName'];
    $location = $data['location'];
    $role = $data['role'];

    // Generate a verification token
    $verification_token = bin2hex(random_bytes(32)); // 64-character token

    // Prepare SQL query to insert data into users table with verification token and status
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, business_type, organizationName, location, role, verification_token, is_verified) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)");
    $stmt->bind_param("ssssssss", $name, $email, $password, $businessType, $organizationName, $location, $role, $verification_token);

    if ($stmt->execute()) {
        // Send verification email
        $verification_link = "https://trishastik.com/solutions/verify-email?token=" . $verification_token;

        $subject = "Verify Your Email";
        $message = "Hello $name,\n\nThank you for signing up. Please click the link below to verify your email address and complete the signup process:\n\n";
        $message .= $verification_link . "\n\nIf you did not sign up for this account, please ignore this email.";
        $headers = "From: no-reply@trishastik.com\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($email, $subject, $message, $headers)) {
            http_response_code(200);
            echo json_encode(["message" => "Signup successful. Please check your email to verify your account."]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "User registered but failed to send verification email"]);
        }
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Failed to register user"]);
    }

    $stmt->close();
} else {
    http_response_code(400);
    echo json_encode(["message" => "Incomplete data"]);
}

$conn->close();
?>
