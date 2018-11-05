function validation() {
    var nom = document.getElementById("Nom").value.length;
    var prenom = document.getElementById("Prenom").value.length;
    var date_naissance = document.getElementById("date").value.length;
    var adresse = document.getElementById("Adresse").value.length;
    var mail = document.getElementById("email").value.length;
    var error = document.querySelector("#error");
    var resultat = document.querySelector("#resultat");

    if (nom < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';


        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie du nom est obligatoire ! "

    } else if (prenom < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie du prenom est obligatoire ! ";

    } else if (adresse < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie  d'adresse est obligatoire ! "
    } else if (mail < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie de mail est obligatoire ! "

    } else if (date_naissance < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie de la date de naissancee est obligatoire ! ";
    } else {
        error.style.display = 'none';
        resultat.style.display = 'block';

        var d = document.querySelector("#resultat");
        d.style.backgroundColor = 'rgb(0, 128, 0)';
        d.style.padding = '5px';
        var t = document.getElementById("resultat");
        t.style.color = "rgb(255, 255, 255)";
        t.innerHTML = "Bienvenue" + " " + document.querySelector("#Prenom").value;
    }



}