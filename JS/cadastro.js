var tela = "login";

function jumpto_fale_conosco(){
    window.location.href = "faleconosco.html";
}

function jumpto_sobre(){
    window.location.href = "sobrenos.html";
}

function jumpto_github(){
    window.location.href = "GitHub.html";
}

function jumpto_inicio(){
    window.location.href = "inicio.html";
}


var input_cpf = document.getElementById("cpf_cad");
input_cpf.addEventListener('keyup', mask_cpf);

var inout_cpf_forgot = document.getElementById("cpf_forgot");
inout_cpf_forgot.addEventListener('keyup', mask_cpf);

function showCad(){
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("text_header").innerHTML = "Crie sua conta: ";
    tela = "cad";
}

function showLogin(){
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("forgot").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("text_header").innerHTML = "Acesse sua conta: ";
    tela = "login";
}

function showForgot(){
    document.getElementById("forgot").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("text_header").innerHTML = "Para mudar sua senha preencha os campos: ";
    tela = "forgot";
    
}

window.addEventListener("keypress", e => {

    console.log(tela)

    if(e.key == "Enter"){
        if(tela == "login"){
            valid_login();

        }else if(tela == "cad"){
            valid_cad();

        }else if(tela == "forgot"){
            valid_forgot();
        }
    }
})


function mask_cpf(e){
    var caractere = e.target.value.replace(/\D/g,"");

    caractere = caractere.replace(/(\d{3})(\d)/,"$1.$2")
    caractere = caractere.replace(/(\d{3})(\d)/,"$1.$2")
    caractere = caractere.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

    e.target.value = caractere;
}

function validCpf(cpf){

    cpf = cpf.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    dig10 = parseInt(cpf[9]);
    dig11 = parseInt(cpf[10]);

    var cont = 0, tot1 = 0; //verificar o primeiro dígito

    for (let i = 10; i >= 2; i--) {

        var dig = parseInt(cpf[cont]);
        
        tot1 += dig * i;

        cont++;    
    }
    var digV10 = 11 - (tot1 % 11);

    if(digV10 > 9){
        digV10 = 0;
    }

    var cont = 0, tot2 = 0; //verificar o segundo dígito

    for (let i = 11; i >= 2; i--) {

        var dig = parseInt(cpf[cont]);
        
        tot2 += dig * i;

        cont++;    
    }
    var digV11 = 11 - (tot2 % 11);

    if(digV11 > 9){
        digV11 = 0;
    }

    if(dig10 == digV10 && dig11 == digV11){
        return true;

    }else{
        return false;
    }
}

function cpfExist(cpf){

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);
        let database = localStorage.getItem(id);
        let usuarios = JSON.parse(database);

        if(cpf == usuarios.cpf_){
            
            return false;
        }
    }

    return true;
}

function validEmail(email){

    var regexMail = /\S+@\S+\.\S+/;

    return(regexMail.test(email));
}

function emailExist(email){

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);
        let database = localStorage.getItem(id);
        let usuarios = JSON.parse(database);

        if(email == usuarios.email_){
            
            return false;
        }
    }

    return true;

}

function validSenha(senha){

    var regexSenha = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return(regexSenha.test(senha));
}

function addUser(){

    let key = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);

        if(id == key){
            addUser()
        }
    }

    let nome = document.getElementById("nome_cad").value;
    let email = document.getElementById("mail_cad").value;
    let cpf = document.getElementById("cpf_cad").value;
    let senha = document.getElementById("senha_cad").value;

    var usuario = {
        nome_ : nome,
        email_ : email,
        cpf_ : cpf,
        senha_ : senha,
        vzs : 0,
        nota : 0,
        feedback : 0,
        fotodeperfil : 0
    };

    localStorage.setItem(key, JSON.stringify(usuario));
    localStorage.setItem('id_login', key);

    jumpto_inicio();
}

function verificar_login(){

    let email = document.getElementById("mail_login").value;
    let senha = document.getElementById("senha_login").value;

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);
        let database = localStorage.getItem(id);
        let usuarios = JSON.parse(database);

        if(email == usuarios.email_ && senha == usuarios.senha_){
            localStorage.setItem('id_login', id);
            jumpto_inicio();
            break;
        }
        else{
            document.getElementById("senha_login").style.border = "1px solid #f00";
            document.getElementById("erro_senha_login").innerHTML = "Senha incorreta";
        }
    }
}

function changePassword(){

    let email = document.getElementById("mail_forgot").value;
    let cpf = document.getElementById("cpf_forgot").value;
    let senha = document.getElementById("senha_forgot").value;

    for (let i = 0; i < localStorage.length; i++) {

        let id = localStorage.key(i);
        let database = localStorage.getItem(id);
        let usuarios = JSON.parse(database);

        if(email == usuarios.email_ && cpf == usuarios.cpf_){

            usuarios.senha_ = senha;

            localStorage.setItem(id, JSON.stringify(usuarios));
            
            showLogin();
        }
        else{
            document.getElementById("senha_forgot").style.border = "1px solid #f00";
            document.getElementById("erro_senha_forgot").innerHTML = "E-mail e CPF não correspondem";
        }
    }
}


function valid_cad(){

    let nome = document.getElementById("nome_cad").value;
    let cpf = document.getElementById("cpf_cad").value;
    let email = document.getElementById("mail_cad").value;
    let senha = document.getElementById("senha_cad").value;
    let conf_senha = document.getElementById("conf_senha_cad").value;

    let erros = 0;
    
    if(nome == ""){
        document.getElementById("nome_cad").style.border = "1px solid #f00";
        document.getElementById("erro_nome").innerHTML = "Campo obrigatório";
        erros++;

    }else{
        document.getElementById("nome_cad").style.border = "";
        document.getElementById("erro_nome").innerHTML = "";
    }

    if(email == "" || validEmail(email) == false){
        document.getElementById("mail_cad").style.border = "1px solid #f00";
        document.getElementById("erro_email").innerHTML = "Informe um e-mail válido";
        erros++;

    }else if(emailExist(email) == false){
        document.getElementById("mail_cad").style.border = "1px solid #f00";
        document.getElementById("erro_email").innerHTML = "E-mail já existente";
        erros++;

    }else{
        document.getElementById("mail_cad").style.border = "";
        document.getElementById("erro_email").innerHTML = "";
    }

    if(cpf == "" || validCpf(cpf) == false){
        document.getElementById("cpf_cad").style.border = "1px solid #f00";
        document.getElementById("erro_cpf").innerHTML = "Informe um CPF válido";
        erros++;

    }else if(cpfExist(cpf) == false){
        document.getElementById("cpf_cad").style.border = "1px solid #f00";
        document.getElementById("erro_cpf").innerHTML = "CPF já existente";
        erros++;

    }else{
        document.getElementById("cpf_cad").style.border = "";
        document.getElementById("erro_cpf").innerHTML = "";
    }

    if(senha == "" || validSenha(senha) == false){
        document.getElementById("senha_cad").style.border = "1px solid #f00";
        document.getElementById("erro_senha").innerHTML = "Mínimo de 8 caracteres, números e letras";
        erros++;

    }else{
        document.getElementById("senha_cad").style.border = "";
        document.getElementById("erro_senha").innerHTML = "";
    }

    if(conf_senha != senha){
        document.getElementById("conf_senha_cad").style.border = "1px solid #f00";
        document.getElementById("erro_conf_senha").innerHTML = "As senhas não conferem";
        erros++;

    }else{
        document.getElementById("conf_senha_cad").style.border = "";
        document.getElementById("erro_conf_senha").innerHTML = "";
    }

    console.log(erros)

    if(erros > 0){
        return false;

    }else{
        addUser();
    }
}

function valid_login(){

    let email = document.getElementById("mail_login").value;

    let erros = 0;

    if(email == "" || validEmail(email) == false){
        document.getElementById("mail_login").style.border = "1px solid #f00";
        document.getElementById("erro_email_login").innerHTML = "Informe um e-mail válido";
        erros++;

    }else if(emailExist(email)){
        document.getElementById("mail_login").style.border = "1px solid #f00";
        document.getElementById("erro_email_login").innerHTML = "E-mail não cadastrado";
        erros++;

    }else{
        document.getElementById("mail_login").style.border = "";
        document.getElementById("erro_email_login").innerHTML = "";
    }

    console.log(erros);

    if(erros > 0){

        return false;

    }else{
        return verificar_login();
    }
}

function valid_forgot(){

    let email = document.getElementById("mail_forgot").value;
    let cpf = document.getElementById("cpf_forgot").value;
    let senha = document.getElementById("senha_forgot").value;

    let erros = 0;


    if(email == "" || validEmail(email) == false){
        document.getElementById("mail_forgot").style.border = "1px solid #f00";
        document.getElementById("erro_email_forgot").innerHTML = "Informe um e-mail válido";
        erros++;

    }else if(emailExist(email)){
        document.getElementById("mail_forgot").style.border = "1px solid #f00";
        document.getElementById("erro_email_forgot").innerHTML = "E-mail não cdastrado";
        erros++;

    }else{
        document.getElementById("mail_forgot").style.border = "";
        document.getElementById("erro_email_forgot").innerHTML = "";
    }

    if(cpf == "" || validCpf(cpf) == false){
        document.getElementById("cpf_forgot").style.border = "1px solid #f00";
        document.getElementById("erro_cpf_forgot").innerHTML = "Informe um CPF válido";
        erros++;

    }else if(cpfExist(cpf)){
        document.getElementById("cpf_forgot").style.border = "1px solid #f00";
        document.getElementById("erro_cpf_forgot").innerHTML = "CPF não cadastrado";
        erros++;

    }else{
        document.getElementById("cpf_forgot").style.border = "";
        document.getElementById("erro_cpf_forgot").innerHTML = "";
    }

    if(senha == "" || validSenha(senha) == false){
        document.getElementById("senha_forgot").style.border = "1px solid #f00";
        document.getElementById("erro_senha_forgot").innerHTML = "Mínimo de 8 caracteres, números e letras";
        erros++;

    }else{
        document.getElementById("senha_forgot").style.border = "";
        document.getElementById("erro_senha_forgot").innerHTML = "";
    }

    if(erros > 0){
        return false;

    }else{
        changePassword()
    }
}

function showPassword(id, btn){

    let senhaT = document.getElementById(id);
    
    if(senhaT.type === "password"){
        senhaT.type = "text";
        document.getElementById(btn).src = "img/hidden.png"

    }else{
        senhaT.type = "password";
        document.getElementById(btn).src = "img/show.png"
    }
}

window.location