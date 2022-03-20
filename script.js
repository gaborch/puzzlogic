function funcao() {
	var entrada = document.getElementById("caixa").value
	var entrada2 = document.getElementById("caixa2").value
	var entrada3 = document.getElementById("caixa3").value
	var entrada4 = document.getElementById("caixa4").value
	var img = document.getElementById("imagem");
	if (entrada == "Ligado" && entrada2 == "Ligado" && entrada3 == "Desligado" && entrada4 == "Ligado"){
		alert("Parabéns você ganhou! a energia chegou ao ponto final.");
		img.src = "circuitoDesenhoCerto.png";
	}
	else {
		alert("Tente novamente. A energia não chegou ao ponto final.");
	}
}
