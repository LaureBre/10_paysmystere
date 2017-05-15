// Taille d'affichage de la map :

function definirHauteur() {
  var carte = document.getElementById('carte');
  var largeurCarte = carte.offsetWidth;
  carte.style.height = Math.round(largeurCarte/1.36)+'px';
  alert(largeurCarte + 'px ' + carte.offsetHeight);
}

window.onresize = definirHauteur();
