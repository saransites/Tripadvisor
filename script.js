const quiz=document.querySelectorAll(".question")

quiz.forEach(question=>{
    
    question.addEventListener("click",()=>{
        let answer=question.nextElementSibling
        answer.classList.toggle("answer")
        answer.classList.add("padding")
    })
})
const bar=document.querySelector(".hamburger")
const aside=document.querySelector("aside")

bar.addEventListener("click",()=>{
    console.log(aside.classList.remove("open"))
    // aside.classList.remove("open")
})
const erase=document.querySelector(".fa-xmark")

erase.addEventListener("click",()=>{
    aside.classList.add("open")
})

