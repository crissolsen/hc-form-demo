const form = document.querySelector("#form")
const firstName = document.querySelector("#firstName")
const submit = document.querySelector("#submit")
const thankYou = document.querySelector("#thank-you")
const topShops = document.querySelector("#topShops")
const topProducts = document.querySelector("#topProds")

let favouriteShopsArr = []

thankYou.style.opacity = "0"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let obj = {}
    const formData = new FormData(e.target)
    const json = JSON.stringify(Object.fromEntries(formData))
    console.log(json)
    form.style.display = "none"
    thankYou.style.transform = "translateX(0)"
    thankYou.style.opacity = "1"
    document.querySelector('body').style.background = "#356CB1"
})

function test() {
    favouriteShopsArr = topShops.value.split(",")
    
    console.log(favouriteShopsArr)
}
