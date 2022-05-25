let btn = document.querySelector("#cadastrar")
let aceitarTermos = document.querySelector("#aceitarTermos")
let msgAceitarTermos = document.querySelector(".msgAceitarTermos")
let sair = document.querySelector(".sair")
let alerta = document.querySelector(".container-alerta")
let linkTermos = document.querySelector("#link-termos")
let janelaTermos = document.querySelector(".desfoque")
let janelaTermosFechar = document.querySelector(".sairTermos") 
//campos
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let confirEmail = document.querySelector("#confir-email")
let senha = document.querySelector("#senha")
let confirSenha = document.querySelector("#confir-senha")
let dicaSenha=document.querySelector(".dica-senha")
let mostrarDicaSenha=document.querySelector("#mostrar-dica-senha")
//id para mudar a cor em volta do input
let adicionarClassNome = document.querySelector("#muda-classe-nome")
let adicionarClassEmail = document.querySelector("#muda-classe-email")
let adicionarClassConfirEmail = document.querySelector("#muda-classe-confir-email")
let adicionarClassSenha = document.querySelector("#muda-classe-senha")
let adicionarClassConfirSenha = document.querySelector("#muda-classe-confir-senha")
//mensagens abaixo do input
let nomeVazio= document.querySelector(".nome-vazio")
let emailVazio = document.querySelector(".email-vazio")
let confirEmailVazio = document.querySelector(".confir-email-vazio")
let senhaVazio = document.querySelector(".senha-vazio")
let confirSenhaVazio = document.querySelector(".confir-senha-vazio")


mostrarDicaSenha.addEventListener("mouseover",()=>{
	dicaSenha.style.display="block"
})

mostrarDicaSenha.addEventListener("mouseout",()=>{
	dicaSenha.style.display="none"
})

sair.addEventListener("click",() =>{
	alerta.classList.remove("container-alerta-visible");	
})

/* linkTermos.addEventListener("click",(event)=>{
	event.preventDefault()
	let termos= window.open("termos.html","_blank", "width=420,height=460,left=80,top=50")
}) */

linkTermos.addEventListener("click",(event)=>{
	event.preventDefault()
	janelaTermos.classList.remove("desfoque")
	janelaTermos.classList.add("desfoque-block")
})

janelaTermosFechar.addEventListener("click",(event)=>{
	event.preventDefault()
	janelaTermos.classList.remove("desfoque-block")
	janelaTermos.classList.add("desfoque")	
})

nome.addEventListener("keyup",()=>{
	if(nome.value != ""){
		nomeVazio.innerHTML=""
		adicionarClassNome.classList.add("green")
			
	}else{
		adicionarClassNome.classList.remove("green")
	}
})

 email.addEventListener("blur", ()=>{	
	if(validaEmail(email.value) !== true && email.value !== ""){
	emailVazio.style.color="red"
	emailVazio.innerHTML ="Formato de e-mail inválido"
	adicionarClassEmail.classList.remove("green")
	adicionarClassEmail.classList.add("red")
	}if(validaEmail(email.value) == true){
		emailVazio.innerHTML =""
	adicionarClassEmail.classList.remove("red")
	adicionarClassEmail.classList.add("green")
	}
}) 

email.addEventListener("keyup",() =>{
	if(validaEmail(email.value) !== true){
	emailVazio.style.color="red"
	emailVazio.innerHTML ="Formato de e-mail inválido"
	adicionarClassEmail.classList.remove("green")
	adicionarClassEmail.classList.add("red")
	}if(confirEmail.value !== "" && confirEmail.value !== email.value){
		adicionarClassConfirEmail.classList.add("red")
		adicionarClassConfirEmail.classList.remove("green")
		confirEmailVazio.style.color="red"
		confirEmailVazio.innerHTML="Email não corresponde com o e-mail acima"	
	}if(email.value =="" && confirEmail == ""){
		adicionarClassEmail.classList.remove("red")
		adicionarClassEmail.classList.remove("green")
		confirEmailVazio.innerHTML=""
	}if(!(validaEmail(email.value) != true && email.value !="")){
		adicionarClassEmail.classList.remove("red")
		adicionarClassEmail.classList.add("green")
		emailVazio.innerHTML =""		
		} if(email.value ==""){
		emailVazio.innerHTML =""
		adicionarClassEmail.classList.remove("red")
		adicionarClassEmail.classList.remove("green")
		confirEmailVazio.innerHTML=""
		adicionarClassConfirEmail.classList.remove("red")
	}if(email.value == confirEmail.value && validaEmail(email.value) != true && email.value !== ""){
		confirEmailVazio.style.color="red"
		confirEmailVazio.innerHTML="Formato do e-mail acima é inválido "		
	}if(validaEmail(email.value) == true && confirEmail.value == email.value ){	
		adicionarClassConfirEmail.classList.add("green")
		adicionarClassConfirEmail.classList.remove("red")
		confirEmailVazio.innerHTML=""
	}if(email.value == "" && confirEmail.value !== ""){
		confirEmailVazio.style.color="red"
		confirEmailVazio.innerHTML="Informe um e-mail válido no campo acima"
		adicionarClassConfirEmail.classList.add("red")		
	}	
})

confirEmail.addEventListener("keyup", ()=>{
	if(confirEmail.value != email.value){
		adicionarClassConfirEmail.classList.remove("green")
		adicionarClassConfirEmail.classList.add("red")
		confirEmailVazio.style.color="red"
		confirEmailVazio.innerHTML="Email não corresponde com o e-mail acima"
} if(confirEmail.value == email.value && email.value != ""){
	adicionarClassConfirEmail.classList.remove("red")
	confirEmailVazio.innerHTML=""
	adicionarClassConfirEmail.classList.add("green")
}if(validaEmail(email.value) != true && confirEmail.value==email.value){
	confirEmailVazio.style.color="red"
	confirEmailVazio.innerHTML="Formato do e-mail acima é inválido"
	adicionarClassConfirEmail.classList.add("red")
	adicionarClassConfirEmail.classList.remove("green")	
}
})

senha.addEventListener("keyup", ()=>{
	if(validaSenha(senha.value) !== true){
		senhaVazio.style.color="red"
		senhaVazio.innerHTML="Senha inválida"
		adicionarClassSenha.classList.add("red")
		adicionarClassSenha.classList.remove("green")
	}if(!(validaSenha(senha.value) !== true)){
		senhaVazio.style.color="green"
		senhaVazio.innerHTML="Senha válida"
		adicionarClassSenha.classList.add("green")
		adicionarClassSenha.classList.remove("red")
	}if(senha.value ==""){
		senhaVazio.innerHTML=""
		adicionarClassSenha.classList.remove("red")
	}if(confirSenha.value !="" && confirSenha.value != senha.value){
		confirSenhaVazio.style.color="red"
		confirSenhaVazio.innerHTML="Senhas não correspondem"
		adicionarClassConfirSenha.classList.remove("green")
		adicionarClassConfirSenha.classList.add("red")		
	}if(confirSenha.value !="" && confirSenha.value == senha.value && validaSenha(senha.value) == true){
		confirSenhaVazio.style.color="green"
		confirSenhaVazio.innerHTML="Senha válida"
		adicionarClassConfirSenha.classList.add("green")
		adicionarClassConfirSenha.classList.remove("red")
	}if(validaSenha(senha.value) == true && confirSenha.value == senha.value){
		confirSenhaVazio.style.color="green"
		confirSenhaVazio.innerHTML="Senha válida"
		adicionarClassConfirSenha.classList.add("green")		
	}
})

confirSenha.addEventListener("keyup",()=>{
if(confirSenha.value !== senha.value){
	confirSenhaVazio.style.color="red"
	confirSenhaVazio.innerHTML="Senhas não correspondem"
	adicionarClassConfirSenha.classList.add("red")
	adicionarClassConfirSenha.classList.remove("green")
}if (senha.value ==""){
	confirSenhaVazio.style.color="red"
	confirSenhaVazio.innerHTML="Senha inválida"
	adicionarClassConfirSenha.classList.add("red")
}if(confirSenha.value == senha.value  && validaSenha(senha.value) == true){
	confirSenhaVazio.style.color="green"
	confirSenhaVazio.innerHTML="Senha inválida"
	adicionarClassConfirSenha.classList.remove("red")
	adicionarClassConfirSenha.classList.add("green")
}if(confirSenha.value ==""){
	confirSenhaVazio.innerHTML=""
	adicionarClassConfirSenha.classList.remove("red")
}if(validaSenha(confirSenha.value !== true)){
	confirSenhaVazio.style.color="red"
	confirSenhaVazio.innerHTML="Senha inválida"
}if(validaSenha(senha.value) !== true && confirSenha.value == senha.value ){
	confirSenhaVazio.style.color="red"
	adicionarClassConfirSenha.classList.remove("green")
	adicionarClassConfirSenha.classList.add("red")
	confirSenhaVazio.innerHTML="Senha inválida"
}
})

function validaEmail(email){
	let emailPadrao =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
	return emailPadrao.test(email)
}

function validaSenha(senha){
	let senhaPadrao =  /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&*_]{6,16}$/
	return senhaPadrao.test(senha)
}

btn.addEventListener("click",(event)=>{
	event.preventDefault()
	if(nome.value == ""){
		adicionarClassNome.classList.add("red")
		nomeVazio.style.color="red"
		nomeVazio.innerHTML="Este campo não pode estar vazio"
		nomeVazio.style.visibility="visible"		
	}if(confirEmail.value != email.value){
		adicionarClassConfirEmail.classList.add("red")
		confirEmailVazio.style.color="red"
		confirEmailVazio.innerHTML="Email não corresponde com o e-mail acima"
	}if(validaEmail(email.value) != true){
			adicionarClassEmail.classList.add("red")
			emailVazio.style.color="red"
			emailVazio.innerHTML="Formato de e-mail inválido"				
	}if(confirEmail.value ==""){
		adicionarClassConfirEmail.classList.add("red")
		confirEmailVazio.style.color="red"
		confirEmailVazio.innerHTML="Confirme seu e-mail"
	}if(validaSenha(senha.value) != true || senha.value ==""){
		senhaVazio.style.color="red"
		senhaVazio.innerHTML="Escolha uma senha"
		adicionarClassSenha.classList.add("red")
	}if(confirSenha.value ==""){
	confirSenhaVazio.style.color="red"
	confirSenhaVazio.innerHTML="Confirme a senha"
	adicionarClassConfirSenha.classList.add("red")	
	}if(!aceitarTermos.checked){
		alerta.classList.add("container-alerta-visible")		
	}	
})
