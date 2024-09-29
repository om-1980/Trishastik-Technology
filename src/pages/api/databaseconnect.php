<?php
$servername = "localhost:3306";
$database = "u125382637_solutions";
// $username = "root";
$username = "u125382637_trishastik";
$password = "Deva@123deva";
 
// Create connection
 
$conn = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
 
if (!$conn) {
 
    die("Connection failed: " . mysqli_connect_error());
 
}
echo "Connected successfully";
mysqli_close($conn);
?>