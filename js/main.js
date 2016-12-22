var vissenDB = {"vissen":[

    {

    "snoek":

        {

        "titel": "Snoek",

        "link_foto":"images/snoek.png",

        "info_vis":"De snoek (Esox lucius) is een grote zoetwatervis uit de familie van de snoeken (Esocidae). Het is een van de roofvissen die in België en Nederland voorkomen. De snoek is daarnaast in delen van Europa, Azië en Noord-Amerika te vinden. De snoek is een zoetwatervis en heeft een karakteristieke, torpedo-achtige lichaamsbouw. Snoeken kunnen 15 jaar oud worden.",

        "locaties":"Antwerpen"

        },

    "karper":

        {

        "titel": "Karper",

        "link_foto":"images/carp.png",

        "info_vis":"De Europese karper (Cyprinus carpio), ook wel gewoon karper, is een beenvis uit de orde van karperachtigen. De vis kan tot 120 cm lang worden.De karper is herkenbaar aan zijn 4 baarddraden, twee korte op de bovenlip, twee lange in de mondhoeken en de lange rugvin met zeer sterke eerste vinstralen. In de natuur kan hij 30 tot 40 jaar worden.",

        "locaties":"Gent, Brugge"

        },

    "baars":

        {

        "titel": "Baars",

        "link_foto":"images/baars.png",

        "info_vis":"De baars (Perca fluviatilis) is een vis uit de vissenfamilie Echte baarzen (Percidae), die in de Benelux inheems voorkomt. Verwanten van deze soort zijn onder andere de snoekbaars en de pos. De baars heeft een vrij hoog lichaam, twee rugvinnen en een kenmerkend patroon van meestal zes donkere dwarsbanden. De kleuren van de vis zeggen niet zoveel, maar aan de achterkant van de voorste rugvin heeft de baars altijd een zwarte vlek. De staart en de onderste vinnen hebben een oranje zweem.",

        "locaties":"Gent, Brugge"

        },

    "brasem":

        {

        "titel": "Brasem",

        "link_foto":"images/brasem.png",

        "info_vis":"De brasem (Abramis brama) is een vis die behoort tot de familie van de Cyprinidae. Het is een van de talrijkste vissen van Nederland en door zijn gewicht vaak de belangrijkste vis qua biomassa. De maximale lengte is 90 cm. Een Duitse recordvis uit 2000 was 85 cm lang en woog zeven kg. Normale lengten zitten in het bereik van 40 tot 60 cm en brasems boven de 70 cm komen alleen in specifieke omstandigheden met een lage stand aan brasem voor.",

        "locaties":"Gent, Antwerpen"

        },

    "paling":

        {

        "titel": "Paling",

        "link_foto":"images/paling.png",

        "info_vis":"De paling, ook wel aal of vollediger Europese aal (Anguilla anguilla), is een straalvinnige vis die behoort tot de familie echte palingen (Anguillidae). De soort is een trekvis. Deze bruin tot grijsachtig gekleurde vis heeft een zeer langwerpig lichaam dat meer dan een meter lang kan worden. Door de karakteristieke lichaamsbouw, lage rugkam en nauwelijks zichtbare schubben is deze gemakkelijk van andere vissen te onderscheiden.",

        "locaties":"Antwerpen, Oostende"

        },

    "blankvoorn":

        {

        "titel": "Blankvoorn",

        "link_foto":"images/blankvoorn.png",

        "info_vis":"De blankvoorn (Rutilus rutilus, synoniem: Leuciscus rutilus) is een vis uit de familie van de karperachtigen. In Nederland is het de meest algemeen voorkomende vis, die in bijna ieder watertype in grote aantallen voorkomt. Over het algemeen kan de blankvoorn herkend worden aan de rode vlek in de iris boven de pupil. In de grote rivieren en andere watertypen zijn de ogen soms bleek. Ook de kleur van de vinnen kan variëren, van bleek tot rood.",

        "locaties":"Gent, Oostende"

        },

    "haai":

        {

        "titel": "Haai",

        "link_foto":"images/haai.png",

        "info_vis":"De witte haai of mensenhaai (Carcharodon carcharias) is de grootste roofvis ter wereld en de enige nog levende soort uit het geslacht Carcharodon. De witte haai behoort tot de groep makreelhaaien (Lamniformes). Deze hebben geen knipvlies en een rolvormige spiraalklep. De familie Lamnidae waartoe de witte haai behoort, bestaat uit veruit de meest gespecialiseerde haaien en staat in vele voedselketens bovenaan.",

        "locaties":"ONBEKEND"

        },

    "paling":

        {

        "titel": "paling",

        "link_foto":"images/snoek.png",

        "info_vis":"De paling, ook wel aal of vollediger Europese aal (Anguilla anguilla), is een straalvinnige vis die behoort tot de familie echte palingen (Anguillidae). De soort is een trekvis. Deze bruin tot grijsachtig gekleurde vis heeft een zeer langwerpig lichaam dat meer dan een meter lang kan worden. Door de karakteristieke lichaamsbouw, lage rugkam en nauwelijks zichtbare schubben is deze gemakkelijk van andere vissen te onderscheiden.",

        "locaties":"Antwerpen, Oostende"
        
        }

    }]

}

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
	if(document.getElementById('GebruikersNaamHeader') != undefined){
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
	}else{

	};

	//VisdetailPagina dinges
	if(document.getElementById('visDetailInfo') != undefined){
	
		console.log(vissenDB.vissen[0].snoek);
		var linkdetail = document.getElementById('visDetailInfo');
		var visNaam = JSON.parse(localStorage.getItem('GeklikteVis'));
		switch(visNaam) {
		    case "karper":
		        var beginNaam = vissenDB.vissen[0].karper;
		        break;
		    case "snoek":
		        var beginNaam = vissenDB.vissen[0].snoek;
		        break;
		    case "brasem":
		        var beginNaam = vissenDB.vissen[0].brasem;
		        break;
		    case "paling":
		        var beginNaam = vissenDB.vissen[0].paling;
		        break;
		    case "baars":
		        var beginNaam = vissenDB.vissen[0].baars;
		        break;
		    case "blankvoorn":
		        var beginNaam = vissenDB.vissen[0].blankvoorn;
		        break;
		    case "haai":
		        var beginNaam = vissenDB.vissen[0].haai;
		        break;
		    default:
		        text = "I have never heard of that fish...";
		}

		console.log(beginNaam);
		linkdetail.innerHTML = "<h2>"+beginNaam.titel+"</h2><br/><p>"+beginNaam.info_vis+"</p><br/><br/><p><b>locatie:</b> "+beginNaam.locaties+"</p>";

	}else{

	}
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

function visDataUpdate(vissoort){
	var vis = vissoort;
    localStorage.setItem( 'GeklikteVis', JSON.stringify(vis));
};