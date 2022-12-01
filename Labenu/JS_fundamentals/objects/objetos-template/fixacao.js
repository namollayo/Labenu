const myCart = {
    buyer : "Giovanna",
    paymentMethod : "Debit Card",
    address : "Boulevard Street, 2"
}

const foudation = {
    product: "Bruna Tavares Foudation",
    price: 69.90 ,
    quantity: 1 ,
}

const sunscreen = {
    product: "Vichy Sunscreen 50FPS" ,
    price: 95.00 ,
    quantity: 2
}

const lipBalm = {
    product: "Nivea Lip Balm",
    price: 17.00,
    quantity: 1
}
const medicine = {
    product: "Eno Saquinho 2 Envelopes",
    price: 3.49,
    quantity: 5
}

myCart.purchases = [foudation, sunscreen, lipBalm, medicine]

console.log(myCart.purchases.length);
console.log(myCart);

const myCartGift = {
    ...myCart,
    buyer : "Julia", 
    paymentMethod : "Gift Card"
}

console.log(myCartGift)
console.table(myCartGift.purchases);

console.log("Quantidade de itens:", (foudation.quantity)+(sunscreen.quantity)+(lipBalm.quantity)+(medicine.quantity))
console.log("Total:", (foudation.price)+(sunscreen.price)+(lipBalm.price)+(medicine.price))