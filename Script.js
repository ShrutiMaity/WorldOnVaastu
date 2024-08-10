document.addEventListener('DOMContentLoaded', () => {

    // --------------- Animate On Scroll Init --------------- //

    console.log(AOS);
    
    AOS.init();

    // --------- Sticky Advertisement Section --------- //

    const stickyAdvtSection = document.querySelector('#advertisement-section')
    const stickyAdvtSectionCloseBtn = document.querySelector('#advertisement-section .close-btn')

    stickyAdvtSectionCloseBtn.addEventListener('click', () => {
        stickyAdvtSection.style.display = 'none'
    })

    // --------- Mobile Navigation Function --------- //

    const mobileNavItems = document.querySelector('.mobile-nav-items')
    const hamBurger = document.querySelector('.hamburger')

    const toggleNavBar = () => {
        hamBurger.classList.toggle('is-active')
        mobileNavItems.classList.toggle('active')
    }

    hamBurger.addEventListener('click', toggleNavBar)
    mobileNavItems.addEventListener('click', toggleNavBar)


    // --------------- PopUp Function --------------- //

    const startPopUpCountdown = () => {
        let countdownTime = 15 * 60;

        const countdownInterval = setInterval(() => {
            const hours = Math.floor(countdownTime / 3600);
            const minutes = Math.floor((countdownTime % 3600) / 60);
            const seconds = countdownTime % 60;

            document.querySelector('.number.hours p').textContent = String(hours).padStart(2, '0');
            document.querySelector('.number.minutes p').textContent = String(minutes).padStart(2, '0');
            document.querySelector('.number.seconds p').textContent = String(seconds).padStart(2, '0');

            countdownTime--;

            if (countdownTime < 0) {
                clearInterval(countdownInterval);
                document.querySelector('.overlay .enroll-btn').textContent = "Offer Expired";
            }
        }, 1000);
    }

    // Pop Up Timer
    const showPopUp = () => {
        const countdownTimeout = setTimeout(() => {
            document.querySelector('.overlay').style.display = "grid";
            startPopUpCountdown();
        }, 1500)
    }


    document.querySelector('.overlay .close-btn').addEventListener('click', () => {
        document.querySelector('.overlay').style.display = "none";
    })

    document.querySelector('.overlay .enroll-btn').addEventListener('click', () => {
        document.querySelector('.overlay').style.display = "none";
    })

    // showPopUp();


    // ----------- Slider JS Functions ---------

    var splide1 = new Splide("#image-carousel-1", {
        type: "fade",
        rewind: true,
        autoplay: "playing",
    });

    var splide2 = new Splide("#image-carousel-2", {
        type: "fade",
        rewind: true,
        autoplay: "playing",
    });

    splide1.mount();
    splide2.mount();


    // ----------- Courses JS Functions ---------

    const coursesList = [
        {
            name: '3 Days ACMOS Lecher Antenna Foundation Workshop',
            imgSrc: './Assets/Images/Course Covers/ACMOS Lecher Antenna 3 Days Workshop-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'basics'
        },
        {
            name: 'Astro & Vastu',
            imgSrc: './Assets/Images/Course Covers/Astroo Vaastu-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'basics'
        },
        {
            name: 'Basic KP Astrology',
            imgSrc: './Assets/Images/Course Covers/K P Astrology-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'basics'
        },
        {
            name: 'Foundation Lo Shu Grid Numerology',
            imgSrc: './Assets/Images/Course Covers/Foundation Lo Shu Grid Numerology-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'basics'
        },
        {
            name: 'Pendulum Dowsing',
            imgSrc: './Assets/Images/Course Covers/Pendulum Dowsing-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'basics'
        },
        {
            name: 'ACMOS Lecher Antenna Level 1 Practical Training',
            imgSrc: './Assets/Images/Course Covers/ACMOS Lecher Antenna Level 1 Training-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'advance'
        },
        {
            name: 'KP Nadi Red AstrooVaastu',
            imgSrc: './Assets/Images/Course Covers/K P Nadi Red AstrooVaastu-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'advance'
        },
        {
            name: 'Lo Shu Grid Numerology',
            imgSrc: './Assets/Images/Course Covers/Professional Lo Shu Grid Numerology-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'advance'
        },
        {
            name: 'ACMOS Lecher Antenna Level 2 Practical Training',
            imgSrc: './Assets/Images/Course Covers/ACMOS Lecher Antenna Level 2 30 Days Challenge-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'professional'
        },
        {
            name: 'FlagShip AstrooVaastu',
            imgSrc: './Assets/Images/Course Covers/Flagship Astro Vastu-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'professional'
        },
        {
            name: 'Modern Vaastu',
            imgSrc: './Assets/Images/Course Covers/Modern Vaastu-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'professional'
        },
        {
            name: 'Predictive Vedic & Mobile Numerology',
            imgSrc: './Assets/Images/Course Covers/Predictive Vedic & Mobile Numerology-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'professional'
        },
        {
            name: 'Professional KP Astrology',
            imgSrc: './Assets/Images/Course Covers/Professional KP Astrology-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'professional'
        },
        {
            name: 'Professional Lo Shu Grid Numerology',
            imgSrc: './Assets/Images/Course Covers/Professional Lo Shu Grid Numerology-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'professional'
        },
        {
            name: 'Professional Mobile Numerology',
            imgSrc: './Assets/Images/Course Covers/Professional Mobile Numerology-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'professional'
        },
        {
            name: 'Energy Vaastu Protocol System',
            imgSrc: './Assets/Images/Course Covers/Energy Vaastu Protocol System-min.png',
            enrollLink: '',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Tempora, qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, velit.',
            level: 'masters'
        },
    ]

    const courseContainer = document.querySelector('#course .course-holder');
    const tagsContainer = document.querySelector('.course-tags')
    const tagsList = document.querySelectorAll('.course-tags .tags')

    const renderCourse = (courses) => {
        courseContainer.innerHTML = ""
        courses.forEach(({ name, imgSrc, enrollLink, desc, level }) => {
            let courseWrapper = document.createElement('div');
            courseWrapper.classList.add('course-wrapper')
            let course = document.createElement('div');
            course.classList.add('course')

            let imgHolder = document.createElement('div')
            imgHolder.classList.add('img-holder');

            let imageTag = document.createElement('img')
            imageTag.src = imgSrc;
            imageTag.alt = name;
            imageTag.loading = 'lazy';
            imgHolder.appendChild(imageTag);

            let nameTag = document.createElement('p');
            nameTag.classList.add('course-name');
            nameTag.textContent = name;

            let descTag = document.createElement('p');
            descTag.classList.add('desc');
            descTag.textContent = desc;

            let linkTag = document.createElement('a');
            linkTag.classList.add('btn');
            linkTag.href = enrollLink
            linkTag.textContent = 'Enroll Now';

            course.appendChild(imgHolder)
            course.appendChild(nameTag)
            course.appendChild(descTag)
            course.appendChild(linkTag)
            courseWrapper.appendChild(course)

            courseContainer.appendChild(courseWrapper)
        });
        ScrollReveal().sync();


    }

    const removeTagHighlight = () => tagsList.forEach((tag) => tag.classList.remove('active'))

    tagsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            removeTagHighlight();
            e.target.classList.add('active')
            let filterName = e.target.textContent.toLowerCase();

            if (filterName === 'all') {
                renderCourse(coursesList);
            } else {
                let filteredCourse = coursesList.filter(({ level }) => filterName === level)
                renderCourse(filteredCourse);
            }
        }
    })


    renderCourse(coursesList);
    ScrollReveal().reveal('.course-holder .course-wrapper', { interval: 60, opacity: 0, reset: false });

    // ----------- Testimonials Slider JS Functions ---------

    const splide3 = new Splide("#image-carouse3", {
        type: "loop",
        perPage: 3,
        focus: "center",
        autoplay: "playing",
        gap: '24px',
        breakpoints: {
            1200: {
                perPage: 1
            },
        }
    });
    splide3.mount();

    // -----------About Section Counter JS Functions ---------

    const about = document.getElementById('about-us')
    const counterData = document.querySelectorAll('.number-data');
    let activated = false;

    window.addEventListener('scroll', () => {
        if (scrollY > about.offsetTop - 100 && activated == false) {
            counterData.forEach(e => {
                let target = parseInt(e.dataset.count);
                let count = 0;

                let countUpdate = () => {
                    if (count < target) {
                        if (target <= 30) {
                            count++;
                            e.innerText = count + '+';
                            setTimeout(countUpdate, 100)
                        }
                        else if (target <= 100) {
                            count += 5;
                            e.innerText = count + '+';
                            setTimeout(countUpdate, 50)
                        }
                        else {
                            count += 100;
                            e.innerText = count + '+';
                            setTimeout(countUpdate, 30)
                        }


                    }
                    else {
                        e.innerText = target + '+';
                    }

                    activated = true;

                }
                countUpdate();
            })

        }
    })

    // ----------- FAQ JS Functions --------- //

    const faqsQuestion = document.querySelectorAll('.faq .question');

    faqsQuestion.forEach(e => {
        e.addEventListener('click', () => {
            let element = e.nextElementSibling;
            let currentHeight = element.style.height;
            let isCollapsed = currentHeight === '' || currentHeight === '0px';
            element.style.height = isCollapsed ? `${element.scrollHeight}px` : '0px';
        })

    });

    // ----------- Footer Date Function --------- //
    document.getElementById('.year') = Date().getFullYear();
});






