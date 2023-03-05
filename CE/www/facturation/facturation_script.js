function fournisseurCheck() {
	// let select_element = document.getElementsByName("SelectFournisseur")[0];
	let select_element = document.getElementById("selfourn");
	if (select_element.value == "def") {
		select_element.focus();
		alert("Veuillez entrer un fournisseur");
		return false;
	}
	return true;
}

function tvaCheck() {
	let tva_element = document.getElementById("tva");
	if (tva_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre numéro de tva");
	return false;
}

function nameCheck() {
	let name_element = document.getElementById("name");
	if (name_element.value != "") {
		return true;
	}
	alert("Veuillez entrer un nom");
	return false;
}

function firstnameCheck() {
	let firstname_element = document.getElementById("fname");
	if (firstname_element.value != "") {
		return true;
	}
	alert("Veuillez entrer un prénom");
	return false;
}

function emailCheck() {
	let email_element = document.getElementById("email");
	if (email_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre mail");
	return false;
}

function telCheck() {
	let tel_element = document.getElementById("tel");
	if (tel_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre numéro de téléphone");
	return false;
}

function adrCheck() {
	let adr_element = document.getElementById("adr");
	if (adr_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre adresse");
	return false;
}

function regCheck() {
	let reg_element = document.getElementById("reg");
	if (reg_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre région");
	return false;
}

function cityCheck() {
	let city_element = document.getElementById("city");
	if (city_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre ville");
	return false;
}

function zipCheck() {
	let zip_element = document.getElementById("zip");
	if (zip_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre code postal");
	return false;
}

function cbCheck() {
	let cb_element = document.getElementById("cb");
	if (cb_element.value != "") {
		return true;
	}
	alert("Veuillez entrer votre carte de paiement");
	return false;
}

function check(event) {
	let bool_check = fournisseurCheck() && tvaCheck() && nameCheck() && firstnameCheck() && emailCheck() && telCheck() && adrCheck() && regCheck() && cityCheck() && zipCheck() && cbCheck();
	if (bool_check) {
		return true;
	}
	event.preventDefault();
}

window.onload = function() {
	const fact_form = document.getElementById("fact");
	// alert(fact_form)
	fact_form.addEventListener("submit", check);
}
