var removerTarefa = document.querySelectorAll(".removerTarefa");
apagaTarefa();

var $ = document.querySelector.bind(document);
var table = $("#listaDeTarefas");



function apagaTarefa(){
   /*
	$(document).on("click",".removerTarefa",function(event){
		event.preventDefault();
		console.log('elemento clicado');
	});*/

	removerTarefa.forEach(function(indice){ //Loop para add o remove para cada <a> da lista

	   
		$(document).on("click",".removerTarefa",function(event){
			event.preventDefault();
			var paiDoElemento = this.parentNode; //Descobre qual é o pai do elemento clicado no evento
			paiDoElemento.remove(); //Remove pai do elemento'
		});
		
	});
}

