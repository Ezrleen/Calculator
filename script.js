const buttons = document.querySelectorAll("button");
let res = document.querySelector("#res");
const deletee=document.querySelector('.clear')

let res2 = '';
let click=0
let operation = null;
function multi(a,b){
    if(a.indexOf(".")!=-1 && b.indexOf(".")!=-1)return parseFloat(a) * parseFloat(b); 
    else if (a.indexOf(".")!=-1 && b.indexOf(".")==-1)return parseFloat(a) * parseInt(b)
    else if (a.indexOf(".")==-1 && b.indexOf(".")!=-1)return parseInt(a) * parseFloat(b)
    else return parseInt(a) * parseInt(b); 
}
function sum(a,b){
    if(a.indexOf(".")!=-1 && b.indexOf(".")!=-1)return parseFloat(a) + parseFloat(b); 
    else if (a.indexOf(".")!=-1 && b.indexOf(".")==-1)return parseFloat(a) + parseInt(b)
    else if (a.indexOf(".")==-1 && b.indexOf(".")!=-1)return parseInt(a) + parseFloat(b)
    else return parseInt(a) + parseInt(b); 
}
function devision(a,b){
    if(a.indexOf(".")!=-1 && b.indexOf(".")!=-1)return parseFloat(a) / parseFloat(b); 
    else if (a.indexOf(".")!=-1 && b.indexOf(".")==-1)return parseFloat(a) / parseInt(b)
    else if (a.indexOf(".")==-1 && b.indexOf(".")!=-1)return parseInt(a) / parseFloat(b)
    else return parseInt(a) / parseInt(b);
}
function minus(a,b){
    if(a.indexOf(".")!=-1 && b.indexOf(".")!=-1)return parseFloat(a) - parseFloat(b); 
    else if (a.indexOf(".")!=-1 && b.indexOf(".")==-1)return parseFloat(a) - parseInt(b)
    else if (a.indexOf(".")==-1 && b.indexOf(".")!=-1)return parseInt(a) - parseFloat(b)
    else return parseInt(a) - parseInt(b);
}
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        
            if (e.target.id === "plus") {
                
                res2 = res.innerHTML;
                res.innerHTML = '';
                e.target.disabled=true
                e.target.style.color = 'black'
                click+=1
                operation=sum

                
            
            }
            else if (e.target.id === "x") {
                
                res2 = res.innerHTML;
                res.innerHTML = '';
                e.target.disabled=true
                e.target.style.color = 'black'
                click+=1
                operation=multi

                
            
            }
            else if (e.target.id === "÷") {
                
                res2 = res.innerHTML;
                res.innerHTML = '';
                e.target.disabled=true
                e.target.style.color = 'black'
                click+=1
                operation=devision

                
            
            }
            else if (e.target.id === "minus") {
                
                res2 = res.innerHTML;
                res.innerHTML = '';
                e.target.disabled=true
                e.target.style.color = 'black'
                click+=1
                operation=minus

                
            
            }
            
            
            else if (e.target.id==="equal"){
                if(res.innerHTML.length!=0 && click!=0) {
                    res.innerHTML=operation(res2,res.innerHTML)}
                document.getElementById("plus").disabled = false;
                document.getElementById("x").disabled = false;
                document.getElementById("÷").disabled = false;
                document.getElementById("minus").disabled = false;


                
            }
            else if (e.target.id==="delete"){
                res.innerHTML=res.innerHTML.slice(0,-1)
            }
            else if (e.target.classList.contains("clear")){
                res.innerHTML=""
            }
            else {
                if(res.innerHTML.length < 15)
                res.innerHTML += e.target.innerHTML;
            }
        
        console.log(res)
        
    });
});
const btn = document.querySelector(".button");
const body1 = document.querySelector("body");
btn.addEventListener("click", function() {
  btn.classList.toggle("active");
  body1.classList.toggle("dark");
  
});