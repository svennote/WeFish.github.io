// storing input from register-form

function onlineChecker(){

	if(localStorage.getItem("userOnline") == null){
		window.location = "login.html";
	}else{
		window.location = "profile.html";
	}

};

function logOut(){
	localStorage.removeItem("userOnline");
	window.location = "login.html";
}



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

    //extra check of de naam dus bestaat en dan een wachtwoord check
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
