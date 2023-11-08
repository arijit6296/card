const cardImage = document.getElementsByTagName("img");
const headingTag = document.getElementsByTagName("h1")
const paraTag = document.getElementById("para");
const Button1 = document.getElementById("btn1");
const Button2 = document.getElementById("btn2");
const containerBox = document.getElementById("container");
console.log(headingTag)


const imgArray = [{ img:"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", heading:"suzuki" },
{ img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9iqe2N4tVlXhNciliaPqvfD9hqUjsGoSe0IROxI5d5l64mRCPEwgX9S-16qnFcvGkOWE&usqp=CAU", heading:"Mahindra Thar" },
{ img: "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?cs=srgb&dl=pexels-kamshotthat-5086489.jpg&fm=jpg", heading:"lamborghini" },
{ img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsxSUmIIH4I6rZ-W7TPi7KBRncXDjvjGbwYtpVXK7BVco01QHV5sY4L8knjJlE4KcF4g&usqp=CAU", heading:"Toyota Fortuner"}];

function fetchData(){
let a = fetch('https://dummyjson.com/products')
a.then((value)=>{
  if(!value.ok){
    throw new Error('product Not Found')
  }
  return value.json()
})
.then((value2)=>{
  console.log(value2)
})
.catch((error)=>{
  console.log(error)
})
for(let i =0; i<=value2.length-1; i++){
  var cardImages = cardImage[i];
  cardImages.setAttribute("id", "card"+(i + 1));
  cardImages.src=`${value2[i].img}`;
  var cardHaading = headingTag[i];
  cardHaading.innerHTML= `${value2[i].brand}`
};
}
fetchData()


// // async and await
// async function fetchData() {
//   try {
//     let response = await fetch(
//       'https://jsonplaceholder.typicode.com/posts/1',
//     )
//     let data = await response.json()

//     // console.log('data', data)
//   } catch (error) {
//     console.log(error, 'Error Occurred')
//   }
// }
// fetchData()

// // return keyward

// function add(a, b) {
//   let x = a * 2
//   let y = b * 2
//   return x + y
//         }

//         const result = add(5, 6)

//         console.log(result, 'result')

//         const myPromise = new Promise((resolve, reject) => {
//           setTimeout(() => {
//             const success = false
//             if (success) {
//               resolve('Data Resolved')
//             } else {
//               reject('Data Rejected')
//             }
//           }, 3000)
//         })

//         myPromise
//           .then((data) => {
//             console.log(data)
//           })
//           .catch((error) => {
//             console.log(error)
// })

// async function dataFetch() {
//   try {
//     const callData = await fetch('https://dummyjson.com/products/1');
//     const data = await callData.json();
//     console.log(data)
//   } catch (error) {
//     console.log(error, 'Error Occurred')
//   }
// }
// dataFetch()

// const promise1 = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//   const success = true;
//   if(success){
//     resolve("Data is Resolve");
//   }else{
//     reject("Data is Rejected");
//   }
// },3000)
// });
// promise1.then((value)=>{ // Taking value 
//   console.log(value);
// })

// .catch((error)=>{ //error handel
//   console.log(error);
// })

// function abc(a,b){
// let x = a*3
// let y = b*4
// return x+y
// }

// var sum = abc(10,15)
// console.log([sum])