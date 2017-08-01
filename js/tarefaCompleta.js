var lis = document.querySelectorAll(".item-tarefa");
var listaTarefasCompletas = document.querySelector(".tarefasConluidas");
var removerTarefa = document.querySelectorAll(".removerTarefa");
var mensagem = document.querySelector(".mensagemSemTarefas");
mensagem.textContent = "Nenhuma tarefa concluida...";


lis.forEach(function(indice){
	var tarefaFeita = indice.querySelector(".tarefaFeita");
	var nomeTarefa = indice.querySelector(".nomeTarefa");
	var estadoTarefa = true;
	tarefaFeita.addEventListener("click", function(event){
		event.preventDefault();		
		mensagem.classList.add("escondeMensagem");
		if(estadoTarefa == true){
			listaTarefasCompletas.appendChild(indice);
			estadoTarefa = false;
		}else{
			estadoTarefa = true;
			listaDeTarefas.appendChild(indice);
		}
		apagaTarefa();
	});	
});


//Tentar usar quando armarzenar os dados 
// if(listaTarefasCompletas.children.length <= 2){
// 	mensagem.classList.remove("escondeMensagem");	
// }


