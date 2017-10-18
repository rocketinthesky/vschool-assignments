var shopper = {
   name: "Susan",
   budget: 100,
   isHavingGuests: true,
   groceryCart: ["milk", "eggs", "bread", "potatoes"],
   neededItem: function(){
    this.groceryCart.push("cheese");
   }
}

shopper.neededItem();
console.log("We're running low on " + shopper.groceryCart[4]);
