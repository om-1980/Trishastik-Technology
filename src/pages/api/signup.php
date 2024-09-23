<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database credentials
$servername = "localhost";
$database = "u125382637_Solutions";
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

    // Prepare SQL query to insert data into users table
    $stmt = $conn->prepare("INSERT INTO users (name, email, password, business_type, organizationName, location, role) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $name, $email, $password, $businessType, $organizationName, $location, $role);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode(["message" => "User registered successfully"]);
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
