let age = 16
let hasTicket = true
let withAdult = true

if (age >= 15 && hasTicket == true) {
    console.log("welcome to the show")
} else {
    console.log("go home")
}

const isLoggedin = true
const userRole = "admin"

if (isLoggedin && userRole === "admin") {
    console.log("welcome admin")
} else if (isLoggedin) {
    console.log("welcome guest")
} else {
    console.log("login first")
}



const trafficLight = "gul"
switch (trafficLight) {
    case "grön":
        console.log("kör")
        break
        case "gul":
        console.log("var försiktig")
        break
        case "röd":
        console.log("stanna")
        break
    default:
        console.log("okänd färg")
}


const weather = "regn"
switch (weather) {
    case "sol":
        console.log("ta på solglasögon")
        break
    case "regn":
        console.log("ta på paraply")
        break
    case "snö":
        console.log("ta på en varm jacka")
        break
    default:
        console.log("kolla väderappen igen")
}


for (let i = 0; i < 6; i++) {
    console.log(i)
}
const fruits = ["äpple", "banan", "körsbär"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}