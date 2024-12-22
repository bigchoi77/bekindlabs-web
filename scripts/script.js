gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // SECTION2 순차적으로 나오기
// const ani2 = gsap.timeline();
// ani2.from("#section2 .b1", {y: -100, autoAlpha:0})
//     .from("#section2 .b2", {y: -100, autoAlpha:0})
//     .from("#section2 .b3", {y: 100, autoAlpha:0});

// ScrollTrigger.create({
//     animation: ani2,
//     trigger: "#section2",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false
// });

// // SECTION3 순차적으로 나오기
// const ani3 = gsap.timeline();
// ani3.from("#section3 .c1", {y: -100, autoAlpha:0})
//     .from("#section3 .c2", {y: -100, autoAlpha:0})
//     .from("#section3 .c3", {y: 100, autoAlpha:0});

// ScrollTrigger.create({
//     animation: ani3,
//     trigger: "#section3",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false
// });

// // SECTION4 순차적으로 나오기
// const ani4 = gsap.timeline();
// ani4.from("#section4 .d1", {y: -100, autoAlpha:0})
//     .from("#section4 .d2", {y: -100, autoAlpha:0})
//     .from("#section4 .d3", {y: 100, autoAlpha:0});

// ScrollTrigger.create({
//     animation: ani4,
//     trigger: "#section4",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false
// });

// // SECTION5 순차적으로 나오기
// const ani5 = gsap.timeline();
// ani5.from("#section5 .e1", {y: -100, autoAlpha:0})
//     .from("#section5 .e2", {y: -100, autoAlpha:0})
//     .from("#section5 .e3", {y: 100, autoAlpha:0});

// ScrollTrigger.create({
//     animation: ani5,
//     trigger: "#section5",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false
// });

// // SECTION6 순차적으로 나오기
// const ani6 = gsap.timeline();
// ani6.from("#section6 .f1", {y: -100, autoAlpha:0})
//     .from("#section6 .f2", {y: -100, autoAlpha:0})
//     .from("#section6 .f3", {y: 100, autoAlpha:0});

// ScrollTrigger.create({
//     animation: ani6,
//     trigger: "#section6",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false
// });


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


// 헤더가 슬라이드 다운/업되며 나타나고 사라지는 애니메이션
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





// 스크롤 하자마자 헤더 나타내기

// gsap.fromTo("#header", 
//     { 
//         y: -100, // 헤더가 화면 위에서 시작
//         opacity: 0, 
//         visibility: "hidden" 
//     }, 
//     { 
//         y: 0, // 원래 위치로 슬라이드 다운
//         opacity: 1, 
//         visibility: "visible",
//         duration: 0.5,
//         scrollTrigger: {
//             trigger: "body", // 트리거를 전체 페이지로 설정
//             start: "top top", // 페이지 스크롤 시작 시 동작
//             toggleActions: "play none none reverse", // 스크롤 내릴 때 play, 올릴 때 reverse
//         }
//     }
// );

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

// // 텍스트 확대하기
// const ani0 = gsap.timeline();
// ani0.to("#section1 .home-container__text", {scale: 100, duration: 1, autoAlpha: 1})
//     .to("#section1 .home-container__text", {autoAlpha: 0})

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

// 로고 앵커 요소 선택
const logoLink = document.querySelector('.js-scroll-top');

// 클릭 이벤트 등록
logoLink.addEventListener('click', (event) => {
  event.preventDefault(); // # 링크의 기본 동작 막기
  
  // GSAP ScrollToPlugin을 사용한 부드러운 스크롤
  gsap.to(window, {
    duration: 1,              // 애니메이션 지속 시간(초)
    scrollTo: { y: 0 },       // 이동할 위치(맨 위)
    ease: "power2.inOut"      // 가속 곡선(easing)
  });
});

// 메뉴 클릭 이벤트 추가
document.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 기본 앵커 동작 차단

        // 이동할 섹션 ID 가져오기
        const targetId = e.target.getAttribute('href');

        // 부드러운 스크롤 이동
        gsap.to(window, {
            scrollTo: targetId,
            duration: 1, // 스크롤 이동 시간
            ease: "power2.inOut" // 부드러운 애니메이션 효과
        });
        

        // 네비게이션 닫기
        document.querySelector('.navigation__checkbox').checked = false;
    });
});


// //스무스 효과
// const lenis = new Lenis();

// lenis.on('scroll', (e) => {
//     console.log(e);
// })

// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
