console.log("hello adhithi m gowda ");

//datatype varname = value; strongly typed language
// js weakly typed - dynamically allots datatype

// 1. variables - var, let, const 

// var
var age =22
console.log(age)
age = "adhithi"
console.log(age)

//var scope - global  
if(true){
  var a = 23
}
console.log(a)

console.log(aa)
var aa =10;

//let
//let scope = local

if(true){
  let b =22 
console.log(b);}
// console.log(b)

//const
//const scope - local 
// const value once assigned cannot be changed 

const c = 123
console.log(c)
// c = "adhi"
console.log(c)


//2.datatypes and operators 
// dataTypes - numbers, strings, boolean, NULL, undefined, objects 


//7.functions

// unlimited arguments accept - using arguments object 
function addNum(){
  let ans =0;
  for(let i=0; i<arguments.length; i=i+1){
      ans= ans+arguments[i]
  }
  return ans
}
let result = addNum(1,2,3,4,5)
console.log(result)
let result2 = addNum(1,3,5)
console.log(result2)

// unlimited arguments accept - using spread operator
function addNum2(...numbers){
  let ans =0;
  for(let i=0; i<numbers.length; i=i+1){
      ans= ans+numbers[i]
  }
  return ans
}
result = addNum2(1,2,3,4,5)
console.log(result)
result2 = addNum2(1,3,5)
console.log(result2)

// arrow functions 
//1.syntax
const sayHello = () =>{
  console.log("heyy")
}
sayHello()

const addV2 =(a,b)=>a+b // no need for retun statement if there is only one stmt implementation
console.log(addV2(3,4))

//2.'arguments' keyword
// -- cannot be used in arrow funtion 
// -- can only use spread operator here 



//3.Hoisting 
// -- accessing the funnction which are defined later onn
// --works only for normal functions 
//  -- doesnt work for arrow functions 
sayHey()

function sayHey(){
  console.log("Heyy there, keep going!!!")
}

// sayHey2()

function sayHey2(){
  console.log("Heyy there adhithii, keep going!!!")
}
sayHey2()



//4.This keyword 
// --when a simple function is called , this keyword will point to the caller , ie either to dat class or object 
// -- when an arrow function is called , it points to window object 
// -- bcoz arrow functions scope is global 

const obj={
  value :20,
  myFunction :function(){
    console.log(this)
    console.log(this.value)
  }
}
obj.myFunction();

// here that function starts pointing global onj , using this keyword
const obj2 ={
  value :20,
  myFunction :()=>{
    console.log(this)
    console.log(this.value)
  }
}
obj2.myFunction();

//9.High order functions and callbacks

// high order function - a function that takes function as an argument
// callback function - the function which is called for accepted as an argument in a function 

function adding(a,b,cb){
  let res = a+b;
  cb(res)

}
adding(10,20,(val)=>console.log(val))


// we can even return a function from a function 
const add1=(a,b,cb)=>{
  let result = a+b
  cb(result)

  return () =>console.log(result)
}

// it returns a funtion so ans stores a function 
let ans = add1(30,50,()=>{})
ans();

// promises are used to overcome the problem of callback hell 

//10.arrays
// - values can be mutated , even if it is declared as const array 
const stud = ["adhi","athu","123"]
stud[1] = "adhithi"
console.log(stud)
// stud = ["ad","at"]
stud.push("alexa")
console.log(stud)
// other lang - arrays are homogeneours - of same data type
// in js - theres no compulsion - it is actually heterogeneous
console.log(stud.indexOf("adhithi"))
stud.pop();
console.log(stud)

stud.reverse()
console.log(stud)

//11. array high order function 

//--forEach
// const print =(n)=>console.log(n)
// stud.forEach(print)
//  does not return a new array
stud.forEach((val)=>console.log(val))

// --map
// --map returns a new array 
stud.map((val)=>console.log(val))

// to check for diff bw forEach and map 
let nums = [1,4,3,5,2]

let ans1 = nums.forEach((val)=>val*2)
console.log(ans1)

let ans2 = nums.map((val)=>val*2)
console.log(ans2)

//--find - returns the number
let a1 =nums.find(num => num===4)
console.log(a1)

//-findIndex - returns index
let a2 =nums.findIndex(num => num===4)
console.log(a2)

//-includes - return bool val 
console.log(nums.includes(4))

//-filter - filters out and creates a new array 
let na = nums.filter((val) => val%2==0)
console.log(na)
nums = [1,2,3,4,5,6,7]
//slice - cut it down 
let newArr = nums.slice(1,5)
console.log(nums)
console.log(newArr)

//-splice - remove an element from main and puts it in another - even the main array is cut
console.log()








