const sentences = [
  'ACMOS Lecher Antenna.',
  "Energy Vaastu.",
  "Modern Vaastu.",
  "Professional AstroVaastu.",
  "Professional KP Astrology.",
  "Professional Numerology."
]

const container = document.querySelector('.animated-text-holder');
let clutter = "";

sentences.forEach((text, id) => {
  const h2 = document.createElement('h2');
  h2.classList.add(`animated-text`);
  h2.classList.add(`animated-text-${id}`);

  let char = text.split("").map(char => {
    const span = document.createElement('span');
    span.classList.add('word');
    span.innerText = char === ' ' ? '\u00A0' : char;
    // return span;
    h2.appendChild(span);
  });
  container.appendChild(h2)

})


let tl = gsap.timeline({
  repeat: -1
});

// tl.set(".div-block-2", {
//   opacity: 1
// });

const list = document.querySelectorAll(".animated-text");

list.forEach((tag, index) => {
  console.log('index', index);
  if (index >= 0) {
    console.log(1);
    tl.from(`.${tag.classList[1]} .word`, {
      yPercent: 100,
      rotationX: 90,
      opacity: 0,
      stagger: {
        amount: 0.4
      },
      duration: 0.7,
      ease: "back.out(1.7)"
    },
      "<0.1"
    );
  }
  if (index <= list.length - 1) {
    console.log(2);
    tl.to(`.${tag.classList[1]} .word`, {
      delay: 1,
      yPercent: -100,
      rotationX: -90,
      opacity: 0,
      stagger: {
        amount: 0.4
      },
      duration: 0.7,
      ease: "back.out(1.7)"
    });
  }
});




gsap.to('#video-section .background-element', {
  top: 0,
  borderRadius: 0,
  scrollTrigger: {
    trigger: "#video-section",
    scroller: 'body',
    start: 'top 10%',
    end: 'top -100%',
    // markers: true,
    scrub: 2
  }
})

// gsap.to('header', {
//   backgroundColor: 'black',
//   scrollTrigger: {
//     trigger: "#video-section",
//     scroller: 'body',
//     start: 'top 0%',
//     end: 'top 0%',
//     markers: true
//   }
// })

// ----------------- Marquee Animation ----------------

// gsap.to('.marquee-section-container .marquee-holder', {

// })