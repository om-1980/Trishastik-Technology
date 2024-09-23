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

// Fetch the token from the Authorization header
$headers = apache_request_headers();
error_log(print_r($headers, true));
if (!isset($headers['Authorization'])) {
    http_response_code(401);
    echo json_encode(["message" => "No token provided", "headers" => $headers]);
    exit();
}

$token = str_replace('Bearer ', '', $headers['Authorization']);

function getEmailFromToken($token) {
    return $token;
}

$userEmail = getEmailFromToken($token);

// Prepare SQL query to get the user's name based on the email
$stmt = $conn->prepare("SELECT name FROM users WHERE email = ?");
$stmt->bind_param("s", $userEmail);
$stmt->execute();
$stmt->bind_result($userName);
$stmt->fetch();
$stmt->close();

// Return the user's name if found
if ($userName) {
    http_response_code(200);
    echo json_encode(["name" => $userName]);
} else {
    http_response_code(404);
    echo json_encode(["message" => "User not found"]);
}

$conn->close();
?>
