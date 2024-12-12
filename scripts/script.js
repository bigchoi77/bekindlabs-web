gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// SECTION2 순차적으로 나오기
const ani2 = gsap.timeline();
ani2.from("#section2 .b1", {y: -100, autoAlpha:0})
    .from("#section2 .b2", {y: -100, autoAlpha:0})
    .from("#section2 .b3", {x: -100, autoAlpha:0})
    .from("#section2 .b4", {x: -100, autoAlpha:0})
    .from("#section2 .b5", {x: -100, autoAlpha:0})
    .from("#section2 .b6", {x: -100, autoAlpha:0});

ScrollTrigger.create({
    animation: ani2,
    trigger: "#section2",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false
});

// SECTION3 순차적으로 나오기
const ani3 = gsap.timeline();
ani3.from("#section3 .c1", {y: -100, autoAlpha:0})
    .from("#section3 .c2", {y: -100, autoAlpha:0})
    .from("#section3 .c3", {x: -100, autoAlpha:0})
    .from("#section3 .c4", {x: -100, autoAlpha:0})
    .from("#section3 .c5", {x: -100, autoAlpha:0});

ScrollTrigger.create({
    animation: ani3,
    trigger: "#section3",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false
});

// SECTION4 순차적으로 나오기
const ani4 = gsap.timeline();
ani4.from("#section4 .d1", {y: -100, autoAlpha:0})
    .from("#section4 .d2", {y: -100, autoAlpha:0})
    .from("#section4 .d3", {x: -100, autoAlpha:0})
    .from("#section4 .d4", {x: -100, autoAlpha:0})
    .from("#section4 .d5", {x: -100, autoAlpha:0})
    .from("#section4 .d6", {x: -100, autoAlpha:0});

ScrollTrigger.create({
    animation: ani4,
    trigger: "#section4",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false
});

// SECTION5 순차적으로 나오기
const ani5 = gsap.timeline();
ani5.from("#section5 .e1", {y: -100, autoAlpha:0})
    .from("#section5 .e2", {y: -100, autoAlpha:0})
    .from("#section5 .e3", {x: -100, autoAlpha:0})
    .from("#section5 .e4", {x: -100, autoAlpha:0})
    .from("#section5 .e5", {x: -100, autoAlpha:0});

ScrollTrigger.create({
    animation: ani5,
    trigger: "#section5",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false
});

// SECTION6 순차적으로 나오기
const ani6 = gsap.timeline();
ani6.from("#section6 .f1", {y: -100, autoAlpha:0})
    .from("#section6 .f2", {y: -100, autoAlpha:0})
    .from("#section6 .f3", {x: -100, autoAlpha:0})
    .from("#section6 .f4", {x: -100, autoAlpha:0})
    .from("#section6 .f5", {x: -100, autoAlpha:0});

ScrollTrigger.create({
    animation: ani6,
    trigger: "#section6",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false
});


// 02. 여러개 이질감 표현하기
// gsap.utils.toArray(".animation-item").forEach(item => {
//     gsap.from(item, {
//         y: -100,
//         autoAlpha: 0,
//         ease: "none",
//         duration: 1,
//         pin: true,
//         anticipatePin: 1,
//         scrollTrigger: {
//             trigger: item,
//             start: "top 50%", 
//             end: "bottom 75%",
            
//             markers: true,
//             scrub: 3
//         },  
//     });
// });



// 스크롤 하자마자 헤더 나타내기

gsap.fromTo("#header", 
    { 
        y: -100, // 헤더가 화면 위에서 시작
        opacity: 0, 
        visibility: "hidden" 
    }, 
    { 
        y: 0, // 원래 위치로 슬라이드 다운
        opacity: 1, 
        visibility: "visible",
        duration: 0.5,
        scrollTrigger: {
            trigger: "body", // 트리거를 전체 페이지로 설정
            start: "top top", // 페이지 스크롤 시작 시 동작
            toggleActions: "play none none reverse", // 스크롤 내릴 때 play, 올릴 때 reverse
        }
    }
);

// 두번째 섹션부터 헤더 나타내기
//////////////////////////////////////////////////////

// gsap.to("#header", {
//     scrollTrigger: {
//         trigger: "#section2",
//         start: "top center", // when the top of the second section hits the center of the viewport
//         toggleActions: "play none none reverse", // plays when entering, reverses when leaving
//     },
//     opacity: 1,
//     visibility: "visible",
//     duration: 0.5
// });



// 스크롤힌트 나타내고 숨기기
//////////////////////////////////////////////////////

let scrollHint = document.getElementById("scroll-hint");
let timeoutId;

// Hide scroll hint on scroll
window.addEventListener("scroll", () => {
    // Clear any existing timeout
    clearTimeout(timeoutId);

    // Hide the scroll hint
    gsap.to(scrollHint, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
            scrollHint.style.visibility = "hidden";
        }
    });

    // Set a timeout to show the scroll hint again if scrolling stops
    timeoutId = setTimeout(() => {
        gsap.to(scrollHint, {
            opacity: 0.5,
            duration: 0.5,
            ease: "power1.in",
            onStart: () => {
            scrollHint.style.visibility = "visible";
            }
        });
    }, 500); // 1 second after scrolling stops (500이하에선 작동안함)
  });

// SECTION0 이미지 확대하기

// 06 : 텍스트 확대하기
// const ani0 = gsap.timeline();
// ani0.to("#section0 .section-item__logo", {scale: 100, duration: 1, autoAlpha: 1})
//     .to("#section0 .section-item__logo", {autoAlpha: 0})

// ScrollTrigger.create({
//     animation: ani0,
//     trigger: "#section0",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false
// });


// // 가로
// const horizontal = document.querySelector("#horizontal");
// const sections = gsap.utils.toArray("#horizontal > section");

// let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: horizontal,
//         start: "top top",
//         end: () =>  "+=" + (horizontal.offsetWidth - innerWidth),
//         pin: true,
//         anticipatePin: 1,
//         scrub: 1,
//         invalidateOnRefresh: true,
//         snap: {
//             snapTo: 1 / (sections.length - 1),
//             inertia: false,
//             duration: { min: 0.1, max: 0.1 }
//         },
//     }
// });

// // 메뉴 숨기기
// const showNav = gsap.from("#header", { 
//     yPercent: -200,
//     paused: true,
//     duration: 0.2
// }).progress(1);

// ScrollTrigger.create({
//     start: "top top",
//     end: 99999,
//     onUpdate: (self) => {
//         self.direction === -1 ? showNav.play() : showNav.reverse()
//     }
// });

// 메뉴 이동 설정
let links = gsap.utils.toArray("#parallax__nav ul li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href"));

    // ScrollTrigger 생성: 섹션이 뷰포트에 들어올 때 활성화 설정
    ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
            if (self.isActive) {
                setActive(link);
            }
        }
    });

    // 링크 클릭 이벤트 설정
    link.addEventListener("click", e => {
        e.preventDefault();
        // 섹션의 시작 부분으로 부드럽게 스크롤 이동
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: element,
                offsetY: 0 // 섹션의 시작 부분이 화면 상단에 위치하도록 설정
            },
            onComplete: () => {
                // 스크롤이 완료된 후 강제로 ScrollTrigger를 업데이트하여 애니메이션을 트리거
                ScrollTrigger.refresh();
            },
            overwrite: "auto"
        });
    });
});

// // 링크 활성화 설정 함수
// function setActive(link) {
//     links.forEach(el => el.classList.remove("active"));
//     link.classList.add("active");
// }


//스무스 효과
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
