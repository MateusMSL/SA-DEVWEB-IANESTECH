window.onload = () => {let dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));    
    profile_saver();
    let nome = dadosLogado.nome_
    document.getElementById('config_user').innerHTML = nome }

var mateus_activate = "off";
var gustavo_activate = "off";
var rafael_activate = "off";
var ronald_activate = "off";

var dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));

function Ativar_info_mateus(){

    if (mateus_activate == "off"){
        
        document.getElementById("section_mateus_01").style.display = "block";
        document.getElementById("section_mateus_02").style.display = "block";
        document.getElementById("section_mateus_03").style.display = "block";
        document.getElementById("section_mateus_04").style.display = "block";
        document.getElementById("section_mateus_05").style.display = "block";
        mateus_activate = "on";

    } else {
        document.getElementById("section_mateus_01").style.display = "none";
        document.getElementById("section_mateus_02").style.display = "none";
        document.getElementById("section_mateus_03").style.display = "none";
        document.getElementById("section_mateus_04").style.display = "none";
        document.getElementById("section_mateus_05").style.display = "none";
        mateus_activate = "off";

    }
    
}

function Ativar_info_gustavo(){

    if (gustavo_activate == "off"){
        document.getElementById("section_gustavo_01").style.display = "block";
        document.getElementById("section_gustavo_02").style.display = "block";
        document.getElementById("section_gustavo_03").style.display = "block";
        document.getElementById("section_gustavo_04").style.display = "block";
        document.getElementById("section_gustavo_05").style.display = "block";
        gustavo_activate = "on";

    } else {
        document.getElementById("section_gustavo_01").style.display = "none";
        document.getElementById("section_gustavo_02").style.display = "none";
        document.getElementById("section_gustavo_03").style.display = "none";
        document.getElementById("section_gustavo_04").style.display = "none";
        document.getElementById("section_gustavo_05").style.display = "none";
        gustavo_activate = "off";

    }
    
}

function Ativar_info_rafael(){

    if (rafael_activate == "off"){
        document.getElementById("section_rafael_01").style.display = "block";
        document.getElementById("section_rafael_02").style.display = "block";
        document.getElementById("section_rafael_03").style.display = "block";
        document.getElementById("section_rafael_04").style.display = "block";
        document.getElementById("section_rafael_05").style.display = "block";
        rafael_activate = "on";

    } else {
        document.getElementById("section_rafael_01").style.display = "none";
        document.getElementById("section_rafael_02").style.display = "none";
        document.getElementById("section_rafael_03").style.display = "none";
        document.getElementById("section_rafael_04").style.display = "none";
        document.getElementById("section_rafael_05").style.display = "none";
        rafael_activate = "off";

    }
    
}

function Ativar_info_ronald(){

    if (ronald_activate == "off"){
        document.getElementById("section_ronald_01").style.display = "block";
        document.getElementById("section_ronald_02").style.display = "block";
        document.getElementById("section_ronald_03").style.display = "block";
        document.getElementById("section_ronald_04").style.display = "block";
        document.getElementById("section_ronald_05").style.display = "block";
        ronald_activate = "on";

    } else {
        document.getElementById("section_ronald_01").style.display = "none";
        document.getElementById("section_ronald_02").style.display = "none";
        document.getElementById("section_ronald_03").style.display = "none";
        document.getElementById("section_ronald_04").style.display = "none";
        document.getElementById("section_ronald_05").style.display = "none";
        ronald_activate = "off";

    }
    
}




function profile_saver(){

    if (dadosLogado.fotodeperfil == "1"){
        
        profile_change_01();
    } else if (dadosLogado.fotodeperfil == "2"){
        
        profile_change_02();
        
    } else if (dadosLogado.fotodeperfil == "3"){
        
        profile_change_03();
        
    }

}



function alterar_nome(){

    let novo_nome = document.getElementById("novonome").value;

    dadosLogado.nome_ = novo_nome;

    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));

    location.reload();
}


var trocar_info_modify = "inativo";

function trocar_info(){

    
if (trocar_info_modify == "inativo"){
document.getElementById("sect_test").style.display = "block";
trocar_info_modify = "ativo";
    } else {
            document.getElementById("sect_test").style.display = "none";
            trocar_info_modify = "inativo";
            }

}

function profile_change_01(){

    document.getElementById("article_profile_mini_01").style.border = "3px solid #000";
    document.getElementById("article_profile_mini_02").style.border = "";
    document.getElementById("article_profile_mini_03").style.border = "";
    document.getElementById("user").style.backgroundImage = "url(img/kitsune.jpg)";
    
    dadosLogado.fotodeperfil = 1;
    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));

}


function profile_change_02(){

    document.getElementById("article_profile_mini_01").style.border = "";
    document.getElementById("article_profile_mini_02").style.border = "3px solid #000";
    document.getElementById("article_profile_mini_03").style.border = "";
    document.getElementById("user").style.backgroundImage = "url(img/dragon.png)";
    
    dadosLogado.fotodeperfil = 2;
    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));

}


function profile_change_03(){

    document.getElementById("article_profile_mini_01").style.border = "";
    document.getElementById("article_profile_mini_02").style.border = "";
    document.getElementById("article_profile_mini_03").style.border = "3px solid #000";
    document.getElementById("user").style.backgroundImage = "url(img/phoenix.png)";
    
    dadosLogado.fotodeperfil = 3;
    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));
}

var config_profile_modify = "inativo";
var backshadowprotect = "off";
function exibir_config_perfil(){


    if (config_profile_modify == "inativo"){
        document.getElementById("invisible_on_config").style.display = "block";
        document.getElementById("nav_config").style.display = "block";
        config_profile_modify = "ativo";

        backshadowprotect = "on";
        
            } else {
                document.getElementById("invisible_on_config").style.display = "none";
                    document.getElementById("nav_config").style.display = "none";
                    config_profile_modify = "inativo";
                    document.getElementById("sect_test").style.display = "none";
                    trocar_info_modify = "inativo";

                    backshadowprotect = "off";
                    }

}

function jumpto_login(){

    window.location.href = "index.html";
    localStorage.setItem('profile_picture', 0);

}

function jumpto_aula(){


    if (backshadowprotect == "on") {
        exibir_config_perfil();

    } else if (backshadowprotect == "off"){
        window.location.href = "aula.html";
        
    }
       
}

function cancelprotect(){
    if (backshadowprotect == "on") {
        exibir_config_perfil();

    } else {
        
    }
       
}

function jumpto_github(){
    window.location.href = "GitHub.html";
}

function jumpto_about(){
    window.location.href = "about_us.html";
}

function jumpto_inicio(){
    window.location.href = "inicio.html";
}

function jumpto_feedback(){
    window.location.href = "feedback.html";
}