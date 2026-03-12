function loginUser(e){

e.preventDefault()

alert("Login Successful")

window.location="index.html"

}

function searchJob(){

let input=document.getElementById("search").value.toLowerCase()

let cards=document.getElementsByClassName("jobCard")

for(let i=0;i<cards.length;i++){

let text=cards[i].innerText.toLowerCase()

if(text.includes(input))
cards[i].style.display="block"
else
cards[i].style.display="none"

}

}