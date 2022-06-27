function pizzaOven( crust, sauce, cheese, toppings) {
    let pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza() {
    const crust = [ 'deep dish', 'hand tossed', 'normal', 'thin crust', 'gluten free'];
    const sauce = [ 'traditional', 'marinara', 'alfredo', 'BBQ sauce', 'hot sauce' ];
    const cheese = [ 'mozzarella', 'feta', 'swiss', 'blue cheese', 'chedder' ];
    const toppings = [ 'pepperoni', 'sausage', 'mushrooms', 'olives', 'onions' ];
    let randomCheese = [];
    let randomToppings = [];
    for( let i = 0; i <= Math.floor( Math.random() * 6 ); i++ ) {
        randomCheese.push( cheese[ Math.floor( Math.random() * 5 ) ] );
    }
    for( let i = 0; i <= Math.floor( Math.random() * 6 ); i++ ) {
        randomToppings.push( toppings[ Math.floor( Math.random() * 5 ) ] );
    }
    let pizza = {};
    pizza.crust = crust[ Math.floor( Math.random() * 5 ) ];
    pizza.sauce = sauce[ Math.floor( Math.random() * 5 ) ];
    pizza.cheese = randomCheese;
    pizza.toppings = randomToppings;
    return pizza;
}

const pizza1 = pizzaOven( 'deep dish', "traditional", ['mozzarella'], ["pepperoni", 'sausage']);
const pizza2 = pizzaOven( 'hand tossed', "marinara", ['mozzarella', "feta"], ['mushrooms', "olives", 'onions'] );
// console.log( pizza1 );
// console.log( pizza2 );

console.log( randomPizza() );

