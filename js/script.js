// Compte à rebours
const eventDate = new Date("March 20, 2026 09:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        days + "j " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "LE COMBAT A COMMENCÉ !";
    }
}, 1000);

// Formulaire
document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    alert("Bienvenue dans l'arène, " + nom + " ! Votre inscription est enregistrée.");
});