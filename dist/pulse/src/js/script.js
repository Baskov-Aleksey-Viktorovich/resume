new WOW().init();
const images          = document.querySelectorAll('.carousel__img');
const slides          = document.querySelector('.carousel__track');
let   count           = 0;
let   width;

const tabsBtn         = document.querySelectorAll('.catalog__tab');
const contentItem     = document.querySelectorAll('.catalog_content');
const getItem         = document.querySelectorAll('.catalog-item');
const thorough        = document.querySelectorAll('.catalog-item__link');
const catalogItem     = document.querySelectorAll('.catalog-item__content');
const catalogList     = document.querySelectorAll('.catalog-item__list');
const backBtn         = document.querySelectorAll('.catalog-item__back');
const modalMain       = document.getElementById('thanks');
const backCol         = document.querySelector('.overlay');
const getModal        = document.getElementById('consultation');
const BuyModal        = document.getElementById('order');
const getClose        = document.querySelectorAll('.modal');
const getBuy          = document.querySelectorAll('.catalog_content');
let getInputNumber    = document.querySelectorAll('input[type="tel"]');

//Smooth scroll and pageup
const upBtn           = document.querySelector('.up');
window.onscroll = function(){scrollFunction()};



function scrollFunction(){
    if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600){
        upBtn.style.display = 'block';
    }else{
        upBtn.style.display = 'none';
    }
}
upBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})



getBuy.forEach(function(item){
    item.addEventListener('click', (e)=>{
        let target     = e.target;
        let getBuyBtn  = target.closest('.button_buy');
        getBuyBtn.addEventListener('click', ()=>{
            moveBuyModal();
        })
    })
})


function moveBuyModal (){
    backCol.style.display  = 'block';
    BuyModal.style.display = 'block';
}


thorough.forEach(function(item){
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        let target     = e.target;
        let getContent = target.closest('.catalog-item__content');  
        getContent.classList.remove('catalog-item__content_active');
        let getList    =  getContent.parentElement;
        let getClass   =  getList.querySelector('.catalog-item__list');
        getClass.classList.toggle('catalog-item__list_active');
    })
})

backBtn.forEach(function(item){
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        let target   = e.target;
        let getList  = target.closest('.catalog-item__list');
        getList.classList.remove('catalog-item__list_active')
        let getCont  = getList.parentElement;
        let getClass = getCont.querySelector('.catalog-item__content');
        getClass.classList.toggle('catalog-item__content_active');
        
    })
})


tabsBtn.forEach(clickTabs);

function clickTabs (item){
    item.addEventListener('click', ()=>{
        let currentBtn = item;
        const tabId    = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if(! currentBtn.classList.contains('catalog__tab_active')){
            contentItem.forEach(function(item){
                item.classList.remove('catalog_content_active');
            })
    
            tabsBtn.forEach(function(item){
                item.classList.remove('catalog__tab_active');
            })
            currentBtn.classList.add('catalog__tab_active');
            currentTab.classList.add('catalog_content_active');
        }

    })
}

document.querySelector('.catalog__tab').click()



function init(){
    console.log(width);
    width = document.querySelector('.carousel__wrapper').offsetWidth;
    slides.style.width = width * images.length + 'px';
    images.forEach(item =>{
        item.style.width  = width + 'px';
        item.style.height = 'auto';
    })
    movinSliders();
}
window.addEventListener('resize', init);
init();

const btnPrev = document.querySelector('.prev').addEventListener('click',() =>{
    count--;

    if(count < 0){
        count = images.length - 1;
    }
    movinSliders();
} );
const btnNext = document.querySelector('.next').addEventListener('click',() =>{
    count++;

    if(count >= images.length ){
        count = 0
    }
    movinSliders();
} );

function movinSliders(){
    slides.style.transform = 'translate(-' + count * width + 'px)';
}

//Modal
getClose.forEach(function(item){
    item.addEventListener('click',(e)=>{
    let target      = e.target;
    let getBack     = document.querySelector('.overlay');
    let getCloseBtn = target.closest('.modal__close');
        getCloseBtn.addEventListener('click', (e)=>{
            if(e.target == getCloseBtn){
                closeModal();
            }else if(e.target == getBack){
                closeModal();
            }
        })
    })
})
const callBtn   = document.querySelector('[data-modal="recall"]').addEventListener('click', ()=>{
    openModal();
})
const adviceBtn = document.querySelector('[data-modal="consultation"]').addEventListener('click', ()=>{
    openModal();
})

function openModal (){
    backCol.style.display  = 'block';
    getModal.style.display = 'block';
}

function closeModal (){
    backCol.style.display  = 'none';
    getModal.style.display = 'none'; 
}



