var campoTarefa = document.querySelector(".tarefaNome");
var mensagemErroForm = document.querySelector(".mensagemErroForm");

console.log(campoTarefa);



function validaCampoForm(campoTarefa){
	var campoTarefaValue = campoTarefa.value;
	if(campoTarefaValue == ""){
		mensagemErroForm.textContent = "A tarefa não pode ser vazia!";
		mensagemErroForm.classList.remove("escondeMensagem");
	}else if(campoTarefaValue.length <= 2){
		mensagemErroForm.textContent = "Uma tarefa não pode conter menos de três caracteres!";
		mensagemErroForm.classList.remove("escondeMensagem");
	}else{
		mensagemErroForm.classList.add("escondeMensagem");
	}
}