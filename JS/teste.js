window.onload = () => {let dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));    
    profile_saver();
    let nome = dadosLogado.nome_
    document.getElementById('config_user').innerHTML = nome }


var dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));

if(dadosLogado.vzs == 1){
    alert("Essa é sua primeira tentativa")

}else if(dadosLogado.vzs == 2){
    alert("Essa é sua segunda tentativa")

}else if(dadosLogado.vzs == 3){
    alert("Essa é sua última tentativa")
}

function score(){

    var pontos  = 0;

    if(document.querySelector('input[name="quest1"]:checked').value == "C"){
        pontos++;
    }

    if(document.querySelector('input[name="quest2"]:checked').value == "C"){
        pontos++;
    }
    
    if(document.querySelector('input[name="quest3"]:checked').value == "D"){
        pontos++;
    }

    if(document.querySelector('input[name="quest4"]:checked').value == "A"){
        pontos++;
    }

    if(document.querySelector('input[name="quest5"]:checked').value == "B"){
        pontos++;
    }

    if(document.querySelector('input[name="quest6"]:checked').value == "C"){
        pontos++;
    }

    if(document.querySelector('input[name="quest7"]:checked').value == "D"){
        pontos++;
    }

    if(document.querySelector('input[name="quest8"]:checked').value == "D"){
        pontos++;
    }

    if(document.querySelector('input[name="quest9"]:checked').value == "B"){
        pontos++;
    }

    if(document.querySelector('input[name="quest10"]:checked').value == "A"){
        pontos++;
    }

    if(((document.getElementById("quest11").value).toUpperCase()).trim() ==  "CREATE TABLE"){
        pontos++;
    }

    if(((document.getElementById("quest12").value).toUpperCase()).trim() ==  "INSERT INTO"){
        pontos++;
    }

    dadosLogado.nota = pontos;
    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));

    if(dadosLogado.nota >= 8){
        window.location.href = "feedback.html";
        

    }else{
        alert("Você não foi aprovado, estude um pouco mais e tente novamente.")
        window.location.href = "aula.html";
    }
}


function alterar_nome(){

    let novo_nome = document.getElementById("novonome").value;

    dadosLogado.nome_ = novo_nome;

    localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));

    location.reload();
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