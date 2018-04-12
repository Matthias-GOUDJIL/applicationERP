// Class ***********************************************************************
class Client {
    constructor(client, password,factures){
        this.client= client;
        this.password= password;
        this.factures= factures;
    }
}
class Facture {
    constructor(id_client, société,montant,active) {
      this.id_client = id_client;
      this.société = société;
      this.montant= montant;
      this.active= active;
    }
  }

//data **************************************************************************
var user = [
    // {
    // client:   "toto",
    // password: "tata",
    // factures:  [{id_client:      "toto",
    //                 société:    "SAS",
    //                 montant:    123,
    //                 active:     true }]
    // }
    // ,
    // {
    //     client:   "lolo",
    //     password: "lala",
    //     factures: [{ id_client:  "lolo",
    //                 société:    "LLL",
    //                 montant:    300,
    //                 active:     true }] 
    // }
]

//variables Login ***************************************************************
var button_Login =           document.getElementById('buttonLogin');
var form_Login =             document.getElementById('formLogin');
var name_Login =             document.getElementById('nameLogin');
var password_Login =         document.getElementById('passwordLogin');
var login_Submit=            document.getElementById('loginSubmit');

//variables New User ************************************************************
var button_New_User=         document.getElementById('buttonNewUser');
var form_New_User =          document.getElementById('formNewUser');
var name_New_User =          document.getElementById('newUserName');
var password_New_User =      document.getElementById('newUserPassword');
var new_User_Submit=         document.getElementById('newUserSubmit');

//variables New Facture **********************************************************
var new_Facture_Button=      document.getElementById('newFactureButton');
var new_Facture_Field=        document.getElementById('newFactureField');
var new_Facture_Societe=     document.getElementById('newFactureSociete');
var new_Facture_Montant=     document.getElementById('newFactureMontant');
var new_Facture_Submit=      document.getElementById('newFactureSubmit');

//variables d'affichage **********************************************************
var display=                 document.getElementById('display');
var list_Factures=           document.getElementById('listFactures');


//Login **************************************************************************
button_Login.addEventListener('click', function (e) {
    form_Login.classList.toggle('hide');
    if (!form_New_User.classList.contains('hide')) {
        form_New_User.classList.add('hide');
    }
});

login_Submit.addEventListener('click', function (e) {
    e.preventDefault();

    var name_Input= document.forms.formLogin.nameLogin.value;
    var password_Input= document.forms.formLogin.passwordLogin.value;
    var societe_Input=  document.forms.formLogin.newFactureSociete.value;
    var montant_Input=  document.forms.formLogin.newFactureMontant.value;

    user.forEach(function(el) {
       
        if ( name_Input === el.client && password_Input === el.password ) {
            display.innerHTML = "Listes des factures du client " + el.client+ ":</br></br>";
            for (let index = 0; index < el.factures.length; index++) {
                list_Factures.innerHTML =" <li>société: " + el.factures[index].société +
                "</br>montant: " + el.factures[index].montant + "<hr>";
                
            }
        }
        console.log(user);
    });
});

//Nouveau compte ********************************************************************

button_New_User.addEventListener('click', function (e) {
    form_New_User.classList.toggle('hide');
    if (!form_Login.classList.contains('hide')) {
        form_Login.classList.add('hide');
    }
});

new_User_Submit.addEventListener('click', function (e) {
    e.preventDefault();
    
    var name_Input=     document.forms.formNewUser.newUserName.value;
    var password_Input= document.forms.formNewUser.newUserPassword.value;
    var societe_Input=  document.forms.formNewUser.newUserSociete.value;
    var montant_Input=  document.forms.formNewUser.newUserMontant.value;
    var factures= [];
    
    var new_Facture= new Facture(name_Input,societe_Input,montant_Input,true);
    factures.push(new_Facture);
    
    var new_Client= new Client(name_Input,password_Input,factures);
    user.push(new_Client);
    form_New_User.classList.toggle('hide');
    alert('bonjour '+ name_Input + ', votre compte a été crée. Vous pouvez maintenant vous connecter');
    
});

//Ajouter facture **********************************************************************
new_Facture_Button.addEventListener('click', function () {
    new_Facture_Field.classList.toggle('hide');
});

new_Facture_Submit.addEventListener('click', function (e) {

    var name_Input= document.forms.formLogin.nameLogin.value;
    var societe_Input=  document.forms.formLogin.newFactureSociete.value;
    var montant_Input=  document.forms.formLogin.newFactureMontant.value;

    if (societe_Input !== undefined && montant_Input !== undefined ) {
        var new_Facture= new Facture(name_Input,societe_Input,montant_Input,true);
        user.forEach(function (e) {
            if (e.client === name_Input){
                e.factures.push(new_Facture);
                var newLi = document.createElement("li"); 
                var newContent = document.createTextNode(
                " société: " + new_Facture.société +
                "        montant: " + new_Facture.montant ); 
                newLi.appendChild(newContent);  
                document.getElementById("listFactures").appendChild(newLi); 
            }
        }) 
    }
});