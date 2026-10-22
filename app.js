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