//somme de 5 random
var valeurs = [];
var result = 0;
for (var i=0; i<5; i++){
  valeurs[i] = Math.floor( Math.random() * 50 + 51 );
  console.log("Valeurs[" + i + "]: " + valeurs[i]);
  result = result + valeurs[i];
  console.log("Somme: " + result);
};
//console.log("Somme finale:" + result);
