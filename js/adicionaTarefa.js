var botaoAddTarefa = document.querySelector(".botaoAddTarefa");
var tarefaNome = document.querySelector(".tarefaNome");
var listaDeTarefas = document.querySelector(".listaDeTarefas");
var liItemTarefa = document.querySelector(".item-tarefa");


document.onchange="alert()";
botaoAddTarefa.addEventListener("click", function(event){
	event.preventDefault();
				
		if(!validaCampoForm(campoTarefa)){
			addTarefa();
		}
});


function criaElementos(){
	novoSpanTarefa = document.createElement("span"); //Cria o Span que recebe o nome da tarefa
	novoLinkDelete = document.createElement("a");//Cria a para deletar
	novoLinkDelete.setAttribute("href", ""); //Add atributo href ao <a>
	novoLinkTarefaCompleta = document.createElement("a");//Cria a para deletar
	novoLinkTarefaCompleta.setAttribute("href", ""); //Add atributo href ao <a>
	novoIconeDelete = document.createElement("i");//Cria novo i para que contem o icone de deletar
	novoIconeTarefaCompleta = document.createElement("i");//Cria novo i para que contem o icone de marcar como feita
	novoIconeDelete.setAttribute("title", "Deletar"); //Add o atributo title ao <i>
	novoIconeTarefaCompleta.setAttribute("title", "Marcar tarefa como completa"); //Add o atributo title ao <i>
	novoLiTarefa = document.createElement("li"); //Cria o Li que armazena a tarefa
}

function addClasses(){
	novoSpanTarefa.classList.add("nomeTarefa");
	novoLinkDelete.classList.add("removerTarefa");
	novoLinkTarefaCompleta.classList.add("tarefaFeita");
	novoIconeDelete.classList.add("fa", "fa-trash");//Add classes ao icone
	novoIconeTarefaCompleta.classList.add("fa", "fa-check");//Add classes ao icone
	novoLiTarefa.classList.add("item-tarefa");//Add class dos "lis" ao novo li criado
}

function montaLi(){
	novoLinkTarefaCompleta.appendChild(novoIconeTarefaCompleta);//Coloca o icone dentro o link a	
	novoLinkDelete.appendChild(novoIconeDelete);//Coloca o icone dentro o link a	
	novoLiTarefa.appendChild(novoSpanTarefa); //Coloca o span como filho do li
	novoLiTarefa.appendChild(novoLinkTarefaCompleta);//Coloca o a como filho do li
	novoLiTarefa.appendChild(novoLinkDelete);//Coloca o a como filho do li
	listaDeTarefas.insertBefore(novoLiTarefa, listaDeTarefas.childNodes[0]); //Coloca o li como primeiro filho do ul
}

function addTarefa(event){
	criaElementos();
	addClasses();
	novoSpanTarefa.textContent = tarefaNome.value; //Pega o valor digitado no input e add no span 
	montaLi();
	tarefaNome.value = "";//Deixa o form vazio
}