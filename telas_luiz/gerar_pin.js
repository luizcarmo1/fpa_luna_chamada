function getPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
  var passwordLength = 16;
  var password = "";


  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById('password').value = password


  //var xhr = new XMLHttpRequest();
  //xhr.open('POST', 'salvar_pins.php', true);
  //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //xhr.send('numero_aleatorio=' + encodeURIComponent(password));

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'conecta.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send('password=' + password);
}


function copiarTexto() {
  let textoCopiado = document.getElementById("password");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}