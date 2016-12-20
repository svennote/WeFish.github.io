
// Checkt of de user online is in de storage: ja => profielpagina , nee => inlogpagina
function onlineChecker(){

	if(localStorage.getItem("userOnline") == null){
		window.location = "login.html";
	}else{
		window.location = "profile.html";
	}

};

window.onload = function() {

	//Kijkt of de user online is en neemt dan zijn data om dit te weergeven op de profiel pagina
	document.getElementById('GebruikersNaamHeader').innerText = JSON.parse( localStorage.getItem( 'userOnline' ));

	var naamData = "";
	var voornaamData = "";

	var userNameIngelogt = JSON.parse(localStorage.getItem('userOnline'));
	console.log(userNameIngelogt);
	var testje = JSON.parse(localStorage.getItem('users'));
	for( var i = 1; i < testje.length; i++){
    	if(JSON.parse(localStorage.getItem('users'))[i].gebruikersnaam == userNameIngelogt){
    			console.log("Gebruikersnaam is aanwezig!"); //Controle of werkt
    			var naamData = JSON.parse(localStorage.getItem('users'))[i].naam;
            	var voornaamData = JSON.parse(localStorage.getItem('users'))[i].voornaam;
       	}else{
    			
    	}
    };

    var gegevensProfiel = document.getElementById('profielGegevens');
    gegevensProfiel.innerHTML = voornaamData+"<br/>"+naamData;
};

// Als je op de logout knop duwt word je afgemeld en naar de login pagina doorverwezen
function logOut(){
	localStorage.removeItem("userOnline");
	window.location = "login.html";
}


// Deze functie kijkt of er een localstorage aanwezig is van users en voegt de gebruiker toe (zo niet maakt hem aan)
function GebruikerRegistreren() {
	
	// registreer formulier ingevulde data in variabelen steken.
	var userNm = document.getElementById('userNaam').value;
	var userVnm = document.getElementById('userVoornaam').value;
	var userGnm = document.getElementById('userGebruikersnaam').value;
	var userWw = document.getElementById('userWachtwoord').value;

if (localStorage.getItem("users") !== null) {
    var users = [];
	users = JSON.parse( localStorage.getItem( 'users' ));
	users.push({"naam":userNm, "voornaam":userVnm, "gebruikersnaam":userGnm, "wachtwoord":userWw, });

	console.log( users ); // console log van users (mag verwijderd worden)!
	localStorage.setItem( 'users', JSON.stringify(users) );
	console.log( JSON.parse( localStorage.getItem( 'users' ) ) ); // console log van users (mag verwijderd worden)!
}else{
	var users = [{"naam":"naam", "voornaam":"voornaam", "gebruikersnaam":"gebruikersnaam", "wachtwoord":"wachtwoord" }];
	localStorage.setItem( 'users', JSON.stringify(users) );

	users = JSON.parse( localStorage.getItem( 'users' ));
	users.push({"naam":userNm, "voornaam":userVnm, "gebruikersnaam":userGnm, "wachtwoord":userWw, });

	console.log( users ); // console log van users (mag verwijderd worden)!
	localStorage.setItem( 'users', JSON.stringify(users) );
	console.log( JSON.parse( localStorage.getItem( 'users' ) ) ); // console log van users (mag verwijderd worden)!
};

}

//Kijkt of de ingevulde gebruiker bestaat en logt die dan in
function GebruikerInloggen(){
	event.preventDefault();
	var InlogNaam = document.getElementById('InlogNaam').value;
	var InlogWachtwoord = document.getElementById('InlogWachtwoord').value;


	var testje = JSON.parse(localStorage.getItem('users'));
	console.log(testje);

	var naamBestaat = "";

	//Dit checked of de naam bestaat in de database
    for( var i = 1; i < testje.length; i++){
    	if(JSON.parse(localStorage.getItem('users'))[i].gebruikersnaam == InlogNaam ){
    		var naamBestaat = JSON.parse(localStorage.getItem('users'))[i].gebruikersnaam;
    	}else{
    		
    	}
    };

    //extra check of de naam dus bestaat en dan het wachtwoord checkt
    if(naamBestaat !== ""){
    	console.log(naamBestaat);
    	for( var i = 1; i < testje.length; i++){
    		if(JSON.parse(localStorage.getItem('users'))[i].gebruikersnaam == naamBestaat && JSON.parse(localStorage.getItem('users'))[i].wachtwoord == InlogWachtwoord){
    			console.log("Gebruikersnaam en Wachtwoord zijn juist!");
                var userIsOnline = naamBestaat;
                localStorage.setItem( 'userOnline', JSON.stringify(userIsOnline));
                console.log( JSON.parse( localStorage.getItem( 'userOnline' ) ) );
                window.location = "profile.html";
    		}else{
    			
    		}
    	};
    }else{
    	console.log("Gebruikersnaam bestaat niet!");
    }
};
