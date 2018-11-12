$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    // Y mettre le code jQuery pour valider tous les champs du formulaire
    $("#bouton").on("click", function (event) {
        event.preventDefault();
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var date = $("#date").val();
        var adresse = $("#adresse").val();
        var mail = $("#email").val();
        var apiKey = "AIzaSyBEI0qnunpiIPJ8_UlPaVOswGa8n5vhQqg";

        $('#myModal').modal("show");

        if (nom.length < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du nom est obligatoire ! ");

        } else if (prenom.length < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du prenom est obligatoire ! ");
            

        } else if (date.length < 9) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du date de naissance est obligatoire ! ");
            

        } else if (adresse.length < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie de l'adresse est obligatoire ! ");
            


        } else if (mail.length < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du mail est obligatoire ! ");
            

        } else {
            var lien = "http://maps.google.com/maps?q="+ adresse;
            var map = "https://maps.googleapis.com/maps/api/staticmap?markers="+ adresse +"&zoom=10&size=400x300&key=" + apiKey;
            $(".modal-body").html('<p>vous êtes né le ' + date + ' et vous habitez à <a href="'+lien+'"><img src="'+ map +'"></a></p>');
            $(".modal-title").text("Bienvenue " + prenom);
        }
        $('#myModal').modal("show");
    });

});
