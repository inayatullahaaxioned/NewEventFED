/* Author: 
Inayatullah
*/
//grabbing elements
const header = document.querySelector('.header'),
    hamburger = document.querySelector('.hamburger'),
    navbar = document.querySelector('.navbar'),
    toTopBtn = document.querySelector('.to-top-btn');


//header sticky js start and to-top-btn showing 
window.addEventListener("scroll", function () {
    if (window.scrollY > header.offsetHeight + 50) {
        header.classList.add('scroll');
        toTopBtn.classList.add('show');
    } else {
        header.classList.remove('scroll');
        toTopBtn.classList.remove('show');
    }
});
//header sticky js end

//hamburger js start
hamburger.addEventListener('click', function () {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});
//hamburger js end

//to-top-btn start
toTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
//to-top-btn end

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

//tab fiter in program section start
const tabs = document.querySelectorAll('.tab-item'),
    programs = document.querySelectorAll('.program-item');

//when page loads day one program become active
tabs[0].classList.add('active');
programs.forEach(function (program) {
    let checkDayNo = program.getAttribute('data-program');
    if (checkDayNo == 'one') {
        program.classList.add('active');
    };
});

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        let dayNo = tab.getAttribute('data-tab');
        showProgram(tab, dayNo);
    })
});

//showing program list on tab fitler
function showProgram(tab, dayNo) {
    let activeTab = document.querySelector('.tab-item.active');
    if (activeTab) {
        activeTab.classList.remove('active');
    };
    tab.classList.add('active');

    for (let list of programs) {
        if (list.classList.contains('active')) {
            list.classList.remove('active');
        }
        if (list.getAttribute('data-program') == dayNo) {
            list.classList.add('active');
        };
    };
};
//tab fiter in program section end

//accordian js start
const question = document.querySelectorAll('.question'),
    faqList = document.querySelectorAll('.faq-item');
faqList[0].classList.add('active');
question.forEach(function (faq, index) {
    faq.addEventListener('click', function () {
        const activeFaq = document.querySelector('.faq-item.active');
        if (activeFaq) {
            activeFaq.classList.remove('active');
        };
        if (faqList[index].classList.contains('active')) {
            faqList[index].classList.remove('active')
        } else {
            faqList[index].classList.add('active');
        }
    });
});
//accordian js end