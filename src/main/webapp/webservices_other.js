/**
 * 
 */
  
 /*
 Liste pour avec mise en forme dans template
 */
 
  function charger_liste_O_c(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if(this.readyState == 4) {
			if(this.status ==  200) {
				afficher_others_c(request.responseText);
			}
		} 
	};	
	
	request.open("GET", "http://localhost:8080/FilRougeIntra/rest/autres/categories", true);
	request.send();
}

  function charger_liste_O_e(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if(this.readyState == 4) {
			if(this.status ==  200) {
				afficher_others_e(request.responseText);
			}
		} 
	};	
	
	request.open("GET", "http://localhost:8080/FilRougeIntra/rest/autres/etats", true);
	request.send();
}

  function charger_liste_O_v(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if(this.readyState == 4) {
			if(this.status ==  200) {
				afficher_others_v(request.responseText);
			}
		} 
	};	
	
	request.open("GET", "http://localhost:8080/FilRougeIntra/rest/autres/film_versions", true);
	request.send();
}

  function charger_liste_O_p(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if(this.readyState == 4) {
			if(this.status ==  200) {
				afficher_others_p(request.responseText);
			}
		} 
	};	
	
	request.open("GET", "http://localhost:8080/FilRougeIntra/rest/autres/pegi", true);
	request.send();
}
 
 function afficher_others_c(reponse) {
	var contenuJSON = JSON.parse(reponse);
	var tbody_liste_o_c = document.getElementById('liste_o_c');
	var template = document.getElementById('other_c_template');
	
		tbody_liste_o_c.innerHTML = "";
		for (i = 0; i < contenuJSON.length; i++) {
		var clone = document.importNode(template.content, true);
		
		var tempId = clone.querySelector('#other_c_id');
		var tempDes = clone.querySelector('#other_c_description');
		
		tempId.id += contenuJSON[i].codeCategorie;
		tempDes.id += contenuJSON[i].description;
			
		tempId.value = contenuJSON[i].codeCategorie;
		tempDes.value = contenuJSON[i].description 
		
		var btn_modifier_o_c = clone.querySelector('#btn_modifier_o_c');
		btn_modifier_o_c.setAttribute("onclick", "update_O_c("+contenuJSON[i].codeCategorie+")");
		
		var btn_supprimer_o_c = clone.querySelector('#btn_supprimer_o_c');
		btn_supprimer_o_c.setAttribute("onclick", "delete_O_c("+contenuJSON[i].codeCategorie+")");
		
		
		tbody_liste_o_c.appendChild(clone);
	}
}

 function afficher_others_e(reponse) {
	var contenuJSON = JSON.parse(reponse);
	var tbody_liste_o_e = document.getElementById('liste_o_e');
	var template = document.getElementById('other_e_template');
	
		tbody_liste_o_e.innerHTML = "";
		for (i = 0; i < contenuJSON.length; i++) {
		var clone = document.importNode(template.content, true);
		
		var tempId = clone.querySelector('#other_e_id');
		var tempDes = clone.querySelector('#other_e_description');
		
		tempId.id += contenuJSON[i].codeEtat;
		tempDes.id += contenuJSON[i].description;
			
		tempId.value = contenuJSON[i].codeEtat;
		tempDes.value = contenuJSON[i].description 
		
		var btn_modifier = clone.querySelector('#btn_modifier_o_e');
		btn_modifier.setAttribute("onclick", "update_O_e("+contenuJSON[i].codeEtat+")");
		
		var btn_supprimer = clone.querySelector('#btn_supprimer_o_e');
		btn_supprimer.setAttribute("onclick", "delete_O_e("+contenuJSON[i].codeEtat+")");
		
		
		tbody_liste_o_e.appendChild(clone);
	}
}

 function afficher_others_v(reponse) {
	var contenuJSON = JSON.parse(reponse);
	var tbody_liste_o_v = document.getElementById('liste_o_v');
	var template = document.getElementById('other_v_template');
	
		tbody_liste_o_v.innerHTML = "";
		for (i = 0; i < contenuJSON.length; i++) {
		var clone = document.importNode(template.content, true);
		
		var tempId = clone.querySelector('#other_v_id');
		var tempDes = clone.querySelector('#other_v_description');
		
		tempId.id += contenuJSON[i].codeVersion;
		tempDes.id += contenuJSON[i].description;
			
		tempId.value = contenuJSON[i].codeVersion;
		tempDes.value = contenuJSON[i].description 
		
		var btn_modifier = clone.querySelector('#btn_modifier_o_v');
		btn_modifier.setAttribute("onclick", "update_O_v("+contenuJSON[i].codeVersion+")");
		
		var btn_supprimer = clone.querySelector('#btn_supprimer_o_v');
		btn_supprimer.setAttribute("onclick", "delete_O_v("+contenuJSON[i].codeVersion+")");
		
		
		tbody_liste_o_v.appendChild(clone);
	}
}

 function afficher_others_p(reponse) {
	var contenuJSON = JSON.parse(reponse);
	var tbody_liste_o_p = document.getElementById('liste_o_p');
	var template = document.getElementById('other_p_template');
	
		tbody_liste_o_p.innerHTML = "";
		for (i = 0; i < contenuJSON.length; i++) {
		var clone = document.importNode(template.content, true);
		
		var tempId = clone.querySelector('#other_p_id');
		var tempDes = clone.querySelector('#other_p_description');
		
		tempId.id += contenuJSON[i].codePegi;
		tempDes.id += contenuJSON[i].description;
			
		tempId.value = contenuJSON[i].codePegi;
		tempDes.value = contenuJSON[i].description 
		
		var btn_modifier = clone.querySelector('#btn_modifier_o_p');
		btn_modifier.setAttribute("onclick", "update_O_p("+contenuJSON[i].codePegi+")");
		
		var btn_supprimer = clone.querySelector('#btn_supprimer_o_p');
		btn_supprimer.setAttribute("onclick", "delete_O_p("+contenuJSON[i].codePegi+")");
		
		
		tbody_liste_o_p.appendChild(clone);
	}
} 


 /*
 Add/Update/Delete
 */

 function add_O_c(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "ajoute");
				charger_liste_O_c();
			}
		}
	}

	var Id = document.getElementById('form_id_o_c').value;
	var Des = document.getElementById('form_description_o_c').value;
	
	var data = 
	'{"codeCategorie":"' + Id + '","description":"' + Des +'"}'
	
	console.log(data)
			
	request.open("POST", "http://localhost:8080/FilRougeIntra/rest/autres/categories", true);
	request.setRequestHeader("Content-type", "application/json");
	request.send(data);
}

 function add_O_e(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "ajoute");
				charger_liste_O_e();
			}
		}
	}

	var Id = document.getElementById('form_id_o_e').value;
	var Des = document.getElementById('form_description_o_e').value;
	
	var data = 
	'{"codeEtat":"' + Id + '","description":"' + Des +'"}'
			
	request.open("POST", "http://localhost:8080/FilRougeIntra/rest/autres/etats/", true);
	request.setRequestHeader("Content-type", "application/json");
	request.send(data);
}

 function add_O_v(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "ajoute");
				charger_liste_O_v();
			}
		}
	}
	var Id = document.getElementById('form_id_o_v').value;
	var Des = document.getElementById('form_description_o_v').value;
	
	var data = 
	'{"codeVersion":"' + Id + '","description":"' + Des +'"}'
			
	request.open("POST", "http://localhost:8080/FilRougeIntra/rest/autres/film_versions/", true);
	request.setRequestHeader("Content-type", "application/json");
	request.send(data);
}

 function add_O_p(){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "ajoute");
				charger_liste_O_p();
			}
		}
	}

	var Id = document.getElementById('form_id_o_p').value;
	var Des = document.getElementById('form_description_o_p').value;
	
	var data = 
	'{"codePegi":"' + Id + '","description":"' + Des +'"}'
			
	request.open("POST", "http://localhost:8080/FilRougeIntra/rest/autres/pegi/", true);
	request.setRequestHeader("Content-type", "application/json");
	request.send(data);
}

function update_O_c(id){
	var request = new XMLHttpRequest();
	
		request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "modifie");
				charger_liste_O_c();
			}
		}
	}

	
	var Id = document.getElementById('other_c_id' +id).value;
	var Des = document.getElementById('other_c_description' +id).value;
	
	
	var data = 
	'{"codeCategorie":"' + Id + '","description":"' + Des +'"}'
		
	request.open("PUT", "http://localhost:8080/FilRougeIntra/rest/autres/categories/", true);
	request.setRequestHeader("Content-type", "json");
	request.send(data);
}

function update_O_e(id){
	var request = new XMLHttpRequest();
	
		request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "modifie");
				charger_liste_O_e();
			}
		}
	}
	
	var Id = document.getElementById('other_e_id' +id).value;
	var Des = document.getElementById('other_e_description' +id).value;
	
	
	var data = 
	'{"codeEtat":"' + Id + '","description":"' + Des +'"}'
		
	request.open("PUT", "http://localhost:8080/FilRougeIntra/rest/autres/etats/" + id, true);
	request.setRequestHeader("Content-type", "json");
	request.send(data);
}

function update_O_v(id){
	var request = new XMLHttpRequest();
	
		request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "modifie");
				charger_liste_O_v();
			}
		}
	}
	
	var Id = document.getElementById('other_v_id' +id).value;
	var Des = document.getElementById('other_v_description' +id).value;
	
	
	var data = 
	'{"codeVersion":"' + Id + '","description":"' + Des +'"}'
		
	request.open("PUT", "http://localhost:8080/FilRougeIntra/rest/autres/film_versions/" + id, true);
	request.setRequestHeader("Content-type", "application/json");
	request.send(data);
}

function update_O_p(id){
	var request = new XMLHttpRequest();
	
		request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "modifie");
				charger_liste_O_p();
			}
		}
	}
	
	var Id = document.getElementById('other_p_id' +id).value;
	var Des = document.getElementById('other_p_description' +id).value;
	
	
	var data = 
	'{"codePegi":"' + Id + '","description":"' + Des +'"}'
		
	request.open("PUT", "http://localhost:8080/FilRougeIntra/rest/autres/pegi/" + id, true);
	request.setRequestHeader("Content-type", "application/json");
	request.send(data);
}

function delete_O_c(id){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "supprime");
				charger_liste_O_c();
			}
		}
	}
		
	request.open("DELETE", "http://localhost:8080/FilRougeIntra/rest/autres/categories/" + id, true);
	request.send();
}

function delete_O_e(id){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "supprime");
				charger_liste_O_e();
			}
		}
	}
		
	request.open("DELETE", "http://localhost:8080/FilRougeIntra/rest/autres/etats/" + id, true);
	request.send();
}

function delete_O_v(id){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "supprime");
				charger_liste_O_v();
			}
		}
	}
		
	request.open("DELETE", "http://localhost:8080/FilRougeIntra/rest/autres/film_versions/" + id, true);
	request.send();
}

function delete_O_p(id){
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				afficher_message(request.responseText, "supprime");
				charger_liste_O_p();
			}
		}
	}
		
	request.open("DELETE", "http://localhost:8080/FilRougeIntra/rest/autres/pegi/" + id, true);
	request.send();
}

 /*
 Méthode afficher message
 */


function afficher_message(reponse, action) {
	var contenuJSON = JSON.parse(reponse);
	var pMessage = document.getElementById('message_holder');
	var contenu = "Le autre [" + contenuJSON.description + "] a bien ete "+ action +".";
	pMessage.innerHTML = contenu;
}

