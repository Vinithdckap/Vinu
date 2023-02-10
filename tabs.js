// const button = document.querySelectorAll("button")
// // console.log(button);
// const content = document.querySelectorAll(".content")
// // console.log("content")


// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click",()=>{
//         for (let i = 0; i < content.length; i++) {
//             content[i].classList.remove("active")  
//         }
//         for (let i = 0; i < button.length; i++) {
//             button[i].classList.remove("active")
            
//         }
//            button[i].classList.add("active")
//            content[i].classList.add("active")
//     })  
// }


const button = document.querySelectorAll("button")
const content = document.querySelectorAll(".content")


for(let i=0; i<button.length;i++){
    button[i].addEventListener("click",()=>{
        for( let i =0; i<content.length;i++){
            content[i].classList.remove("active")
        }
        for( let i =0; i<button.length;i++){
            button[i].classList.remove("active")
        }
        button[i].classList.add("active")
        content[i].classList.add("active")


    })
}

