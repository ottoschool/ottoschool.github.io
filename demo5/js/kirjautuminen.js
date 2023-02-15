
document.addEventListener("DOMContentLoaded", onkokirjautunut);


function onkokirjautunut(){
    if (localStorage.getItem("kirjautunut") == "sisään"){
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("uloskirjautumis_lomake").style.display = "";
        document.getElementById("kirjautumis_lomake").style.display = "none";
    }
    else{
        document.getElementById("tervetulo_teksti").textContent = "Tervetuloa "
        document.getElementById("uloskirjautumis_lomake").style.display = "none";
        document.getElementById("kirjautumis_lomake").style.display = "";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut","sisään")
    onkokirjautunut()
}

function kirjaudu_ulos(){
    localStorage.setItem("nimi", "none")
    localStorage.setItem("kirjautunut","ulos")
    onkokirjautunut()
}