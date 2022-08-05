
/*Getting data */ 

async function getResponce (){
  let responce=await fetch("./db.json");
  let content=await responce.json();
  let petsWrap=document.querySelector('.pets__wrap');
  for (let item in content){
    petsWrap.innerHTML+= `
    <div class="friends__item pets__item">
    <img class="friends__image" src="${content[item].img}" alt="dog">
            <p class="friends__text">${content[item].name}</p>
            <button class="friend__button">Learn more</button>
          </div>
        </div>
    `
  }
}
getResponce()

//---------------------Getting data-----------------------------------------------
fetch ('./db.json')
.then((responce)=>{
  return responce.json();
})
.then(data=>{
    
    data.map((value)=>{
      document.querySelector('.carousel').innerHTML+=`
      
       <div class="friends__item friend-dog">
       <img class="friends__image" src="${value.img}" alt="dog">
       <p class="friends__text">${value.name}</p>
       <button class="friend__button">Learn more</button>
 </div>
 `
    })  
})

//-----------Carousel--------------------------------------------------------------

const btnLeft=document.querySelector('#btn__left');
const btnRight=document.querySelector('#btn__right');
const carousel=document.querySelector('#carousel');

const moveRight=function(){
  carousel.classList.add("transition-right");
  btnRight.removeEventListener('click',moveRight)
}

const moveLeft=()=>{
carousel.classList.add ("transition-left");
btnLeft.removeEventListener('click',moveLeft)
}

btnRight.addEventListener('click',moveRight );
btnLeft.addEventListener('click',moveLeft)



carousel.addEventListener('animationend',()=>{
  carousel.classList.remove("transition-left");
  carousel.classList.remove("transition-right");
  btnRight.addEventListener('click',moveRight );
  btnLeft.addEventListener('click',moveLeft)
})







/*---------------------Popup----------------------------------------------------*/


// const popupWrapper=document.querySelector('popup__wrapper')

// openPopup.forEach((friend)=>{
//   friend.addEventListener('click',handleClick)
// });

// function handleClick(e){
  // background.classList.add('active');
  // popup.classList.add('active');

// }

// document.addEventListener('click', (e) => {
   
//   if(e.target === popup) { 
//      background.classList.remove('active');
//       popup.classList.remove('active');
//       openPopup.classList.remove('active'); 
      
//   }
// });
const background=document.querySelector('.popup__back');
const popup=document.querySelector('.popup');
const openPopup=document.querySelectorAll('.friends__item');
//-----------------------------------------------------------------------//
const btns=document.querySelectorAll("[data-target]");
const closeBtns=document.querySelectorAll(".modal-btn");
const overlay=document.querySelector(".overlay");

btns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
    
  })
 
})

closeBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
  document.querySelector(btn.dataset.target).classList.remove("active");
  overlay.classList.remove("active");
  })
  
})