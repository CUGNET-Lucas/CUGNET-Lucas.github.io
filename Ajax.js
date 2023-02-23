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
        console.log("request for researches");
        $("#ajaxReceiver").load("VeilleJur.html");
    });
}
function loadTech() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for technology");
        $("#ajaxReceiver").load("VeilleTech.html");
    });
}
function loadCv() {
    $(document).ready(function(){
        //Charge les éléments p depuis la page "une/url" et les insère dans #re
        console.log("request for cv");
        document.getElementById("ajaxReceiver").
        $("#ajaxReceiver").load("Cv.html");
    });
}

//projects--------------------------------------------------------------------------------------------------

function showProject(idProjet){
    let acc = document.getElementsByClassName("projectButton");
    let i = idProjet;
    console.log(i);
    if (document.getElementById(i).style.height == "auto") {
        document.getElementById(i).style.height = null;
        let x = i-1;
        acc[x].classList.toggle("projectButtonAlt");
    } else {
        document.getElementById(i).style.height = "auto";
        let x = i-1;
        acc[x].classList.toggle("projectButtonAlt");
    };
}


function copyright() {
    var theDate=new Date();
    document.getElementById("footer").innerHTML = '<p><a href="https://www.instagram.com/lucas_cugnet/" target="_blank"><i class="bi bi-instagram" id="insta"></i></a><a href="https://www.facebook.com/people/Lucas-Cugnet/100008483671392/" target="_blank"><i class="bi bi-facebook" id="fb"></i></a><a href="https://www.snapchat.com/add/l.cugnet?share_id=yNruLtL4VQ0&locale=fr-FR" target="_blank"><i class="bi bi-snapchat" id="snap"></i></a></br>Copyright &copy '+theDate.getFullYear()+' CUGNET Lucas. Tous droits réservés.</p>';
}