// Listing des pays du monde
// Classement par continent, pour servir l'indice 'continent':

var paysAfrique = ['Afrique du Sud', 'Algérie', 'Angola', 'Bénin', 'Botswana',
  'Burkina Faso', 'Burundi', 'Cameroun', 'Cap-Vert', 'République centrafricaine',
  'Comores', 'République du Congo', 'République démocratique du Congo',
  'Côte d’Ivoire', 'Djibouti', 'Égypte', 'Érythrée', 'Éthiopie', 'Gabon',
  'Gambie', 'Ghana', 'Guinée', 'Guinée-Bissau', 'Guinée équatoriale', 'Kenya',
  'Lesotho', 'Liberia', 'Libye', 'Madagascar', 'Malawi', 'Mali', 'Maroc',
  'Maurice', 'Mauritanie', 'Mozambique', 'Namibie', 'Niger', 'Nigeria',
  'Ouganda', 'Rwanda', 'Sahara Occidental', 'Sao Tomé-et-Principe', 'Sénégal',
  'Seychelles', 'Sierra Leone', 'Somalie', 'Soudan', 'Soudan du Sud',
  'Swaziland', 'Tanzanie', 'Tchad', 'Togo', 'Tunisie', 'Zambie', 'Zimbabwe'];

var paysAmerique = ['Antigua-et-Barbuda', 'Argentine', 'Bahamas', 'Barbade',
  'Belize', 'Bolivie', 'Brésil', 'Canada', 'Chili', 'Colombie', 'Costa Rica',
  'Cuba', 'République dominicaine', 'Dominique', 'Équateur', 'États-Unis',
  'Grenade', 'Guatemala', 'Guyana', 'Haïti', 'Honduras', 'Jamaïque', 'Mexique',
  'Nicaragua', 'Panama', 'Paraguay', 'Pérou', 'Saint-Christophe-et-Niévès',
  'Sainte-Lucie', 'Saint-Vincent-et-les-Grenadines', 'Salvador', 'Suriname',
  'Trinité-et-Tobago', 'Uruguay', 'Venezuela'];

var paysAsie = ['Afghanistan', 'Arabie saoudite', 'Bahreïn', 'Bangladesh',
  'Bhoutan', 'Birmanie', 'Brunei', 'Cambodge', 'Chine', 'Chypre', 'Corée du Nord',
  'Corée du Sud', 'Émirats arabes unis', 'Géorgie', 'Inde', 'Indonésie', 'Irak',
  'Iran', 'Israël', 'Japon', 'Jordanie', 'Kazakhstan', 'Kirghizistan', 'Koweït',
  'Laos', 'Liban', 'Malaisie', 'Maldives', 'Mongolie', 'Népal', 'Oman',
  'Ouzbékistan', 'Pakistan', 'Philippines', 'Qatar', 'Singapour', 'Sri Lanka',
  'Syrie', 'Tadjikistan', 'Thaïlande', 'Timor oriental', 'Turkménistan',
  'Turquie', 'Viêt Nam', 'Yémen'];

var paysEurope = ['Albanie', 'Allemagne', 'Andorre', 'Autriche', 'Belgique',
  'Biélorussie', 'Bosnie-Herzégovine', 'Bulgarie', 'Chypre',
  'Croatie', 'Danemark', 'Espagne', 'Estonie', 'Finlande', 'France', 'Grèce',
  'Hongrie', 'Irlande', 'Islande', 'Italie', 'Lettonie', 'Liechtenstein',
  'Lituanie', 'Luxembourg', 'Macédoine', 'Malte', 'Moldavie', 'Monaco',
  'Monténégro', 'Norvège', 'Pays-Bas', 'Pologne', 'Portugal',
  'République tchèque', 'Roumanie', 'Royaume-Uni', 'Russie', 'Saint-Marin',
  'Serbie', 'Slovaquie', 'Slovénie', 'Suède', 'Suisse', 'Ukraine', 'Vatican'];

var paysOceanie = ['Australie', 'Fidji', 'Kiribati', 'Marshall', 'Micronésie',
  'Nauru', 'Nouvelle-Zélande', 'Palaos', 'Papouasie-Nouvelle-Guinée', 'Salomon',
  'Samoa', 'Tonga', 'Tuvalu', 'Vanuatu'];

// Cas particulier des pays frontaliers
// pouvant être classés à la fois en Asie et en Europe :
var paysFrontalier = ['Arménie', 'Géorgie', 'Azerbaïdjan'];

// Concaténation des tableaux listant les pays reconnus :
var pays = paysAsie.concat(paysAmerique.concat(paysAfrique.concat(paysEurope.concat(paysOceanie.concat(paysFrontalier)))));

// Sélection au hasard d'un pays à deviner :
var paysMystere = pays[Math.floor(Math.random()*pays.length)];

// Remplacement des lettres accentuées pour la comparaison
var paysMystereAcc = '';
for (i=0; i<paysMystere.length;i++) {
  if ((paysMystere[i] === 'é') || (paysMystere[i] === 'É') || (paysMystere[i] === 'è') || (paysMystere[i] === 'ê') || (paysMystere[i] === 'ë')) { paysMystereAcc = paysMystereAcc.concat('e'); }
  else if ((paysMystere[i] === 'ï') || (paysMystere[i] === 'î') || (paysMystere[i] === 'ì')) { paysMystereAcc = paysMystereAcc.concat('i'); }
  else if ((paysMystere[i] === 'ö') || (paysMystere[i] === 'ô') || (paysMystere[i] === 'ò')) { paysMystereAcc = paysMystereAcc.concat('o'); }
  else { paysMystereAcc = paysMystereAcc.concat(paysMystere[i]); }
}

// Nombre de lettres une fois les espaces et tirets retirés
var nbLettresPays = 0;
for (i=0; i < paysMystere.length; i++) {
  if ((paysMystere[i] !== ' ') && (paysMystere[i] !== '-')) {
    nbLettresPays += 1;
  }
}

// Création des cases pour les lettres du pays :
var mot = document.getElementById('mot');
// On crée des cases pour les lettres et les espaces et tirets
for (i=0; i< paysMystere.length; i++) {
  if (paysMystere[i] === ' ') {
    mot.innerHTML += '<input type="text" size="1" maxlength="1" style="background-color:grey" disabled="disabled" name="espace' + i + '">';
  }
  else if (paysMystere[i] === '-') {
    mot.innerHTML += '<input type="text" size="1" maxlength="1" style="background-color:grey" disabled="disabled" name="tiret' + i + '" placeholder="-">';
  }
  else {
    mot.innerHTML += '<input type="text" size="1" maxlength="1" id="lettre' + i + '" name="lettre' + i + '" onkeyup="maj(' + i + ');">';
  }
}
// Ajout du bouton "j'ai trouvé"
mot.innerHTML += '<a href=#><input type="text" id="guess" placeholder="J\'ai trouvé !" onClick="verifier()"></a>';

// Passer les lettres en majuscules après saisie par utilisateur
function maj(i) {
  document.getElementById('lettre' + i).value = document.getElementById('lettre' + i).value.toUpperCase();
}

// Remplir les cases si on clic sur une lettre du pays
function remplir(lettre) {
  // seulement si on n'a pas dépassé le quota de clics !
  if (nb <= nbLettresPays) {
    // mais on doit
    for (i=0; i<nbLettresPays; i++) {
      if (lettre === paysMystereAcc[i].toUpperCase()) {
        var elem = document.getElementById('lettre' + i);
        elem.value = lettre;
        elem.style.backgroundColor = 'pink';
      }
    }
    // cacher la lettre déjà cliquée
    var bouton = document.getElementById(lettre);
    bouton.innerText = ' ';
    bouton.hide;
  }
}

var voyelles = 0;
for (i=0; i<nbLettresPays; i++) {
  if ((paysMystereAcc[i].toUpperCase() === 'A') || (paysMystereAcc[i].toUpperCase() === 'E')
      || (paysMystereAcc[i].toUpperCase() === 'I') || (paysMystereAcc[i].toUpperCase() === 'O')
      || (paysMystereAcc[i].toUpperCase() === 'U') || (paysMystereAcc[i].toUpperCase() === 'Y')) {
      voyelles += 1;
    }
  }

function indice(type) {
  if (type === '1ereLettre') {
    document.getElementById('indice1ereLettre').innerText = '1ère lettre : ' + paysMystere[0];
    // Et pourquoi ça me perd le style par contre.... je ne sais pas !
  }
  else if (type === 'voyelles') {
    document.getElementById('indiceNbVoyelles').innerText = voyelles + ' voyelles';
  }
}

var nb = 0;
function essais() {
  while (nb < nbLettresPays) {
    nb += 1;
    document.getElementById('essais').innerText = nb + '/' + nbLettresPays;
    if (nb === nbLettresPays) {
      document.getElementById('essais').innerText = 'C\'est fini !';
      var reponse = document.getElementById('reponse');
      var lienWiki = document.getElementById('lienWiki');
      var p = document.createElement('p');
      p.innerHTML = 'La réponse était : <strong>' + paysMystere +'</strong>';
      reponse.appendChild(p);
      var lien = document.createElement('a');
      lien.href = urlWikiPays;
      lien.target = "_blank";
      lien.title = "Voir sur Wikipedia";
      lien.appendChild(document.createTextNode('En savoir plus sur ce pays : (Wikipedia)'));
      lienWiki.appendChild(lien);
      document.getElementById('carte').style.backgroundImage = "url('" + urlGoogleMapPays + "')";
    }
    else {
      return;
    }
  }
}

function verifier() {
  var contenu = '';
  for (i=0; i<paysMystere.length; i++) {
    var id = 'lettre' + i;
    contenu = contenu.concat(document.getElementById(id).value);
  }
  if (contenu===paysMystereAcc.toUpperCase()) {
    document.getElementById('guess').placeholder = 'Bravo !';
    document.getElementById('essais').innerText = 'C\'est fini !';
    var reponse = document.getElementById('reponse');
    var lienWiki = document.getElementById('lienWiki');
    var p = document.createElement('p');
    p.innerHTML = 'La réponse était : <strong>' + paysMystere +'</strong>';
    reponse.appendChild(p);
    var lien = document.createElement('a');
    lien.href = urlWikiPays;
    lien.target = "_blank";
    lien.title = "Voir sur Wikipedia";
    lien.appendChild(document.createTextNode('En savoir plus sur ce pays : (Wikipedia)'));
    lienWiki.appendChild(lien);
    document.getElementById('carte').style.backgroundImage = "url('" + urlGoogleMapPays + "')";
  }
  else {
    alert('Mauvaise réponse !');
  }
}

if (nb < nbLettresPays) {}
  // seulement si on n'a pas dépassé le quota de clics !


/* Ici pour la triche !

// Pays aléatoire sélectionné :
mot.append(paysMystere);

// Affichage de l'ensemble des pays avec leur identifiant dans le tableau pays :
for (i=0; i<pays.length; i++) {
  document.write((i+1) + ' ' + pays[i] + '<br>');
};*/

// Pour commentaire, tableau recensant certains pays et territoires contestés au niveau international :
var paysConteste = ['Crimée', 'Gibraltar', 'Nouvelle Calédonie', 'Taïwan', 'Abkhazie'];

// Le pays trouvé, on affiche la carte :
var paysMystereEspaces = paysMystere.replace(/ /g, '+');
var urlGoogleMapPays = 'https://www.google.fr/maps/embed?place/' + paysMystereEspaces;
//https://commons.wikimedia.org/w/index.php?title=File:Location_Vietnam_ASEAN.svg&lang=fr&uselang=fr


// Pour ajout du lien wikipedia pour en apprendre plus sur le pays :
var urlWikiPays = 'https://fr.wikipedia.org/wiki/' + paysMystere;

//document.write('<a href="' + urlWikiPays + '" target="_blank" alt="Voir sur Wikipedia">En savoir plus sur ce pays</a>');
