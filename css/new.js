// function second() {
//     setTimeout(() => {
//         console.log('i fucked your bitch');

//         setTimeout(() => {
//             console.log('i fucked your bitch');

//             setTimeout(() => {
//                 const food = ['eba','semo','rice']; 
//                 console.log(food[2]);

//                 setTimeout(() => {
//                     const foody = ['food','life','sex']; 
//                     console.log(foody[2]);
                
//                 setTimeout(() => {
//                     console.log("i love " + `${food[0]}`);

//                     // setTimeout(() => {
//                     //     const me = {title = 'niyi',love = 'owo'};
//                     //     console.log(me);
//                     // }, 1000);
//                 }, 1500);

//                 },1500);
//             },1500);

//         },1500);
        
       

//     },1500);
   
// }


// function first () {
//     console.log('sup nigga');
//     console.log('nigga');
// }

// second();
// first();



let section3 = document.querySelector('#section-3');
let scrollFrom = document.querySelector('#scrollFromBtn');

scrollFrom.addEventListener('click', function(e){
    s3coords = section3.getBoundingClientRect();
console.log(e.target.getBoundingClientRect());
    section3.scrollIntoView({behavior : 'smooth'});
})