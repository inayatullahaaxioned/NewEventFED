/* Author: 
Inayatullah
*/
//grabbing elements
const header = document.querySelector('.header'),
    hamburger = document.querySelector('.hamburger'),
    navbar = document.querySelector('.navbar');

//header sticky js start
window.addEventListener("scroll", function () {
    if (window.scrollY > header.offsetHeight + 50) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});
//header sticky js end

//hamburger js start
hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});
//hamburger js end

//speaker section responsive slider start here 
$('.speakers-list').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 995,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
//speaker section responsive slider end here
