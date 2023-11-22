//Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
//Esercizio 3 dato il mock di partenza, stampa in consolela lista dei prodotti che costano meno di 200 euro
//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock

import products from "./products.json" assert { type: "json" };

let listaProdotti = products.productsList;

//Esercizio 1
console.log(products.productsList);
console.log("\n");
//Esercizio 2


console.log(products.productsList[2]);


/*console.log(
    "Esercizio 2: Stampa in console il terzo oggetto della lista dei prodotti"
  );
  console.log("");
  listaProdotti.forEach((product) => {
    if (product.id === 3) {
      console.log(product);
    }
  });
  console.log("");
  console.log("\n");*/

  //Esercizio 3

  console.log(products.productsList.filter((prod) => prod.price < 200));


  /*console.log(
    "Esercizio 3: Stampa in console la lista dei prodotti che costano meno di 200 euro"
  );
  console.log("");
  listaProdotti.forEach((product) => {
    if (product.price < 200) {
      console.log(product);
    }
  });
  console.log("");
  console.log("\n");*/


  //Esercizio 4

  console.log(products.productsList.filter((prod) => prod.id === 8)[0]);


 /*console.log(
    "Esercizio 4: Stampa in console il prodotto con id 8"
  );
  console.log("");
  listaProdotti.forEach((product) => {
    if (product.id === 8) {
      console.log(product);
    }
  });
  console.log("");
  console.log("\n");*/


  //Esercizio 5


 console.log(
    "Esercizio 5: Stampa in console solo i nomi"
  );

  console.log(products.productsList.map((prod) => prod.name));

 
  /*console.log("");
  listaProdotti.forEach((product) => {
    console.log(product.name);
  });*/