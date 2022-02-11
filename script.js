let operator = document.querySelectorAll(".operator");
let point = document.getElementById("point");
let pourcentage = document.getElementById("pourcentage");
let numbers = document.querySelectorAll(".number");
let result = document.getElementById("result");
let equal = document.getElementById("equal");

//add textcontent of the elements clicked to the input
numbers.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element.textContent);
        result.innerText += element.textContent;
      
    })
});
operator.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element.textContent);
        result.innerText += element.textContent;
        
    })
});

point.addEventListener('click',()=>{
     result.innerText += point.textContent;
})
pourcentage.addEventListener('click',()=>{
    result.innerText += pourcentage.textContent;
})
//eval to calculate user input
equal.addEventListener('click',()=>{
        result.innerText = eval(result.innerText); 
    })
//remove last element from the input
function del(){
    result.innerText = result.innerText.slice(0,-1);
}
