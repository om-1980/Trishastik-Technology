<?php
// forgot-password.php
header('Content-Type: application/json');

// Database configuration
$servername = "localhost";
$database = "u125382637_Solutions";  // Your database name
$username = "u125382637_trishastik"; // Your database username
$password = "Deva@123deva";          // Your database password

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['message' => 'Database connection failed']);
    exit;
}

// Get the request body
$data = json_decode(file_get_contents("php://input"), true);
$email = isset($data['email']) ? $conn->real_escape_string($data['email']) : '';

// Check if email is valid
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid email address']);
    exit;
}

// Check if the email exists in the database
$sql = "SELECT id, email FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows === 0) {
    http_response_code(404);
    echo json_encode(['message' => 'Email not found']);
    exit;
}

// Generate a unique reset token and expiration time (e.g., 1 hour)
$reset_token = bin2hex(random_bytes(32)); // 64-character token
$expires_at = date("Y-m-d H:i:s", strtotime('+1 hour'));
$user_id = $result->fetch_assoc()['id'];

// Store the reset token and expiration in the database
$update_sql = "UPDATE users SET reset_token = '$reset_token', reset_expires_at = '$expires_at' WHERE id = '$user_id'";
if ($conn->query($update_sql) === TRUE) {
    // Send the reset link via email
    $reset_link = "https://trishastik.com/solutions/reset-password/?token=$reset_token";

    $subject = "Password Reset Request";
    $message = "Hello,\n\nWe received a request to reset your password. Click the link below to reset your password:\n\n";
    $message .= "$reset_link\n\nIf you did not request a password reset, please ignore this email.";
    $headers = "From: no-reply@trishastik.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($email, $subject, $message, $headers)) {
        echo json_encode(['message' => 'Password reset link sent to your email']);
    } else {
        http_response_code(500);
        echo json_encode(['message' => 'Failed to send reset email']);
    }
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to generate reset token']);
}

$conn->close();
?>
