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
        $("#ajaxReceiver").load("Veille.html");
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

//theme--------------------------------------------------------------------------------------------------
function themeChange() {
    var theme = document.getElementById('theme').value;
    switch (theme) {
        case 'white': 
            console.log("white theme");
            document.documentElement.style.setProperty('--theme-font', 'black');
            document.documentElement.style.setProperty('--theme-bckgrnd', '#cfcfcf');
            document.body.style.backgroundImage = "none";

        break;
    
        case 'dark':
            console.log("dark theme");
            document.documentElement.style.setProperty('--theme-font', 'white');
            document.documentElement.style.setProperty('--theme-bckgrnd', '#292929');
            document.body.style.backgroundImage = "none";
        break;

        case 'blue':
            console.log("blue theme");
            document.documentElement.style.setProperty('--theme-font', 'black');
            document.documentElement.style.setProperty('--theme-bckgrnd', '#11055fa2');
            document.body.style.backgroundImage = "none";
        break;

        case 'red':
            console.log("red theme");
            document.documentElement.style.setProperty('--theme-font', '#fff204');
            document.documentElement.style.setProperty('--theme-bckgrnd', '#5f0505a2');
            document.body.style.backgroundImage = "none";
        break;

        case 'rage':
            console.log("rage theme");
            document.documentElement.style.setProperty('--theme-font', 'black');
            document.documentElement.style.setProperty('--theme-bckgrnd', 'none');
            document.body.style.backgroundImage = "url('images/ecran.jpg')";
        break;

        case '':;
        break;
   }
}

function loadCol() {
    var couleur = document.getElementById('couleur').value;
    document.getElementById('conteneur').style.backgroundColor = couleur;
}

function precedent() {
    var index = parseInt(document.getElementById('pg').value);
    if(index!=0){
        index = index - 10;
        document.getElementById('pg').value = index;
        loadDoc();
    }
}

function suivant() {
    var index = parseInt(document.getElementById('pg').value);
    index = index + 10;
    document.getElementById('pg').value = index;
    loadDoc();
}

function hideBut() {
    document.getElementsByClassName("pagechange")[0].style.visibility = "hidden";
    document.getElementsByClassName("pagechange")[1].style.visibility = "hidden";
    document.getElementsByClassName("pagechange")[2].style.visibility = "hidden";
    document.getElementsByClassName("pagechange")[1].value = "0";
}

function showBut() {
    document.getElementsByClassName("pagechange")[0].style.visibility = "visible";
    document.getElementsByClassName("pagechange")[1].style.visibility = "visible";
    document.getElementsByClassName("pagechange")[2].style.visibility = "visible";
}

function copyright() {
    var theDate=new Date();
    document.getElementById("footer").innerHTML = '<p><a href="https://www.instagram.com/lucas_cugnet/" target="_blank"><i class="bi bi-instagram" id="insta"></i></a><a href="https://www.facebook.com/people/Lucas-Cugnet/100008483671392/" target="_blank"><i class="bi bi-facebook" id="fb"></i></a><a href="https://www.snapchat.com/add/l.cugnet?share_id=yNruLtL4VQ0&locale=fr-FR" target="_blank"><i class="bi bi-snapchat" id="snap"></i></a></br>Copyright &copy '+theDate.getFullYear()+' CUGNET Lucas. Tous droits réservés.</p>';
}