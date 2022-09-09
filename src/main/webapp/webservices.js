/**
 * 
 */
  
 /*
 Liste pour avec mise en forme dans template
 */
 
  function charger_listeF(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if(this.readyState == 4) {
			if(this.status ==  200) {
				afficher_films(request.responseText);
			}
		} 
	};	
	
	request.open("GET", "http://localhost:8080/FilRougeIntra/rest_film/film", true);
	request.send();
}
 
 function afficher_films(reponse) {
	var contenuJSON = JSON.parse(reponse);
	var tbody_liste_f = document.getElementById('liste_f');
	var template = document.getElementById('film_template');
	
		tbody_liste_f.innerHTML = "";
		for (i = 0; i < contenuJSON.length; i++) {
		var clone = document.importNode(template.content, true);
		
		var tempId = clone.querySelector('#temp_id');
		var tempNom = clone.querySelector('#temp_nom');
		var tempDes = clone.querySelector('#temp_description');
		var tempDu = clone.querySelector('#temp_duree');
		var tempPegi = clone.querySelector('#temp_pegi');
		var tempCat = clone.querySelector('#temp_categorie');
		var tempEtat = clone.querySelector('#temp_etat');
		var tempVer = clone.querySelector('#temp_version');
		var tempImg = clone.querySelector('#temp_codeImage');	
		var tempDateC = clone.querySelector('#temp_dateCrea');
		var tempDateM = clone.querySelector('#temp_dateModif');	
		
		tempNom.id += contenuJSON[i].noFilm;
		tempDes.id += contenuJSON[i].noFilm;
		tempDu.id += contenuJSON[i].noFilm;
		tempPegi.id += contenuJSON[i].noFilm;
		tempCat.id += contenuJSON[i].noFilm;
		tempEtat.id += contenuJSON[i].noFilm;
		tempVer.id += contenuJSON[i].noFilm;
		tempImg.id += contenuJSON[i].noFilm;
			
		tempId.value = contenuJSON[i].noFilm;
		tempNom.value = contenuJSON[i].nom 
		tempDes.value = contenuJSON[i].description 
		tempDu.value = contenuJSON[i].dureeFilm
		tempPegi.value = contenuJSON[i].pegi.codePegi 
		tempCat.value = contenuJSON[i].categorie.codeCategorie 
		tempEtat.value = contenuJSON[i].etat.codeEtat
		tempVer.value = contenuJSON[i].filmVersion.codeVersion 
		tempImg.value = contenuJSON[i].image.codeImage

		tempDateC.innerHTML = contenuJSON[i].dateCrea.year + "-" + contenuJSON[i].dateCrea.monthValue + "-" + contenuJSON[i].dateCrea.dayOfMonth;
		
		if (contenuJSON[i].dateModif != null) {
			tempDateM.innerHTML = contenuJSON[i].dateModif.year + "-" + contenuJSON[i].dateModif.monthValue + "-" + contenuJSON[i].dateModif.dayOfMonth;
		}

		
		var btn_modifier = clone.querySelector('#btn_modifier');
		btn_modifier.setAttribute("onclick", "update_F("+contenuJSON[i].noFilm+")");
		
		var btn_supprimer = clone.querySelector('#btn_supprimer');
		btn_supprimer.setAttribute("onclick", "delete_F("+contenuJSON[i].noFilm+")");
		
		
		tbody_liste_f.appendChild(clone);
	}
}

 /*
 Add/Update/Delete
 */

 function add_F(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "ajoute");
				charger_listeF();
			}
		}
	}
	
	var Nom = document.getElementById('form_nom').value;
	var Des = document.getElementById('form_description').value;
	var Du = document.getElementById('form_duree').value;
	var Pegi = document.getElementById('form_pegi').value;
	var Cat = document.getElementById('form_categorie').value;
	var Etat = document.getElementById('form_etat').value;
	var Ver = document.getElementById('form_version').value;
	var Img = document.getElementById('form_codeImage').value;	
	
	var data = 
	"nom="+ Nom 
	+ "&description=" + Des
	+ "&dureeFilm=" + Du
	+ "&codePegi=" + Pegi
	+ "&codeCategorie=" + Cat
	+ "&codeEtat=" + Etat
	+ "&codeVersion=" + Ver
	+ "&codeImage=" + Img
			
	request.open("POST", "http://localhost:8080/FilRougeIntra/rest_film/film/", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send(data);
}

function update_F(id){
	var request = new XMLHttpRequest();
	
		request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "modifie");
				charger_listeF();
			}
		}
	}
	
	var Nom = document.getElementById('temp_nom' +id).value;
	var Des = document.getElementById('temp_description' +id).value;
	var Du = document.getElementById('temp_duree' +id).value;
	var Pegi = document.getElementById('temp_pegi' +id).value;
	var Cat = document.getElementById('temp_categorie' +id).value;
	var Etat = document.getElementById('temp_etat' +id).value;
	var Ver = document.getElementById('temp_version' +id).value;
	var Img = document.getElementById('temp_codeImage' +id).value;	
	
	var data = 
	"nom="+ Nom 
	+ "&description=" + Des
	+ "&dureeFilm=" + Du
	+ "&codePegi=" + Pegi
	+ "&codeCategorie=" + Cat
	+ "&codeEtat=" + Etat
	+ "&codeVersion=" + Ver
	+ "&codeImage=" + Img
	
	
	request.open("PUT", "http://localhost:8080/FilRougeIntra/rest_film/film/" + id, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send(data);
}

function delete_F(id){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "supprime");
				charger_listeF();
			}
		}
	}
		
	request.open("DELETE", "http://localhost:8080/FilRougeIntra/rest_film/film/" + id, true);
	request.send();
}

 /*
 Méthode afficher message
 */


function afficher_message(reponse, action) {
	var contenuJSON = JSON.parse(reponse);
	var pMessage = document.getElementById('message_holder');
	var contenu = "Le film [" + contenuJSON.nom + "] a bien ete "+ action +".";
	pMessage.innerHTML = contenu;
}

