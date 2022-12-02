/* Author: 
Inayatullah
*/
//grabbing elements
const header = document.querySelector('.header'),
    hamburger = document.querySelector('.hamburger'),
    navbar = document.querySelector('.navbar'),
    toTopBtn = document.querySelector('.to-top-btn'),
    html = document.querySelector('html');

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
    html.classList.toggle('scroll-lock');
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

//navigation js start
const navItems = document.querySelectorAll('.navigate'),
    sections = document.querySelectorAll('section');
navItems.forEach(function (navMenu) {
    navMenu.addEventListener('click', function (e) {
        e.preventDefault();
        const activeNav = navbar.querySelector('.active');
        if (activeNav) {
            activeNav.classList.remove('active');
        }
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
        html.classList.remove('scroll-lock');
        navMenu.classList.add('active');
        const sectionUrl = navMenu.getAttribute('href');
        sections.forEach(function (section) {
            const sectionId = section.getAttribute('id');
            if (sectionId == sectionUrl.replace("#", "")) {
                const sectionTop = section.getBoundingClientRect().top;
                window.scrollBy({
                    top: sectionTop - 40,
                    behavior: "smooth"
                })
            }
        });
    });
});
//navigation js end

// on scroll navmenu active change 
const navigation = document.querySelectorAll('.nav-item');
window.onscroll = function () {
    let attribute;
    sections.forEach(function (section) {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            attribute = section.getAttribute('id');
        }
    });
    navigation[0].classList.remove('active');
    navigation.forEach(function (item) {
        item.classList.remove('active');
        if (item.getAttribute('href').replace('#', "") == attribute) {
            item.classList.add('active');
        }
    });
    if (scrollY <= 250) {
        navigation[0].classList.add('active');
    };
}

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
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        },
        {
            breakpoint: 995,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
    tab.addEventListener('click', function (e) {
        e.preventDefault();
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
    faq.addEventListener('click', function (e) {
        e.preventDefault();
        const activeFaq = document.querySelector('.faq-item.active');
        if (faqList[index].classList.contains('active')) {
            faqList[index].classList.remove('active');
        } else {
            if (activeFaq) {
                activeFaq.classList.remove('active');
            }
            faqList[index].classList.add('active');
        };
    });
});
//accordian js end

//watch video section modal start
const watchVideoSection = document.querySelector('.watch-video'),
    video = document.querySelector('.video');

video.addEventListener('click', function () {
    const modalContainer = document.createElement('div');
    modalContainer.className = "modal-container";
    modalContainer.innerHTML = `<div class="modal-content">
            <span class="modal-close">Close Btn</span>
            <video class="modal-video" poster="assets/images/intro-bg.jpg" controls autoplay>
              <source src="assets/images/watchvideo.mp4" type="video/mp4">
            </video>
          </div>`;
    watchVideoSection.appendChild(modalContainer);
    html.classList.add('scroll-lock');

    modalContainer.addEventListener('click', function (e) {
        if (!e.target.classList.contains('modal-video')) {
            modalContainer.remove();
            html.classList.remove('scroll-lock');
        };
    });

});
//watch video section modal end

//register form validation start here
const registerForm = document.querySelector('.register-form'),
    contactForm = document.querySelector('.contact-form'),
    firstName = document.querySelector('.first-name'),
    lastName = document.querySelector('.last-name'),
    phoneNo = document.querySelector('.phone-number'),
    email = document.querySelector('.email'),
    contactEmail = document.querySelector('.contact-email'),
    fullName = document.querySelector('.name'),
    message = document.querySelector('.message'),
    nameRegex = /^[A-Za-z]+$/,
    fullNameRegex = /^[a-zA-Z]+[a-zA-Z\s]+$/,
    phoneRegex = /^[6-9]\d{9}$/,
    emailRegex = /^([A-Za-z][A-Za-z0-9\-\_\.]+[A-Za-z0-9])\@([A-Za-z]{2,})\.([A-Za-z]{2,})$/,
    messageRegex = /./;

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInput(firstName, nameRegex);
    validateInput(lastName, nameRegex);
    validateInput(phoneNo, phoneRegex);
    validateInput(email, emailRegex, 5, 40);
    const errors = registerForm.querySelectorAll('.error');
    if (errors.length == 0) {
        showSuccessMsg(registerForm, "You have successfully registered!");
    };
});
//register form validation end here

//contact section form validation start here
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInput(fullName, fullNameRegex);
    validateInput(contactEmail, emailRegex, 5, 40);
    validateInput(message, messageRegex, 10, 250);
    const errors = contactForm.querySelectorAll('.error');
    if (errors.length == 0) {
        showSuccessMsg(contactForm, "Your message has been sent sucessfully!");
    };
})
//contact section form validation start end

function showSuccessMsg(parent, successMsg) {
    const successMessage = document.createElement('span');
    successMessage.className = "success-msg";
    successMessage.innerText = successMsg;
    parent.prepend(successMessage);
    setTimeout(function () {
        successMessage.remove();
    }, 4000);
    parent.reset();
}

//universal function for validating inputs
function validateInput(input, regex, minLimit = 3, maxLimit = 20) {
    const error = input.parentElement.querySelector('.error'),
        inputValue = input.value.trim();
    if (error) {
        error.remove();
    }
    if (inputValue == "") {
        appendError(input, `${input.name} is required`);
    } else if (inputValue.length < minLimit) {
        appendError(input, `minimum ${minLimit} character is required`);
    } else if (inputValue.length > maxLimit) {
        appendError(input, `maximum ${maxLimit} characters are allowed`);
    } else if (!regex.test(inputValue)) {
        appendError(input, `Please Enter valid ${input.name}`);
    }
}

//append error function
function appendError(input, errorMsg) {
    const inputParent = input.parentElement,
        errorSpan = document.createElement('span');
    errorSpan.className = "error";
    errorSpan.innerText = errorMsg;
    inputParent.appendChild(errorSpan);
};