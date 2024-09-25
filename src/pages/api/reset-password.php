<?php
// reset-password.php
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
$reset_token = isset($data['token']) ? $conn->real_escape_string($data['token']) : '';
$new_password = isset($data['password']) ? $data['password'] : '';

// Validate the token and password
if (empty($reset_token) || empty($new_password)) {
    http_response_code(400);
    echo json_encode(['message' => 'Token and new password are required']);
    exit;
}

// Check if the reset token is valid and not expired
$sql = "SELECT id, reset_expires_at FROM users WHERE reset_token = '$reset_token'";
$result = $conn->query($sql);

if ($result->num_rows === 0) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid reset token']);
    exit;
}

$row = $result->fetch_assoc();
$expires_at = $row['reset_expires_at'];
$current_time = date("Y-m-d H:i:s");

if ($current_time > $expires_at) {
    http_response_code(400);
    echo json_encode(['message' => 'Reset token has expired']);
    exit;
}

// Check password strength
if (strlen($new_password) < 8 || !preg_match('/[A-Z]/', $new_password) || !preg_match('/[0-9]/', $new_password)) {
    http_response_code(400);
    echo json_encode(['message' => 'Password must be at least 8 characters long, contain at least one uppercase letter, and one number']);
    exit;
}

// Hash the new password
$hashed_password = password_hash($new_password, PASSWORD_DEFAULT);

// Update the user's password and clear the reset token
$update_sql = "UPDATE users SET password = '$hashed_password', reset_token = NULL, reset_expires_at = NULL WHERE id = '" . $row['id'] . "'";
if ($conn->query($update_sql) === TRUE) {
    echo json_encode(['message' => 'Password reset successful']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to reset password']);
}

$conn->close();
?>