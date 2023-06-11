{
/* Esercizio 1: Letterali oggetti
Scrivi una funzione che prenda in input un array di 6 oggetti rappresentanti persone (nome, cognome, età) e
restituisca un nuovo array contenente solo le persone con un'età superiore a 30 anni. Stampare le informazioni
di tutte le persone del nuovo array.
 */

const people = [
    { nome: "marco",
      cognome: "polo",
      eta: 89
    },
    { nome: "maria",
      cognome: "poletta",
      eta: 23
    },
    { nome: "marcella",
      cognome: "pollina",
      eta: 35
    },
    { nome: "martino",
      cognome: "polli",
      eta: 38
    },
    { nome: "marina",
      cognome: "poletta",
      eta: 26
    },
    { nome: "marmotta",
      cognome: "pollina",
      eta: 17
    }
 ];
 

 function more30(people) {
    for (let i = 0; i < people.length; i++) {
       if (people[i].eta > 30) {
          console.log((people[i].nome + " " + people[i].cognome));
       }
    }
 }

 more30(people);

//finito

}
{
/* Esercizio 2: Map
Scrivi una funzione chiamata moltiplicaArray che prenda in input un array di numeri e un numero intero, che
funge da "fattore di moltiplicazione". La funzione deve restituire un nuovo array in cui ogni numero dell'array
originale è moltiplicato per il fattore di moltiplicazione dato.
Chiamare la funzione 3 volte, con 3 array e 3 fattori di moltiplicazione differenti per stampare in output i 3
array prodotti. */

let array1 = [4, 12, 6, 8]
let array2 = [8, 32, 14, 9]
let array3 = [2, 11, 31, 23]
let arrResult1 = []
let arrResult2 = []
let arrResult3 = []


function moltiplicaArray (arr, num ){
    for (let i = 0; i < arr.length; i++) {
       console.log((arr[i]*num))
    }
}

arrResult1.push(moltiplicaArray(array1, 5))
console.log("---------")
arrResult2.push(moltiplicaArray(array2, 7))
console.log("---------")
arrResult3.push(moltiplicaArray(array3, 3))

//finito
}



{
/* Esercizio 3: Set
Scrivi una funzione chiamata unisciSet che prenda in input due set composti da 5 numeri ciascuno, e restituisca
un nuovo set contenente tutti gli elementi del primo che NON sono presenti nel secondo.
Stampare in output il set risultante. */

const set1 = new Set([5, 11, 29, 31, 21]);
const set2 = new Set([9, 11, 16, 23, 10]);
const set3 = new Set();

function unisciSet(set1, set2) {
  set1.forEach(el => {
    if (!set2.has(el)) {
      set3.add(el);
    }
  });
}

unisciSet(set1, set2);
console.log(set3);

//finito
}

{
/* Esercizio 4: Funzioni
Crea una funzione chiamata salutaPersona che prende in ingresso un oggetto.
Se l'oggetto passato come parametro NON ha una proprietà chiamata "rate", la funzione stampa il messaggio
"nessun rate". In caso contrario, se il valore della proprietà rate è compreso tra 0 e 10, stampa "rate basso", se
è compreso tra 11 e 50 stampa "rate medio", se è compreso tra 51 e 100 stampa "rate alto".
es
salutaPersona({nome: mario rossi}) -> nessun rate
salutaPersona(rate: 95) -> rate alto */

let obj1 = {
    nome: "carlo",
    cognome: "magno",
    rate: 32
};

let obj2 = {
    nome: "carlina",
    cognome: "magna",
    rate: 69
};

let obj3 = {
    nome: "cara",
    cognome: "scarsa",
    rate: 3
};

let obj4 = {
    nome: "carlona",
    cognome: "magnona",

};

function salutaPersona(obj) {
    if (obj.rate == null) {
        console.log("Nessun rate");
    } else if (obj.rate > 0 && obj.rate <= 10) {
        console.log("Rate basso");
    } else if (obj.rate > 10 && obj.rate <= 50) {
        console.log("Rate medio");
    } else if (obj.rate > 50 && obj.rate <= 100) {
        console.log("Rate alto");
    }
}

salutaPersona(obj1);
salutaPersona(obj2);
salutaPersona(obj3);
salutaPersona(obj4)

//finito
}

{
/*
MEDIUM 
Esercizio 1: Date
Scrivi una funzione chiamata calcolaGiorni che prenda in input due oggetti Date rappresentanti due date
diverse e restituisca il numero di giorni trascorsi tra le due date.
Chiamare la funzione per stampare in output il risultato.
La funzione deve prendere in considerazione questa caratteristica: se la seconda data è un giorno
cronologicamente pari o successivo alla prima data, si procede con la normale esecuzione sopra elencata.
Se la seconda data è un giorno cronologicamente precedente alla prima data, viene prodotto manualmente un
errore che blocca l'applicazione.  */

// ms / (1000 * 60 * 60 * 24) ----> trasforma millisecondi in giorni

const date1 = new Date("1999-04-15");
const date2 = new Date("1996-07-29");

const d1days = date1.getTime() / (1000 * 60 * 60 * 24);
const d2days = date2.getTime() / (1000 * 60 * 60 * 24);

function calcolaGiorni(date1, date2) {
  let diff = date1.getTime() - date2.getTime();
  let diffDays = diff / (1000 * 60 * 60 * 24);

  if (d2days % 2 == 0 || d2days < d1days) {
    console.log(diffDays);
  } else if (d2days > d1days) {
    throw new Error("Impossibile proseguire");
  }
}

calcolaGiorni(date1, date2);

//funziona bene fino al calcolo della differenza dei giorni..
}


{
/* Esercizio 2: Letterali oggetti
Scrivi una funzione confrontaOggetti che prenda in input due oggetti con caratteristiche (proprietà e valori)
scelti a piacere e restituisca true se hanno le stesse proprietà e se tutti i valori delle loro proprietà
corrispondenti sono uguali, altrimenti false.
es
o1 = {nome: mario, cognome = rossi}
o2 = {nome: mario, cognome = rossi}
confrontaOggetti(o1, o2) da true
o1 = {nome: mario, cognome = rossi}
o2 = {x: 10, y = 20}
confrontaOggetti(o1, o2) da false */

const obj1 = {
    nome: "egidio",
    altezza: 186
};

const obj2 = {
    nome: "mariottide",
    altezza: 24
}

//vado ad iterare su tutti gli elementi di ciascun oggetto per poi confrontarli, se uguali stampa true, se non sono uguali anche solo per 1 valore stampa false, non funziona 

function confrontaOggetti (obj1, obj2){
for (let i = 0; i < obj1.length; i++) {
    if(obj1[i] === obj2[i]){
    console.log("true")}
    else console.log("false")
   }
}
confrontaOggetti(obj1, obj2)

//non funziona
}



{
/* Esercizio 3: Funzioni come parametri e metodo map
Scrivi una funzione chiamata mappaNumeri, che prende come primo parametro un array di numeri, e come
secondo parametro una funzione che internamente a mappaNumeri sarà utilizzata come parametro per il
metodo map, chiamato per creare un nuovo array con il criterio utilizzato dalla funzione passata. Questo array
verrà stampato internamente a mappaNumeri.
Chiamare la funzione mappaNumeri 2 volte, sia per stampare il doppio dei numeri dell'array passato come
primo parametro, sia per stampare i suoi numeri aumentati di 10.
es
mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 40 60
mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 30 40
dove ?fn? saranno le apposite funzioni passate come parametro create da voi */

function mappaNumeri(arr, fn) {{
    let newArray = 
  }

  function double(num) {
    return num * 2;
  }

  function aumentaDieci(num) {
    return num + 10;
  }
}
  mappaNumeri([6, 15, 35, 19], double)
  mappaNumeri([8, 18, 22, 43], aumentaDieci)


  //non funziona
}



{
/* 
HARD
Dato il seguente JSON:

[
    {"name": "aladddin", "rate": [5,6,7], "birthdate": "1990-10-10"},
    {"name": "jasmine", "rate": [8,9,9], "birthdate": "1994-09-09"},
    {"name": "abu", "rate": [2,2,3], "birthdate": "1993-10-20"}
]

convertirlo in una controparte Javascript da utilizzare nel programma.
Creare una funzione chiamata dammiPersonaggio, che prende in ingresso come primo parametro un array di
personaggi come quello prodotto dal JSON.
Come secondo parametro, prende una stringa.
Se la stringa è "cicla", la funzione stampa le informazioni di tutti i personaggi.
Se la stringa è "giovane", la funzione stampa le informazioni del personaggio più giovane.
Se la stringa è "migliore", la funzione stampa le informazioni del personaggio con la media rate più alta.
Se la stringa è "peggiore", la funzione stampa le informazioni del personaggio con la media rate più bassa.
Se il secondo parametro non è una stringa, generare un errore manualmente.
Chiamare la funzione dammiPersonaggio con tutti i test case, impedendo che l'applicazioni si blocchi se non
viene passata una stringa (hint: usare un try/catch).
Quando si stampano le informazioni di un personaggio, non bisogna stampare la sua data di nascita, ma la sua
età (es 30 anni).
Solo per i rate tenere in considerazione eventuali "parità" e stampare tutti i personaggi con il rate migliore o
peggiore in caso di concomitanze.
 */

let character =
 [
    {"name": "aladddin", "rate": [5,6,7], "birthdate": "1990-10-10"},
    {"name": "jasmine", "rate": [8,9,9], "birthdate": "1994-09-09"},
    {"name": "abu", "rate": [2,2,3], "birthdate": "1993-10-20"}
]

let charJS = JSON.parse(character)

function dammiPersonaggio (charJS ,  str){

}






}