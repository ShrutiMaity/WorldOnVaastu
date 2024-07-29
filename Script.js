// gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#Main"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#Main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

//   // follwoing line is not required to work pinning on touch screen

//   /* pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed"*/
// });


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

showPopUp();

