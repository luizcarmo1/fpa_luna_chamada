

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $numeroAleatorio = isset($_POST['numero_aleatorio']) ? $_POST['numero_aleatorio'] : '';

  if (!empty($numeroAleatorio)) {
    $arquivo = fopen('numeros_aleatorios.txt', 'a');
    fwrite($arquivo, $numeroAleatorio . PHP_EOL);
    fclose($arquivo);
  }
}