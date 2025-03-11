// Tableau d'URL d'images
const profileImages = [
    "img/profile/profile1.png",
    "img/profile/profile2.png",
    "img/profile/profile3.png",
    "img/profile/profile4.png",
    "img/profile/profile5.png",
    "img/profile/profile6.png",
    "img/profile/profile7.png",
    "img/profile/profile8.png",
    "img/profile/profile9.png",
    "img/profile/profile10.png"

];

// Fonction pour choisir une image au hasard
function choisirImageAleatoire() {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
}

// Sélectionner l'élément img par son id
const profileImageElement = document.getElementById("profile-image");

// Modifier la source de l'image avec une image aléatoire
profileImageElement.src = choisirImageAleatoire();
