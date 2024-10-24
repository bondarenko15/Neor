
// sliders

const offersSwiper = document.querySelector('.swiper_offers') || null;
if (offersSwiper) {
    const sliderOffer = new Swiper(offersSwiper, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.offer .swiper-button-next',
            prevEl: '.offer .swiper-button-prev',
        },
        breakpoints: {
            1366: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });
}

const featuresSwiper = document.querySelector('.swiper_features') || null;
if (featuresSwiper) {
    const sliderFeatures = new Swiper(featuresSwiper, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper_features .swiper_btn .swiper-button-next',
            prevEl: '.swiper_features .swiper_btn .swiper-button-prev',
        },
        breakpoints: {
            960: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });
    sliderFeatures.on('slideChange', function () {
        document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
            const numberSlide = slide.querySelector('.number_slide');
            if (numberSlide) {
                numberSlide.textContent = index + 1;
            }
        });
    });
    document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
        const numberSlide = slide.querySelector('.number_slide');
        if (numberSlide) {
            numberSlide.textContent = index + 1;
        }
    });


}

const reviewsSwiper = document.querySelector('.swiper_reviews') || null;
if (reviewsSwiper) {
    const sliderReviews = new Swiper(reviewsSwiper, {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.block_reviews .swiper_btn .swiper-button-next',
            prevEl: '.block_reviews .swiper_btn .swiper-button-prev',
        },
        breakpoints: {
            648: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            960: {
                direction: 'vertical',
                slidesPerView: "auto",
                autoHeight: false,
                spaceBetween: 40,
            },
        }
    });
}


// rating
const stars = document.querySelectorAll('.star');

stars.forEach((star, index) => {
    star.addEventListener('click', (e) => {
        e.preventDefault();

        stars.forEach(star => star.classList.remove('active'));
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });
    if (window.innerWidth > 960) {
        star.addEventListener('mouseenter', () => {
            stars.forEach((s, i) => {
                s.classList.remove('hover');
                if (i <= index) {
                    s.classList.add('hover');
                }
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    }
});



// validationForm
document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.querySelectorAll('.input').forEach(input => input.classList.remove('error'));

    let isValid = true;

    const nameInput = document.querySelector('input[name="name"]');
    const namePattern = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/;
    if (!namePattern.test(nameInput.value.trim())) {
        nameInput.classList.add('error');
        isValid = false;
    }

    const emailInput = document.querySelector('input[name="email"]');
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        isValid = false;
    }

    const textInput = document.querySelector('textarea[name="text"]');
    const textValue = textInput.value.trim();

    if (textValue === "" || textValue.length > 300) {
        textInput.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});


//fancybox
const fancybox = document.querySelector('[data-fancybox]') || null;
if (fancybox) {
    Fancybox.bind('[data-fancybox]', {
    });
}


// tooltip 
document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.querySelector('.tooltip');
    const titleSpan = document.querySelector('.title_span');
    const closeTooltip = document.querySelector('.tooltip .close');

    titleSpan.addEventListener('click', function (event) {
        event.stopPropagation();
        tooltip.classList.add('visible');
    });

    closeTooltip.addEventListener('click', function (event) {
        event.stopPropagation();
        tooltip.classList.remove('visible');
    });

    document.addEventListener('click', function (event) {
        if (!tooltip.contains(event.target) && !titleSpan.contains(event.target)) {
            tooltip.classList.remove('visible');
        }
    });
});



//timer 
var intervalInDays = 1;
const timer = document.querySelector('#timer') || null;

if (timer) {
    function startTimer() {
        var countdownDate = new Date().getTime() + (intervalInDays * 24 * 60 * 60 * 1000); // Устанавливаем конечное время

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countdownDate - now;

            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("hours").textContent = String(hours).padStart(2, '0');
            document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
            document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

            if (distance < 0) {
                clearInterval(x);
                startTimer(); // Перезапуск таймера по окончанию
            }
        }, 1000);
    }
    startTimer();
}