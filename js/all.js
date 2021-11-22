let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// 商品價格 年 月 切換
let year = document.querySelector('.pricing .price-toggler .year');
let month = document.querySelector('.pricing .price-toggler .month');
let yearAmount = document.querySelectorAll('.pricing .price .year');
let monthAmount = document.querySelectorAll('.pricing .price .month');

year.onclick = () => {
    year.classList.add('active');
    month.classList.remove('active');
    yearAmount.forEach(years => {
        years.style.display = 'block';
    });
    monthAmount.forEach(months => {
        months.style.display = 'none';
    });

}

month.onclick = () => {
    year.classList.remove('active');
    month.classList.remove('active');
    yearAmount.forEach(years => {
        years.style.display = 'none';
    });
    monthAmount.forEach(months => {
        months.style.display = 'block';
    });

}


// 成員 輪播
let slides = document.querySelectorAll('.reviews .slide-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1 ) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


// faq 
document.querySelectorAll('.faq .accordion-container .accordion').forEach(accordion => {
    accordion.onclick = () => {
        accordion.classList.toggle('active');
    }
})

