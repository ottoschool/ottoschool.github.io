document.addEventListener("DOMContentLoaded", onkokirjautunut);

function onkokirjautunut(){
    let kirjautunut = "kylla";
    if (kirjautunut == "kylla"){
        document.getElementById("tervetulo_teksti").textContent += " Otto";
    }
}
