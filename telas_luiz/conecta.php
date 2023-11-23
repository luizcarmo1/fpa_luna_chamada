<?php

// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "unimar";
$dbname = "chamada";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn=mysqli_connect("localhost","root","unimar","chamada");

// Verifica a conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtém a senha aleatória do POST
$password = $_POST['password'];
echo "Recebido: $password";

// Obtém o dia atual
$dia = date("Y-m-d");

// Insere a senha e o dia no banco de dados
$sql = "INSERT INTO pins (pin, dia) VALUES ('$password', '$dia')";

if ($conn->query($sql) === TRUE) {
    echo "PIN salvo com sucesso!";
} else {
    echo "Erro ao salvar o PIN: " . $conn->error;
}

$conn->close();
?>
