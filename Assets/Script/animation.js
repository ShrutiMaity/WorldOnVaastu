document.addEventListener('DOMContentLoaded', () => {

  const sentences = [
    'ACMOS Lecher Antenna.',
    "Energy Vaastu Protocol System.",
    "Modern Vaastu.",
    "Professional AstroVaastu.",
    "Professional KP Astrology.",
    "Professional Numerology."
  ]

  const textCutter = () => {

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
        h2.appendChild(span);
      });
      container.appendChild(h2)
    })
  }

  const animateText = () => {
    textCutter()
    const list = document.querySelectorAll(".animated-text");
    let tl = gsap.timeline({
      repeat: -1
    });

    list.forEach((tag, index) => {
      if (index >= 0) {
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
  }

  const animateVideoBackground = () => {
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
  }

  animateText()
  animateVideoBackground()
})