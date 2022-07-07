// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });


/*Getting data */ 

// const petsItem = document.querySelector("pets__item");
// const petsImage = document.querySelector("friends__image");
// const friendsText = document.querySelector("friends__text");
// const friendButton = document.querySelector("friend__button");

// const responce = fetch("http://localhost:3000/pets")
//   .then((res) => {
//     return res.json();
//   })

//   .then((data) => {
//     petsImage.innerHTML = `<img src=${data.img}/>`;
//   })
//   .then((data) => {
//     petsItem.innerHTML = `<p>${data.friendsText}</p>`;
//   })
//   .then((data) => {
//     petsItem.innerHTML = `<button>${data.friendButton}<button/>`;
//   });

/* Popup */
const background=document.querySelector('.popup__back');
const popup=document.querySelector('.popup');
const popup2=document.getElementById('.popup2');
const popup3=document.getElementById('.popup3');
const openPopup=document.querySelectorAll('.friends__item');
const popupWrapper=document.querySelector('popup__wrapper')

// openPopup.forEach((friend)=>{
//   friend.addEventListener('click',handleClick)
// });

// function handleClick(e){
//   // background.classList.add('active');
//   // popup.classList.add('active');

// }

openPopup[0].addEventListener('click',function (){
  background.style.display="block";
  popup.style.display="block";
})

openPopup[1].addEventListener('click',function (){
  background.style.display="block";
  popup2.style.display="block";
})
openPopup[2].addEventListener('click',function (){
  background.style.display="block";
  popup3.style.display="block";
})

document.addEventListener('click', (e) => {
   
  if(e.target === popup) { 
     background.classList.remove('active');
      popup.classList.remove('active');
      openPopup.classList.remove('active'); 
      
  }
});