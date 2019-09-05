function addBola() {
	/*
	Criamos o elemento div e atribuimos o valor bola 
	para a "class". Em HTML seria: <div class="bola"></div>
	*/
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	/*
	Variaveis para armazenarem os valores randomicos em
	pixels no caso.
	*/
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	
	/*
	criando atributos e seus valores setAttribute(atr, valor)
	.bola{left: n px; top: n px;}
	*/
	bola.setAttribute("style", "left:"+p1+"px;"+"top:"+p2+"px;");
	bola.setAttribute("onclick", "estourar(this);");

	/*
	Criado array de cores e de forma randomica preenche
	o backgroundColor da div
	*/
	var cor = ["#4F4F4F", "#EEAD0E", "#9B30FF"];
	var background = Math.floor(Math.random() * (cor.length));
	bola.style.backgroundColor = cor[background];
	

	/*
	Basicamente acrescenta um item no elemento pai
	ex: elemento.appendChild(item_a_ser_inserido)
	*/
	document.body.appendChild(bola);

}

/*
Função que remove o elemento inserido ao ser clicado
*/
function estourar(objeto) {
	document.body.removeChild(objeto);
}

/*
Define um intervalo para e chama a funcao no onload
*/
function carregar() {
	setInterval(addBola, 1000);
}

function cores() {

}