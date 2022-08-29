window.onload = () => {let dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));    
    let nome = dadosLogado.nome_
    profile_saver();
    document.getElementById('config_user').innerHTML = nome }

var dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));

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
        document.getElementById("nav_config").style.display = "block";
        config_profile_modify = "ativo";
        document.getElementById("invisible_on_config").style.boxShadow = "inset 100px 100px 100px 1000px rgba(61, 61, 61, 0.834)";
        document.getElementById("article_curso_03").style.boxShadow = "inset 100px 100px 100px 1000px rgba(61, 61, 61, 0.834)";
        document.getElementById("article_curso_02").style.boxShadow = "inset 100px 100px 100px 1000px rgba(61, 61, 61, 0.834)";
        document.getElementById("article_curso_01").style.boxShadow = "inset 100px 100px 100px 1000px rgba(61, 61, 61, 0.834)";
        document.getElementById("course_image_01").style.boxShadow = "inset 100px 100px 100px 1000px rgba(61, 61, 61, 0.834)";
        document.getElementById("course_image_02").style.boxShadow = "inset 100px 100px 100px 1000px rgba(61, 61, 61, 0.834)";
        document.getElementById("course_image_03").style.boxShadow = "inset 100px 100px 100px 1000px rgba(61, 61, 61, 0.834)";
        backshadowprotect = "on";


        

            } else {
                    document.getElementById("nav_config").style.display = "none";
                    config_profile_modify = "inativo";
                    document.getElementById("sect_test").style.display = "none";
                    trocar_info_modify = "inativo";
                    

                    document.getElementById("invisible_on_config").style.boxShadow = "none";
                    document.getElementById("article_curso_03").style.boxShadow = "none";
                    document.getElementById("article_curso_02").style.boxShadow = "none";
                    document.getElementById("article_curso_01").style.boxShadow = "none";
                    document.getElementById("course_image_01").style.boxShadow = "none";
                    document.getElementById("course_image_02").style.boxShadow = "none";
                    document.getElementById("course_image_03").style.boxShadow = "none";
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
    window.location.href = "github.html";
}

function jumpto_about(){
    window.location.href = "about_us.html";
}