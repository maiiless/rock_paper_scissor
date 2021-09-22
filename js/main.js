var list = ["rock","scissors","paper"];
var points_user = 0;
var points_bot = 0;

function play(user){

    
    let bot = list[Math.floor(Math.random() * list.length)];

    if (bot === user){
        document.getElementById("result").innerHTML = user + " vs " + bot + " <br/> Draw"; 
    }
    else if(user == list[0] && user != bot  ){
        document.getElementById("result").innerHTML = user + " vs " + bot + " <br/> Victory!"; 
        points_user += 1;
        document.getElementById("points_a").innerHTML = points_user;
    }
    else if(user == list[1] && bot == list[2]) {
        document.getElementById("result").innerHTML = user + " vs " + bot + " <br/> Victory!";
        points_user += 1;
        document.getElementById("points_a").innerHTML = points_user;
    }
    else if (user == list[1] && bot == list[0]){
        document.getElementById("result").innerHTML = user + " vs " + bot + " <br/> Defeat";
        points_bot += 1;
        document.getElementById("points_b").innerHTML = points_bot;
    }
    else if(user == list[2]){
        points_bot += 1;
        document.getElementById("points_b").innerHTML = points_bot;
    }
    else {
        return "Seleccione una opción válida"
    }

    if(points_user == 10 || points_bot == 10){

        if(points_user > points_bot){
            document.getElementById("result").innerHTML = "You win!!!"; 
        }
        else {
            document.getElementById("result").innerHTML = "You lost =("; 
        }
        clean();
    }
}

function startGame(){
    clean();
    let name_user = document.getElementById("name_user").value;
    document.getElementById("participant").innerHTML = name_user; 
}

function clean(){
    points_user = 0;
    points_bot = 0;
    document.getElementById("points_a").innerHTML = "0";
    document.getElementById("points_b").innerHTML = "0";
    document.getElementById("result").innerHTML = "";
}