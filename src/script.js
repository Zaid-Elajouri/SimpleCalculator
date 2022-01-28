//just for joking
var questions = [
    {
          prompt: "Wach theb thseb?\n(a) drahmi\n\ (b) swaleh secret\n(c) yakhooo wach dakhlek",
          answer: "c"
    }
    
];
for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("tbaarklaah");
    } else {
         alert("doz thseb wakha khesertha");
    }
}
//Calculator
var operator = document.querySelectorAll(".operator");
var point = document.getElementById("point");
var pourcentage = document.getElementById("pourcentage");
var numbers = document.querySelectorAll(".number");
var result = document.getElementById("result");
var equal = document.getElementById("equal");

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
