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

const petsItem = document.querySelector("pets__item");
const petsImage = document.querySelector("friends__image");
const friendsText = document.querySelector("friends__text");
const friendButton = document.querySelector("friend__button");

const responce = fetch("http://localhost:3000/pets")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    petsImage.innerHTML = `<img src=${data.img}/>`;
  })
  .then((data) => {
    petsItem.innerHTML = `<p>${data.friendsText}</p>`;
  })
  .then((data) => {
    petsItem.innerHTML = `<button>${data.friendButton}<button/>`;
  });

const background=document.querySelector('.popup__back');
const popup=document.querySelector('.popup');
const popup2=document.querySelector('.popup2');
const popup3=document.querySelector('.popup3');
const openPopup=document.querySelectorAll('.friends__item');

openPopup.forEach((friends)=>{
  friends.addEventListener('click', ()=>{
    background.classList.add('active');
    popup.classList.add('active');
    popup2.classList.add('active');
    popup3.classList.add('active');
})
});

document.addEventListener('click', (event) => { 
  if(event.target === popup) { 
     background.classList.remove('active');
      popup.classList.remove('active');
      openPopup.classList.remove('active'); 
      
  }
});