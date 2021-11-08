// Javascript tip güvenli değildir.
let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"}

//console.log(sayi1)
//console.log(student)


function save(öğrenci,puan=10) {
    console.log(öğrenci.name + ": " + puan)
}

//save(student,100)


let students = ["Engin Demiroğ","Tuğkan Gönültaş","Abdullah Aksoy"]
//console.log(students)

let students2 = [student,{id:2, name:"Nehir"},"Ankara",{city:"İstanbul"}]
//console.log(students2)


//rest
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//showProducts(1,["Elma","Armuz","Karpuz"])

//spread ayraştırmak
let points = [1,2,4,5,6,7,8,9,10]
// console.log(...points)
// console.log(Math.max(...points))
// console.log("Üç Nokta Varsa: ",..."ABCD","E",..."GHT")
// console.log("Üç Nokta Yoksa: ","ABCD","E","GHT")


//Destructuring = parçalamak
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,Maximum]] = populations
// console.log(small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(Maximum)


function someFunction([small1],number) {
    console.log(small1)
}

// someFunction(populations)


let category = {id:1,name:"İçicek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)


console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

