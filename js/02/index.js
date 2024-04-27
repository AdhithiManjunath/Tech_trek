const body = document.querySelector('body')
console.log(body.innerHTML)
console.log(body.innerText)

const div = document.querySelector('div')
// div.innerHTML='You are hacked'

const un = document.querySelector('#username')
// un.innerText = "Adhithi"
const un1 = document.getElementById('username')
console.log(un1.innerHTML)
// to inject class or particular feature inside this tag 
un1.classList.add('red-color','underline');
console.log(un1.classList)
un1.classList.remove('red-color')

console.log("using foreach to access all class elem")
const cl = document.querySelectorAll('.check')
cl.forEach((e)=>console.log(e.innerText))
// foreach can be used only when we use querySelector or queryselectorall

const cl2 = document.getElementsByClassName('check')
// cl2.forEach((e)=>e.innerHTML) // shows not a function 
// it does not return a single elem but an arrray , so any feature to be added , u need to run a loop 
for(let i=0; i<cl2.length; i=i+1){
  cl2.item(i).style.background = "grey";
}



//adding inline style using js 
un1.style.textDecoration ="underline"
un1.style.color = "blue"

console.log(un1.parentElement)
// un1.parentElement.style.backgroundColor = "red"

// u can play with attributes too 
un1.setAttribute("aria","123");
// un1.remove(); // removes off that element completely 


//16. event listeners in js 