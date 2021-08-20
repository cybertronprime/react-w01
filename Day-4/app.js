//Function
//Arrow Functions
//Higher Order Functions
//CallBAck Functions
//Array ITERATORS
//Objects
//JSON
//setTimeOut
//Promise
//.then .catch
//try Catch
//Async Await

// Function Declaration
function addMe(val1, val2) {
  //Code
  console.log("This function is just printing me " + val1 + val2);
}

addMe(1, 2); //Invoke

// Function Declaration
function addMe2(val1, val2, val3) {
  //Code
  const sum = val1 + val2;
  const mul = sum * val3;
  // console.log(mul)
  return mul;
}

const catchedVal = addMe2(2, 3, 4); //mul//20
// const catchedVal=20
console.log(catchedVal);

//Arrow Function

const newFucntion = (val1, val2, val3) => {
  const sum = val1 + val2;
  const mul = sum * val3;
  console.log(mul);
  // return mul
};

newFucntion(1, 23, 3);

//HIgher Order Functions

const addF = (val1, val2) => {
  return val1 + val2; //3
};

const mulF = (val1, val2) => {
  return val1 * val2; //3
};

const hOF = (val1, val2, callF) => {
  return callF(val1, val2); //3
};

let hOFVal = hOF(1, 2, addF);
console.log(hOFVal);
hOFVal = hOF(1, 2, mulF);
console.log(hOFVal);

// Array ITERATORS

const items = [1, 2, 3, 4, 5, 6];

//forEach MAP

const newItemsA = items.forEach((e) => {
  console.log(e);
  return e * e;
});
console.log(newItemsA);

//
const mapNewA = items.map((es) => {
  console.log(`This is the ${es}`);
  return es * es;
});
console.log(mapNewA);

//Objects
const rohit = {
  age: 23,
  gender: "Male", //key:value (pair)
  bloodG: "A+",
}

console.log(rohit.gender)

//Real World Example
const rohitAlt = {
    age: 23,
    "gender": "Male", //key:value (pair)
    bloodG: "A+",
  }

  console.log(rohitAlt["gender"])




const newArr1=[
  {
    name: "Rohit",
    age: 23,
    gender: "Male", //key:value (pair)
    bloodG: "A+",
  },
  {
    name: "Ramesh",
    age: 24,
    gender: "Male", //key:value (pair)
    bloodG: "A+",
  },
  {
    name: "Ram",
    age: 27,
    gender: "Male", //key:value (pair)
    bloodG: "A+",
  }
];

console.log(newArr1[2])

console.log("Hello 1")
console.log("Hello 2")
console.log("Hello 3")

setTimeout(()=>{
  console.log("this is running after 5 seconds")
},5000)
console.log("Hello-4 ")
for(let i=0;i<10000;i++)
{
  console.log("Hello Once Again ")
}


