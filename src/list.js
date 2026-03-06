let checkList = document.querySelectorAll(".check-box-btn");

console.log("Hello World!")

console.log(checkList)

checkList.forEach((el) => {
   el.addEventListener("click", () => {
       el.classList.toggle("check-ok")  
   })
})

addEventListener