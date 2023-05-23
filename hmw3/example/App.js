const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active");
    });
};

const showTabContent = (i = 0) => {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};
hideTabContent();
showTabContent();


let slideIndex = 0;

tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if (target === item) {
                slideIndex = i;
                hideTabContent();
                showTabContent(slideIndex);
            }
        });
    }
});

const timer = () => {
    slideIndex++;

    if (slideIndex > 3) {
        slideIndex = 0;
    }
    hideTabContent()
    showTabContent(slideIndex)
}
setInterval(timer, 2000)

const modalTrigger = document.querySelectorAll("[data-modal]");

modalTrigger.forEach((item) => {
    item.addEventListener("click", openModal);
});

function openModal() {
    document.body.style.overflow = "hidden";

    clearInterval(modalTimeout);
}

function closeover() {
    document.body.style.overflow = "";
}

const body = document.getElementsByTagName('html')
window.addEventListener('scroll', () => {
    if (document.body.clientHeight - body[0].clientHeight === body[0].scrollTop) {
        document.body.style.overflow = 'hidden';
            document.body.style.overflow = 'visible';
        }

})


function openModalScroll() {
    const page = document.documentElement;

    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal();

        window.removeEventListener("scroll", openModalScroll);
    }
}

window.addEventListener("scroll", openModalScroll);



let Remember = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
    // Скрыть все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('privius');
    }
    // Показать текущий слайд
    slides[index].classList.add('next');
}

function nextSlide() {
    Remember++;
    if (Remember >= slides.length) {
        Remember = 0;
    }
    showSlide(Remember);
}

function prevSlide() {
    Remember--;
    if (Remember < 0) {
        Remember = slides.length - 1;
    }
    showSlide(Remember);
}

// Показать первый слайд при загрузке страницы
showSlide(Remember);