<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database credentials
$servername = "localhost";
$database = "u125382637_Solutions";  // Your database name
$username = "u125382637_trishastik"; // Your database username
$password = "Deva@123deva";          // Your database password

// Create connection to the database
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Connection failed: " . $conn->connect_error]);
    exit();
}

// Get the POST data (username and password from the frontend)
$postData = json_decode(file_get_contents("php://input"), true);

if (!isset($postData['email']) || !isset($postData['password'])) {
    http_response_code(400);  // Bad request
    echo json_encode(["message" => "Missing email or password"]);
    exit();
}

$email = $postData['email'];
$password = $postData['password'];

// Prepare and execute SQL query to authenticate the user
$stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->bind_result($hashedPassword);
$stmt->fetch();
$stmt->close();

// Check if the user exists and the password is correct
if (!$hashedPassword || !password_verify($password, $hashedPassword)) {
    http_response_code(401);  // Unauthorized
    echo json_encode(["message" => "Invalid email or password"]);
    exit();
}

// Return the success message and the token
$response = [
    "message" => "Login successful",
    "token" => $email
];

// Set the response type to JSON
header('Content-Type: application/json');
echo json_encode($response);

// Close the database connection
$conn->close();
?>
