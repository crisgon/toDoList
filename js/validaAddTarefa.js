var campoTarefa = document.querySelector(".tarefaNome");
var mensagemErroForm = document.querySelector(".mensagemErroForm");





function validaCampoForm(campoTarefa){
	var campoTarefaValue = campoTarefa.value;
	if(campoTarefaValue == ""){
		mensagemErroForm.textContent = "A tarefa não pode ser vazia!";
		mensagemErroForm.classList.remove("escondeMensagem");
		return true;
	}else if(campoTarefaValue.length <= 2){
		mensagemErroForm.textContent = "Uma tarefa não pode conter menos de três caracteres!";
		mensagemErroForm.classList.remove("escondeMensagem");
		return true;
	}else{
		mensagemErroForm.classList.add("escondeMensagem");
		return false;
	}
}