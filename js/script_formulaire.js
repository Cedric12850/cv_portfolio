// méthode qui précharge le Dom
document.addEventListener('DOMContentLoaded', function() {

    // cible les élements input
let champ = document.getElementById('champ');
let name = document.getElementById('name');
let prenom = document.getElementById('prenom');
let objet = document.getElementById('objet');
let mail = document.getElementById('mail');
let contactBtn = document.getElementById('contactBtn');
let envoiFormulaire = document.getElementById('envoiFormulaire')

    // cible les span erreur
let nameErreur = document.getElementById('nameErreur');
let prenomErreur = document.getElementById('prenomErreur');
let objetErreur = document.getElementById('objetErreur');
let mailErreur = document.getElementById('mailErreur');
    

// vérification de la validité du champ nom
function isNomValide() {
    let isNomValide = name.value.trim();
    if (isNomValide == '') {
        name.style.border = "2px solid red";
        nameErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        name.style.border = "2px solid green";;
        nameErreur.textContent = "";
        return true;
    }
}
name.addEventListener('blur', isNomValide);


// vérification de la validité du champ prenom
function isPrenomValide() {
    let isPrenomValide = prenom.value.trim();
    if (isPrenomValide == '') {
        prenom.style.border = "2px solid red";
        prenomErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        prenom.style.border = "2px solid green";;
        prenomErreur.textContent = "";
        return true;
    }
}
prenom.addEventListener('blur', isPrenomValide);


// vérification de la validité du champ objet
function isobjetValide() {
    let isobjetValide = objet.value.trim();
    if (isobjetValide == '') {
        objet.style.border = "2px solid red";
        objetErreur.textContent = "Le champ ne doit pas être vide";
        return false;
    }else{
        objet.style.border = "2px solid green";;
        objetErreur.textContent = "";
        return true;
    }
}
objet.addEventListener('blur', isobjetValide);

// vérification de la validité du champ text
function isTextValide() {
    let isTextValide = message.value.trim();
    if (isTextValide == '') {
        message.style.border = "2px solid red";
        textErreur.textContent = "Le champ ne doit pas être vide";
        return false;
    }else{
        message.style.border = "2px solid green";;
        textErreur.textContent = "";
        return true;
    }
}
message.addEventListener('blur', isTextValide); // 'blur' pour le changement d'input



// vérification de la validité du champ mail
function isMailValide() {
    let isMailValide = mail.value.trim();
  
    let formMail = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    if (isMailValide == '') {
        mail.style.border = "2px solid red";
        mailErreur.textContent = "Le champ ne doit pas être vide"
        return false;
    }else{
        if(!formMail.test(isMailValide)){
            console.log(formMail.test(isMailValide))  //si le test renvoie false. Le message d'erreur forma est affiché
            mail.style.border = "2px solid red";
            mailErreur.textContent = "Le format mail n'est pas respecté";
            return false;
        }else{
        mail.style.border = "2px solid green";;
        mailErreur.textContent = ""; 
        return true;
        }
    }
}
mail.addEventListener('blur', isMailValide);

// Vérification du bouton envoyer
contactBtn.addEventListener ('click',(e)=>{
    e.preventDefault(); // empèche l'envoi du formulaire
console.log(e)

    if (!isNomValide()|| !isPrenomValide() || !isobjetValide() || !isTextValide() || !isMailValide()){  // si formulaire false = message d'erreur
        envoiFormulaire.textContent = "Votre formulaire présente des erreurs et ne peut donc pas être envoyé.";
        envoiFormulaire.style.color = "red"; 
    } else{
        champ.submit();
        alert("Formulaire Envoyé");
    }
})


})  // fin de la commande qui vérifie le DOM

