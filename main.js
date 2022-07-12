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

async function getResponce (){
  let responce=await fetch("./db.json");
  let content=await responce.json();
  let pets__wrap=document.querySelector('.pets__wrap');
  for (let key in content){
    pets__wrap.innerHTML+= `
    <div class="friends__item pets__item">
    <img class="friends__image" src="${content[key].img}" alt="dog">
            <p class="friends__text">${content[key].name}</p>
            <button class="friend__button">Learn more</button>
          </div>
        </div>
    `

  }
}
getResponce()


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