var tabela = document.getElementById("tabela_pins");
var linhas = tabela.getElementsByTagName("tr");

for(var i = 0; i < linhas.length; i++){
	var linha = linhas[i];
  linha.addEventListener("click", function(){
  	//Adicionar ao atual
		selLinha(this, true); //Selecione apenas um
    //selLinha(this, true); //Selecione quantos quiser
	});
}

/**
Caso passe true, você pode selecionar multiplas linhas.
Caso passe false, você só pode selecionar uma linha por vez.
**/
function selLinha(linha, multiplos){
	if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
    for(var i = 0; i < linhas.length; i++){
      var linha_ = linhas[i];
      linha_.classList.remove("selecionado");    
    }
  }
  linha.classList.toggle("selecionado");
}

/** função do alert das linhas selecionadas */
function mostrarLinhasSelecionadas() {
    var linhasSelecionadas = document.querySelectorAll("#tabela_pins .selecionado");
    var linhasSelecionadasText = "PINs para contestar: ";
  
    for (var i = 0; i < linhasSelecionadas.length; i++) {
      linhasSelecionadasText += "Dia: " + linhasSelecionadas[i].innerText + "; ";
    }
  
    alert(linhasSelecionadasText);
}