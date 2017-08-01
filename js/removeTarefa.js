var removerTarefa = document.querySelectorAll(".removerTarefa");
apagaTarefa();

function apagaTarefa(){
	removerTarefa.forEach(function(indice){
		indice.addEventListener("click", function(event){
			event.preventDefault();
			var paiDoElemento = this.parentNode; //Descobre qual é o pai do elemento clicado no evento
			paiDoElemento.remove(); //Remove pai do elemento'
		});
	});
}