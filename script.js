// Global varibles and classes
let listItems = document.querySelectorAll("li div");
let rateMessage = document.querySelector(".rating p");
let firstState = document.querySelector(".feedback");
let secondState = document.querySelector(".secondState");
let btn = document.querySelector("button");
let checkWarning = false;
for(let i = 0 ; i < listItems.length ; i++){
      listItems[i].classList.add("star")
      listItems[i].parentElement.classList.add("circle");
      listItems[i].parentElement.classList.add("star__list");
}
// Choose the rate
let Items = document.querySelectorAll("li");
Items.forEach(item => {
    item.addEventListener("mouseover",(e) => {
    Items.forEach(item => {
        item.classList.remove("hover");
    })
    e.currentTarget.classList.add("hover");
    })
    item.addEventListener("mouseleave",(e) => {
    Items.forEach(item => {
        item.classList.remove("hover");
    })
    })
    item.addEventListener("click",(e) => {
    Items.forEach(item => {
        item.classList.remove("active");
        item.classList.remove("hover")
    })
    e.currentTarget.classList.add("active");
    rateMessage.textContent = `You selected ${e.currentTarget.textContent} out of 5`
    console.log(rateMessage)
    })
})
// Handle the submit button
document.forms[0].addEventListener("submit",(e) => {
    e.preventDefault();
    if(rateMessage.textContent!=="You selected ... out of 5"){
    firstState.style.display = "none";
    secondState.style.display = "block"
    }
    else if (rateMessage.textContent==="You selected ... out of 5" && !checkWarning){
    let warning = document.createElement("p");
    warning.textContent = ("Please choose a number");
    warning.style.cssText = "color:red;font-size:10px !important;#f00;text-align:center";
    btn.before(warning)
    checkWarning = true;
    }
})
