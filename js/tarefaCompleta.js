var lis = document.querySelectorAll(".item-tarefa");

lis.forEach(function(indice){
	var tarefaFeita = indice.querySelector(".tarefaFeita");
	var nomeTarefa = indice.querySelector(".nomeTarefa");
	var estadoTarefa = true;
	indice.addEventListener("click", function(event){
		event.preventDefault();		
		if(estadoTarefa == true){
			nomeTarefa.classList.add("tarefaCompleta");
			tarefaFeita.classList.add("tarefaCompletaBotao");
			estadoTarefa = false;
		}else{
			nomeTarefa.classList.remove("tarefaCompleta");
			tarefaFeita.classList.remove("tarefaCompletaBotao");
			estadoTarefa = true;
		}
		console.log(estadoTarefa);
	});	
});

