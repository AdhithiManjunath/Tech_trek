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
const el = document.getElementById('enterclick');
el.addEventListener('click', ()=>{
  console.log("adhithi pressed button");
})

// go on making changes or adding tag once these buttons are clicked
// creating elements dynamically

const b2 = document.getElementById('enterclick2');
const empdiv = document.getElementById('emptycontainer');

b2.addEventListener('click',()=>{
  const h = document.createElement('h2');
  h.textContent= "Adhithi M Gowda";
  empdiv.appendChild(h);
})


//18.promises in js 

let resultFromServer = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(resultFromServer); // shows promise pending , that indicates it send u when its completed , as it is a big task to do 




const add = ()=>{
    // var a = parseInt(prompt("enter first number"));
    // var b = parseInt(prompt("enter second number"));

    // let ans = a+b;
    let ans =10;

    // can be used like this too 
     fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{console.log("data taken completely");
  console.log( data);}).catch(()=>{console.log("error")}).finally(()=>console.log("finally exec"));


    return ans;
}

// but majorly async function used in this way 
async function getData(){
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log( await result.json());
}
getData();
// await is used to complete the execution and wait for it 

console.log("even though add function is called after get data , it is executed first");

let ans = add();
console.log(ans);


