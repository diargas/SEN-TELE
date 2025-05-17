// Fonction d'inscription
function inscrire() {
    const email = document.getElementById('email').value;
    const mdp = document.getElementById('mdp').value;
    const age = document.getElementById('age').value;
    const nom = document.getElementById('nom').value;

    if (email && mdp && age && nom) {
        localStorage.setItem('utilisateur', JSON.stringify({ email, mdp, age, nom }));
        alert('Inscription réussie ! Connectez-vous.');
        window.location.href = 'connexion.html';
    } else {
        alert('Veuillez remplir tous les champs.');
    }
}

// Fonction de connexion
function connecter() {
    const email = document.getElementById('email').value;
    const mdp = document.getElementById('mdp').value;
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));

    if (utilisateur && utilisateur.email === email && utilisateur.mdp === mdp) {
        if (parseInt(utilisateur.age) >= 18) {
            window.location.href = 'adulte.html';
        } else {
            window.location.href = 'enfant.html';
        }
    } else {
        alert('Email ou mot de passe incorrect.');
    }
}
function logout() {
    window.location.href = "index.html";
}
