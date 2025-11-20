let box_yogaItems = document.getElementById("box_yogaItems");
let swiperHTML = document.getElementById("swiper-wrapper-id");
let swiper;

window.addEventListener('resize', () => {
    initializeSwiper();
});

initializeSwiper();
allYogaItems();

function initializeSwiper() {
    let slidesPerSwiper;
    if (window.innerWidth < 950) {
        slidesPerSwiper = 1;
    } else if (window.innerWidth <= 1505 && window.innerWidth >= 950) {
        slidesPerSwiper = 2;
    } else {
        slidesPerSwiper = 3;
    }

    swiper = new Swiper('.swiper', {
        slidesPerView: slidesPerSwiper,
        spaceBetween: 0,
        freeMode: true,

        pagination: {
            el: ".swiper-pagination", clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        keyboard: {
            enabled: true,
        },
    });

}

function allYogaItems() {
    let outputString= ``;

    for (let i = 0; i < allYogaElements.length; i++) {
        outputString += `<div class="swiper-slide">
                <div class="swiper-slide-box" onclick="scrollToAYogaBox('${allYogaElements[i].name}')">
                <h3><span>${allYogaElements[i].name}</span> Yoga</h3>
                <img src=".${allYogaElements[i].imgLink}" alt="${allYogaElements[i].name}">
                <div class="slideshow_stars">
                    <div class="star" id="${allYogaElements[i].name}_Slideshow_YogaStar1">.</div>
                    <div class="star" id="${allYogaElements[i].name}_Slideshow_YogaStar2">.</div>
                    <div class="star" id="${allYogaElements[i].name}_Slideshow_YogaStar3">.</div>
                    <div class="star" id="${allYogaElements[i].name}_Slideshow_YogaStar4">.</div>
                    <div class="star" id="${allYogaElements[i].name}_Slideshow_YogaStar5">.</div>
                 </div>
                </div>
            </div>`
        swiperHTML.innerHTML += outputString;
        generateStarsSlideshow(allYogaElements[i].bewertung, allYogaElements[i].name);
        outputString = ``
    }

    for (let i = 0; i < allYogaElements.length; i++) {
        outputString += `
        <div class="yogaBox" id="yogaBox${allYogaElements[i].name}">
        <div class="yogaBox_left">
            <div class="yogaBox_header">
                <h2><span>${allYogaElements[i].name}</span> Yoga</h2>
            </div>
            <div class="yogaBox_body">
                    <img src=".${allYogaElements[i].imgLink}" alt="AloYogaIMG">
                    <div class="yogaBox_booking" onclick="toBookingSide(${i})">Booking</div>

            </div>
        </div>
        <div class="yogaBox_right">
            <div class="yogaBox_header">
                <div class="yogaBox_stars">
                    <div class="star" id="${allYogaElements[i].name}YogaStar1">.</div>
                    <div class="star" id="${allYogaElements[i].name}YogaStar2">.</div>
                    <div class="star" id="${allYogaElements[i].name}YogaStar3">.</div>
                    <div class="star" id="${allYogaElements[i].name}YogaStar4">.</div>
                    <div class="star" id="${allYogaElements[i].name}YogaStar5">.</div>
                </div>
            </div>
            <div class="yogaBox_text">
                <p>${allYogaElements[i].infoText}</p>
            </div>
        </div>
    </div>`
        box_yogaItems.innerHTML += outputString;
        generateStars(allYogaElements[i].bewertung, allYogaElements[i].name);
        outputString = ``
    }
}

function generateStars(anzahl, id) {
    for (let i = 0; i < 5; i++) {
        if (anzahl == i) {
            document.getElementById(`${id}YogaStar${i+1}`).style.backgroundColor =
                getComputedStyle(root).getPropertyValue('--secondary');
            anzahl++;
        }
    }
}

function generateStarsSlideshow(anzahl, id) {
    for (let i = 0; i < 5; i++) {
        if (anzahl == i) {
            document.getElementById(`${id}_Slideshow_YogaStar${i+1}`).style.backgroundColor = getComputedStyle(root).getPropertyValue('--secondary');
            anzahl++;
        }
    }
}

function scrollToAYogaBox(id) {
    let pointToScroll = document.getElementById(`yogaBox${id}`);
    pointToScroll.scrollIntoView({block: "start", behavior: "smooth"});
}

function toBookingSide(yogaID) {
    sessionStorage['yogaID'] = yogaID;
    window.location.href='../html/booking.html'
}