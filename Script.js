document.addEventListener('DOMContentLoaded', () => {

  // Function To Render Courses In Page

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


  const courseContainer = document.querySelector('#course-section .course-holder');
  const tagsContainer = document.querySelector('.course-tags')
  const tagsList = document.querySelectorAll('.course-tags .tags')

  const renderCourse = (courses) => {
    courseContainer.innerHTML = ""
    courses.forEach(({ name, imgSrc, enrollLink, desc, level }) => {
      let course = document.createElement('div');
      course.classList.add('course')

      let imgHolder = document.createElement('div')
      imgHolder.classList.add('img-holder');

      let imageTag = document.createElement('img')
      imageTag.src = imgSrc;
      imageTag.alt = name;
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

      courseContainer.appendChild(course)
    });

    ScrollReveal().reveal('.course-holder .course', { interval: 100 });
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

});