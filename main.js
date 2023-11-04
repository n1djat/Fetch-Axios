const costumers = document.getElementById("costumers");
const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');
const threeInput = document.getElementById('threeInput');
const btn = document.getElementById('btn');


// Fetch READ

// fetch('https://northwind.vercel.app/api/customers')
// .then(res => res.json())
// .then(data => {

//     data.forEach(element => {
//         const p = document.createElement('p');
//         p.textContent = `${element.id} + ${element.companyName} + ${element.contactName} + ${element.contactTitle}`
//         costumers.appendChild(p)
//     });
// })



// FETCH CREATE ---- POST

// btn.addEventListener('click', function () {
//     fetch('https://northwind.vercel.app/api/customers', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         id: firstInput.value,
//         companyName: secondInput.value,
//         contactName: threeInput.value
//     }),
//     })
//         .then((res) => res.json())
//         .then((data) => {
//         console.log('Data yaradildi' + data);
// });
// })



// FETCH DELETE

// btn.addEventListener('click', function () {
//     let url = `https://northwind.vercel.app/api/customers/${threeInput}`

//     fetch(url, {
//         method: "DELETE",
//     })
//     .then((res) => console.log(res));
// })





// FETCH UPDATE

// btn.addEventListener('click', function () {
//     const someData = {
//         companyName: firstInput.value,
//         contactName: secondInput.value
//        }
    
    
//     const putMethod = {
//         method: 'PUT', 
//         headers: {
//          'Content-type': 'application/json; charset=UTF-8' 
//         },
//         body: JSON.stringify(someData) 
//        }
       
//        fetch(`https://northwind.vercel.app/api/customers/${threeInput.value}`, putMethod)
    
//        .then(res => res.json())
//        .then(data => console.log(data))
// })


// AXIOS GET

// axios.get("https://northwind.vercel.app/api/customers")
//     .then(res => {
//         console.log(res.data);
//     })




// AXIO POST

// btn.addEventListener('click', function (){
//     axios.post("https://northwind.vercel.app/api/customers", {
//         id: firstInput.value,
//         companyName: secondInput.value,
//         contactName: threeInput.value
//     })
//     .then(res => {
//         console.log(res);
//         })
// })




// AXIOS DELETE

// btn.addEventListener('click', function () {
//     axios.delete(`https://northwind.vercel.app/api/customers/${threeInput.value}`)
// })



// AXIOS UPDATE

// btn.addEventListener('click', function () {
//     axios.put(`https://northwind.vercel.app/api/customers/${threeInput.value}`, {
//         companyName: firstInput.value,
//         contactName: secondInput.value
//     })
//     .then(res => {
//         console.log(res);
//     })
// })