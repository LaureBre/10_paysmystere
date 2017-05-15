

var liste = document.getElementById('liste');

for (i=0; i<26; i++) {
  var lettre = document.createElement('li'),
      content = document.createTextNode(String.fromCharCode(65+i));
  lettre.setAttribute(role, 'presentation');
  lettre.innerHTML = String.fromCharCode(65+i);
  liste.append(lettre);
}
