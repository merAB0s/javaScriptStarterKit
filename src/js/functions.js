function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi; " + productName
                + " / Adet: " + quantity)
}

// addToCart(5)


let sayHello = ()=>{
    console.log("Hello World!")
}
// sayHello()


let sayHello2 = function(){
    console.log("Hello World 2!")
}
// sayHello2()



function addToCart2(productName, quantity, unitPrice) {

}
addToCart2("Elma",5,20)


function addToCart3(product){
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyatı: " + product.unitPrice)

}

let product1 = {productName:"Elma", unitPrice:10, quantity:5} //obje-product
// addToCart3(product1)

// sayılar = değer tipidir |/ objeler/arreyler = referans tipleridir.

let product2 = {productName:"Elma", unitPrice:10, quantity:5} //obje-product
let product3 = {productName:"Elma", unitPrice:10, quantity:5} //obje-product

product2 = product3
product2.productName = "KARPUZ"
// console.log(product3.productName)



function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:1, quantity:8},
    {productName:"Armut", unitPrice:2, quantity:6},
    {productName:"Limon", unitPrice:4, quantity:2}
]
// addToCart4(products)



function add(...numbers){ //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++){
        total = total + numbers[i]
    }
    console.log(total)
}
// add(5,10)
// add(20,50,43)
// add(56,21,83,47)

let numbers = [30,10,50,160]
// console.log(... numbers) // ... = spread = ayırmak
// console.log("En Büyük Sayı: "+Math.max(...numbers) )


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
         ["Ankara","Konya"],
         ["İstabul","Bursa"],
         ["Sinop","Trabzon"],
    ]
]
// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
    ({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
    = {productName:"Elma", unitPrice:1, quantity:8})


console.log(newQuantity)
console.log(newProductName)
console.log(newUnitPrice)








