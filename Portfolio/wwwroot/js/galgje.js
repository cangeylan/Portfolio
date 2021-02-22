var woorden = ["autonomieakkoord",
"regeneratie","verantwoordelijkheid",'beslissing',"hegemonie",
"standbeelden","minderheden","wreedheden","passend","ondertussen",
"verband","onvermijdelijk","noodzakelijk","overtuigingen",
"spelprogramma","deelnemer","presentator","wisselen","aanwijzen",
"gebeurtenis","waarop","manier","oplossing","sommige","studeren",
"werkwoorden","bedrijfsrestaurant","supermarkt","klanten","aanpassen","afsluiten"]

var pogingen = 0;
var juistTeller = 0;
var raaddeLetters = [];
var pogingenGetal = 1;
var hetWoord;


function start (){

    //duidelijke start
    document.getElementById("keyboard").innerHTML = null;
    document.getElementById("vraagTekens").innerHTML = null;
    document.getElementById("pogingen").innerHTML = null;
    document.getElementById("geheimWoord").innerHTML = null;
    pogingen = 0;
    juistTeller = 0;
    raaddeLetters = [];

    //VIRTUAL TOETSENBORD
    for (i=65; i<=90; i++){
        var letter = String.fromCharCode(i);
        virtualKeyboard = `<button onclick="kiesLetter('${letter.toLowerCase()}')" id="${String(letter).toLowerCase()}">${letter}</button>`;
        document.getElementById("keyboard").innerHTML += virtualKeyboard;
    }

    //om met een echt toetsenbord te kunnen typen
    document.addEventListener('keydown', kiesLetter);
    document.addEventListener('keydown', kiesLevel);


    //Invaden 
    document.getElementById("start").style.opacity=1;
    document.getElementById("geheimWoord").style.opacity = "0";
    document.getElementById("kiesLevel").innerHTML = `<p>kies een level <br><small>u kunt toetsenbord gebruiken</small></p>`
}; 


function kiesLevel (level){
    
    while(level.key ==='1'){level = 1}
    while(level.key ==='2'){level = 2}
    while(level.key ==='3'){level = 3}

    if (level === 1){pogingenGetal = 12;}
    if (level === 2){pogingenGetal = 9;}
    if (level === 3){pogingenGetal = 6;}

    if (level ===1 || level ===2 || level ===3){
    for (i=1; i<4; i++){
        document.getElementById("level_"+i).style.color = "rgb(25, 183, 194)";
        document.getElementById("level_"+i).disabled = false;
        document.getElementById("level_"+i).style.border = null;
    } 

    document.getElementById("level_"+level).style.color = null;
    document.getElementById("level_"+level).disabled = true;
    document.getElementById("level_"+level).style.border = "transparent";
    
    document.getElementById("kiesLevel").style.opacity = '0';
    document.getElementById("kiesLevel").innerHTML = null

    niewueGame();
}
}



function niewueGame() {
    start ();
    bedenkWoord ();
    toonVraagtekensEnPogingen ();
    setTimeout(toonGeheimword,1000);
}



 function  bedenkWoord() {
    randomGeheimWoord =  woorden[Math.floor(Math.random() * woorden.length)];
    hetWoord = randomGeheimWoord.split("");
    return hetWoord;
}  


function toonVraagtekensEnPogingen (){
    
    //vraag tekens
    woordenLengte = hetWoord.length;
    for (i=0; i<woordenLengte; i++){
        toonVraagteken = `<input id="index_${i}" value="_">`;
        document.getElementById("vraagTekens").innerHTML += toonVraagteken;
    }

    //pogingen
    for (let x=0; x<pogingenGetal; x++){
        document.getElementById("pogingen").innerHTML += `<input id='poging_${x+1}'>`
    }

    document.getElementById("keyboard").style.opacity = '1';
    document.getElementById("vraagTekens").style.opacity = "1";
    document.getElementById("pogingen").style.opacity = "1";
    
return woordenLengte;
}

function toonGeheimword(){
for (let i =0; i<hetWoord.length; i++){
    document.getElementById("geheimWoord").innerHTML+=`<input value="${hetWoord[i]}">`
}
}

function kiesLetter (x){
    //indien x ingevoerd via toetsenbord
    while (x.key !== undefined && x.key !=="Enter"){  
        x = x.key.toLowerCase();
    } 
    
    //knop uitschakelen
    if(document.getElementById(String(x))!==null){
    document.getElementById(String(x)).className = "geklikt";
    document.getElementById(String(x)).disabled = true;
    }
    //Letter komt voor in woord?//  
    if (hetWoord !== undefined){
    letterZitIn = hetWoord.includes(x); 

    if (letterZitIn === true ){
        vulLettersIn (x);
    } else {
        tekeningetjes (x);
    }
    return x;
    }
}


function vulLettersIn (x){
    
    //voer de code niet uit als de letter al is ingevoerd
    if (raaddeLetters.includes(x) == false){
    
    uniekIndex = hetWoord.indexOf(x);     // index van uniek letter

    z = hetWoord.map((event,i) => event === x ? i : undefined).filter(values=> values-1||values)  //als het geheime woord herhalende letters heeft, krijgt u hun indexen
    
    //als er herhaalde letters in het geheime woord zijn of niet
        if (z.length>1){
            for (count=0; count<z.length; count++){
                document.getElementById("index_"+z[count]).value = x;   
                document.getElementById("index_"+z[count]).style.opacity = 1;  
                juistTeller++         
                }
        } else {
                document.getElementById("index_"+uniekIndex).value = x;
                document.getElementById("index_"+uniekIndex).style.opacity = 1; 

                juistTeller++ 
            }
   
        //GEWONNEN
    if (juistTeller==hetWoord.length){
        gewonnen();
    }}
    
    raaddeLetters.push(x);
}



function tekeningetjes (x){
    if (raaddeLetters.includes(x) == false){
    pogingen++;
    
    if (document.getElementById(`poging_${pogingen}`)!== null){
    pogingenHTML = document.getElementById(`poging_${pogingen}`);
    pogingenHTML.style.opacity="1"    
    pogingenHTML.value='x'
    }
        //VERLOREN 
    if (pogingen==pogingenGetal){
        verloren();
    }  } 

    raaddeLetters.push(x);
}

function verloren(){
    document.getElementById("keyboard").style.opacity = '0';
    document.getElementById("vraagTekens").style.opacity = "0";
    document.getElementById("opnieuw").style.opacity = "1";
    document.getElementById("geheimWoord").style.opacity = "1";
    document.getElementById("pogingen").style.opacity = '0';
    
}

function gewonnen () {
    document.getElementById("opnieuw").style.opacity = '1';
    document.getElementById("keyboard").style.opacity = '0';
    document.getElementById("pogingen").style.opacity = "0";

}




// ENTER KNOP = NIEUW WOORD
addEventListener("keydown", function(event) {
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById("nieuwWoord").click();
      }
    });


