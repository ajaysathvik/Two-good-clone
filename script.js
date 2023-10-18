// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

locomotiveAnimation();

gsap.to("#nav-part1 svg", {
  transform: "translateY(-100%)",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",
    end: "top -5%",
    scrub: 1,
  },
});

gsap.to("#nav-part2 #links", {
  opacity: 0,
  transform: "translateY(-100%)",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",
    end: "top -5%",
    scrub: 1,
  },
});

function videoconanimation() {
  var videocon = document.querySelector("#video-container");
  var play = document.querySelector("#play");

  videocon.addEventListener("mouseenter", function () {
    gsap.to(play, { opacity: 0.7, scale: 1 });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(play, { opacity: 0, scale: 0 });
  });

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(play, { left: dets.x - 70, top: dets.y - 80 });
  });
}

videoconanimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    duration: 1,
    opacity: 0,
    y: 90,
    stagger: 0.2,
    duration: 0.9,
  });
  gsap.from("#page1 #video-container", {
    duration: 0.9,
    opacity: 0,
    y: 100,
    x: -100,
    scale: 1.5,
    delay: 0.9,
    stagger: 0.2,
    duration: 0.9,
  });
}

loadinganimation();

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.pageX - 75,
      top: dets.pageY - 75,
      scale: 1,
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        backgroundColor: "rgb(107,107,107)",
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        backgroundColor: "rgb(203,166,238)",
      });
    });
  });
}

cursorAnimation();
