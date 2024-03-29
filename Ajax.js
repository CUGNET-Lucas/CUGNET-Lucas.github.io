function loadProfile() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for profile");
        $("#ajaxReceiver").load("Profil.html");
    });
}
function loadCompetences() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for skills");
        $("#ajaxReceiver").load("Competences.html");
    });
}
function loadProjects() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for projects");
        $("#ajaxReceiver").load("Projets.html");
    });
}
function loadResearches() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for veilles");
        $("#ajaxReceiver").load("Veille.html");
    });
}
function loadCv() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for cv");
        document.getElementById("ajaxReceiver");
        $("#ajaxReceiver").load("Cv.html");
    });
}
function loadContact() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for contact");
        document.getElementById("ajaxReceiver");
        $("#ajaxReceiver").load("Contact.html");
    });
}
function loadLegal() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for contact");
        document.getElementById("ajaxReceiver");
        $("#ajaxReceiver").load("Ml.html");
    });
}

//projects--------------------------------------------------------------------------------------------------

function modalProject(project,command){
    if(command == "open"){ 
        document.getElementById(project).showModal();
        console.log('ouverture modale');
    }else{
        document.getElementById(project).close();
        console.log('fermeture modale');
    }
}

//footer----------------------------------------------------------------------------------------------------

function copyright() {
    var theDate=new Date();
    document.getElementById("footer").innerHTML = '<p><a href="https://www.instagram.com/lucas_cugnet/" target="_blank"><i class="bi bi-instagram" id="insta"></i></a><a href="https://www.facebook.com/people/Lucas-Cugnet/100008483671392/" target="_blank"><i class="bi bi-facebook" id="fb"></i></a><a href="https://www.snapchat.com/add/l.cugnet?share_id=yNruLtL4VQ0&locale=fr-FR" target="_blank"><i class="bi bi-snapchat" id="snap"></i></a></br><span onclick="loadLegal()">Copyright &copy '+theDate.getFullYear()+' CUGNET Lucas. Tous droits réservés.</span></p>';
}


//form-----------------------------------------------------------------------------------------------------
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Quelque chose s'est mal passé!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});