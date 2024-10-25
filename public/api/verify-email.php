<?php
// verify-email.php
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
    exit();
}

// Get the request body
$data = json_decode(file_get_contents("php://input"), true);
$token = isset($data['token']) ? $conn->real_escape_string($data['token']) : '';

// Check if the token is valid
if (empty($token)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid verification token']);
    exit();
}

// Find the user with the token and check if it's not already verified
$sql = "SELECT id, is_verified FROM users WHERE verification_token = '$token' AND is_verified = 0";
$result = $conn->query($sql);

if ($result->num_rows === 0) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid or expired token']);
    exit();
}

$user = $result->fetch_assoc();

// Verify the user account
$update_sql = "UPDATE users SET is_verified = 1, verification_token = NULL WHERE id = " . $user['id'];
if ($conn->query($update_sql) === TRUE) {
    echo json_encode(['message' => 'Email verified successfully']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Failed to verify email']);
}

$conn->close();
?>
