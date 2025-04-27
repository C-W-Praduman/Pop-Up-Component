const popup = document.querySelector(".popup");

const btn  = document.querySelector(".btn");

const closebtn = document.querySelector("#close-btn")

btn.addEventListener("click" ,()=>{
    popup.classList.add("open")
})

closebtn.addEventListener("click", ()=>{
    popup.classList.remove("open")
})
