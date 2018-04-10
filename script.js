
// Array users
var user = [
    {client : "toto", password : "tata" },
    {client:  "lolo", password : "lala" }
]
var facture= [
        { id_client : "toto", société:  "SAS",  montant: 123,  active: true },
        { id_client : "lolo", société:  "LLL",  montant: 300,   active: true }   
    ]
var username        = prompt("nom utilisateur: ")
  , userpassword    = prompt("mot de passe : ");

var display = function(username, userpassword){
    user.forEach(function(e){
        if (username === e.client && userpassword === e.password) {
            facture.forEach(function(e) {
                if (e.id_client == username) {
                    document.getElementById("affichage-facture").innerHTML =
                    "Facture client :   " + e.id_client   +"</br>"
                    +"société:          " + e.société     +"</br>"
                    +"montant:          " + e.montant     + "€";
                }
            })
        }
    });
}

// display(username, userpassword);

/* ************************************************************************* */

//affichage login
var login = document.getElementById('login');
var inscription = document.getElementById('inscription');

login.addEventListener('mousedown', function (e) {
    document.getElementsByClassName('login').innerHTML=
    " ";
});