//var pacientes = document.querySelectorAll(".paciente")
//console.log(pacientes);
//pacientes.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function () {
//		this.remove();
//		//paciente.remove();
//		//console.log("Fui clicado com duplo click");
//	});
//});

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function (event) {
	console.log("Fui clicado");
	console.log(event.target); //target -> pega o alvo que recebeu o evento
	console.log(event.target.parentNode); // parentNode -> pega o pai do alvo clicado

	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){ //setTimeout é uma função do Javascript para que o comp conte um tempo até executar a função
		event.target.parentNode.remove();
	},1100);
});