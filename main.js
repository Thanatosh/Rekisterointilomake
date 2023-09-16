document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const kayttajaID = document.getElementById("käyttäjä");
    const salasana = document.getElementById("salasana");
    const nimi = document.getElementById("nimi");
    const osoite = document.getElementById("osoite");
    const maa = document.getElementById("maa");
    const postinumero = document.getElementById("postinumero");
    const sahkoposti = document.getElementById("sähköposti");
    const errorMessage = document.getElementById("virheilmoitus");
    const asteriskTunniste = document.getElementById("asteriskTunniste");
    const asteriskHenkilo = document.getElementById("asteriskHenkilö");
    const errorUser = document.getElementById("errorUser");
    const errorPost = document.getElementById("errorPost")
    const errorEmail = document.getElementById("errorEmail")

    submitButton.addEventListener("click", function () {
        if (
            kayttajaID.value.trim() === "" ||
            salasana.value.trim() === ""
        ) {
            asteriskTunniste.textContent = "*"
            errorMessage.textContent = "Täytä kaikki pakolliset kentät (*)";
        } else {
            asteriskTunniste.textContent = ""
            errorMessage.textContent = "";
        }

        if (
            kayttajaID.value.trim().length < 6 && kayttajaID.value.trim() !== ""
        ) {
            errorUser.textContent = "Käyttäjä ID tulee olla vähintään 6 merkkiä pitkä";
        } else {
            errorUser.textContent = "";
        }

        if (
            nimi.value.trim() === "" ||
            osoite.value.trim() === "" ||
            maa.value === "" ||
            postinumero.value.trim() === "" ||
            sahkoposti.value.trim() === ""
        ) {
            asteriskHenkilo.textContent = "*"
            errorMessage.textContent = "Täytä kaikki pakolliset kentät (*)";
        } else {
            asteriskHenkilo.textContent = ""
            errorMessage.textContent = "";
        }

        if ( 
            postinumero.value.trim().length !== 5 && postinumero.value.trim() !== ""
        ) {
            errorPost.textContent = "Postinumeron tulee olla 5 merkkiä pitkä";
        } else {
            errorPost.textContent = "";
        }

        var validRegex = /^\w+(\.\w+)*@\w+\.\w+$/i;
          
        if (
            sahkoposti.value.match(validRegex) || sahkoposti.value.trim() === ""
        ) {
            errorEmail.textContent = ""
        } else {
            errorEmail.textContent = "Syötä oikea Email osoite"
        }

        const sukupuoliMies = document.getElementById("sukupuoli-mies");
        const sukupuoliNainen = document.getElementById("sukupuoli-nainen");
        if (!sukupuoliMies.checked && !sukupuoliNainen.checked) {
            asteriskSukupuoli.textContent = "*";
            errorMessage.textContent = "Täytä kaikki pakolliset kentät (*)";
        } else {
            asteriskSukupuoli.textContent = "";
        }

        const kieliSuomi = document.getElementById("kieli-suomi");
        const kieliMuu = document.getElementById("kieli-muu");
        if (!kieliSuomi.checked && !kieliMuu.checked) {
            asteriskKieli.textContent = "*";
            errorMessage.textContent = "Täytä kaikki pakolliset kentät (*)";
        } else {
            asteriskKieli.textContent = "";
        }
    });
});
