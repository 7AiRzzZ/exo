// PASCAL CASE -> FirstLetter
// CAMEL CASE -> firstLetter
// KEBAB CASE -> first-letter
// SNAKE CASE -> first_letter

import SendToConsole from "./send.js";
SendToConsole("Sekou", "Meaux");

import { Add, Soustract, Multiply, Divide } from "./operation/operation.js";
Add(1, 1);
Soustract(10, 5);
Multiply(3, 3);
Divide(100, 2);

const Scope = () => {
  let myScope = 1;
  console.log(myScope);
  if (myScope === 1) {
    let secondScope = 2;
    console.log(secondScope);
  }
};
// Scope();

const Array = () => {
  let body = document.getElementById("body");
  let student = ["Chloé", "Bollo", "Florian"];
  let newStudent = "Sekou";
  console.log(student[0]); // Récupérer l'index du tableau
  student.push("Lucas"); // Ajoute un élément au tableau
  console.log(student);
  student.pop();
  console.log(student);
  student.push(newStudent);
  console.log(student);

  student.map((stud) => {
    let element = document.createElement("p");
    element.innerHTML = Je m'apelle ${stud};
    body.append(element);
    // console.log(Je m'apelle ${stud});
  });
};
// Array();

let obj = {
  key: "value",
  car: {
    price: 1500,
    color: "red",
    country: {
      europe: "France",
      usa: "",
    },
  },
};
console.log(obj.car);

let person = {
  name: "Bollo",
  city: "Meaux",
};
console.log(person);

let allStudent = [
  {
    name: "Bollo",
    city: "Meaux",
  },
  {
    name: "Florian",
    city: "Meaux",
  },
];
console.log(allStudent);


let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);q
 // Lister l'ensemble des types primitifs et y associer une définition de leur utilité

let string = "string"; // manipule les chaînes de caractères
let number = 1; // manipule les nombres
let object = {}; // contient des clés et des valeurs
let boolean = true || false; // Renvoie vrai ou faux
let nul = null; // Variable existante mais sans valeur
let und = undefined; // N'existe pas
// let bigInt = new BigInt(); // Manipule les nombres high order
// let symbol = new Symbol(); // Symbole
let array = []; // Gère les collections

// Créer un cas d'exemple pour les différences entre : let, var et const

var test = 1;
var test = {};
var test = "salut"; // Problème car j'ai pu déclarer trois fois la variable test en changeant sa valeur

let testons = 2;
testons = 1;
// let testons = 3; // Problème car la variable testons existe déjà et je ne peut la redéclarer

const seconds = 60;
// const seconds = 45;
// seconds = 10; // Problème car je ne peut réassigner et redéclarer

// Créer un dossier contenant au moins deux scripts différents avec une ou plusieurs fonctions

import ScriptA from "./functions/scriptA.js";
import { ScriptB } from "./functions/scriptB.js";
ScriptA();
ScriptB();

// Créer une variable contenant un tableau puis itérer dessus

let arr = ["A", "B", "C", "D"];
arr.map((element) => {
  console.log(element);
});

// Créer un objet contenant plusieurs éléments key/value

let obj = {
  name: "acs",
  city: "meaux",
  zip: "77100",
  email: "test@test.fr",
  tel: "071616192",
};
console.log(obj); // Récupère l'objet global
console.log(obj.city); // Récupère une clé précise de l'object

// Créer une classe et un héritage possédant des fonctions
class Phone {
  constructor(color, price, mark, stockage) {
    this.color = color;
    this.price = price;
    this.mark = mark;
    this.stockage = stockage;
  }
}

class NewPhone extends Phone {
  constructor(color, price, mark, stockage) {
    super(color, price, mark, stockage);
  }

  getColor() {
    return `La couleur de mon téléphone est ${this.color}`;
  }

  getStockage() {
    return `Le stockage de mon téléphone est de ${this.stockage}`;
  }
}

// Instancier la classe avec le mot clé : new

let Bollo = new NewPhone("white", 2000, "Samsung Fold Z", 500);
console.log(Bollo); // Récupère l'objet global de la classe
console.log(Bollo.getStockage()); // Execute la fonction
console.log(Bollo.getColor()); // Execute la fonction

// BONUS : Instancier une date avec le mot clé : new
let date = new Date();
console.log(date);

// BONUS : Afficher la classe en HTML
let phoneColor = document.getElementById("phone-color");
let phonePrice = document.getElementById("phone-price");
let phoneMark = document.getElementById("phone-mark");
let phoneStockage = document.getElementById("phone-stockage");

let color = Bollo.color;
let price = Bollo.price;
let mark = Bollo.mark;
let stockage = Bollo.stockage;

phoneColor.append(color);
phonePrice.append(price);
phoneMark.append(mark);
phoneStockage.append(stockage);
