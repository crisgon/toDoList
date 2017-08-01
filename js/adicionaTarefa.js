var botaoAddTarefa = document.querySelector(".botaoAddTarefa");
var tarefaNome = document.querySelector(".tarefaNome");
var listaDeTarefas = document.querySelector(".listaDeTarefas");
var liItemTarefa = document.querySelector(".item-tarefa");
console.log(listaDeTarefas);

botaoAddTarefa.addEventListener("click", function(event){
	event.preventDefault();
	criaElementos();
	addClasses();
	novoSpanTarefa.textContent = tarefaNome.value; //Pega o valor digitado no input e add no span 
	montaLi();
	tarefaNome.value = "";//Deixa o form vazio
});


function criaElementos(){
	novoSpanTarefa = document.createElement("span"); //Cria o Span que recebe o nome da tarefa
	novoLinkDelete = document.createElement("a");//Cria a para deletar
	novoLinkDelete.setAttribute("href", "#"); //Add atributo href ao <a>
	novoIconeDelete = document.createElement("i");//Cria novo i para que contem o icone de deletar
	novoIconeDelete.setAttribute("title", "Deletar"); //Add o atributo title ao <i>
	novoLiTarefa = document.createElement("li"); //Cria o Li que armazena a tarefa
}

function addClasses(){
	novoLinkDelete.classList.add("removerTarefa");
	novoIconeDelete.classList.add("fa", "fa-trash");//Add classes ao icone
	novoLiTarefa.classList.add("item-tarefa");//Add class dos "lis" ao novo li criado
}

function montaLi(){
	novoLinkDelete.appendChild(novoIconeDelete);//Coloca o icone dentro o link a	
	novoLiTarefa.appendChild(novoSpanTarefa); //Coloca o span como filho do li
	novoLiTarefa.appendChild(novoLinkDelete);//Coloca o a como filho do li
	listaDeTarefas.appendChild(novoLiTarefa);//Coloca o li como filho do ul
}