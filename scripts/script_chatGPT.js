gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// SECTION1 순차적으로 나오기
const ani1 = gsap.timeline();
ani1.from("#section1 .a1", { y: -100, autoAlpha: 0 })
    .from("#section1 .a2", { y: -100, autoAlpha: 0 })
    .from("#section1 .a3", { y: 200, autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani1,
    trigger: "#section1",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true
});

// SECTION2 순차적으로 나오기
const ani2 = gsap.timeline();
ani2.from("#section2 .b1", { y: -100, autoAlpha: 0 })
    .from("#section2 .b2", { y: -100, autoAlpha: 0 })
    .from("#section2 .b3", { y: 200, autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani2,
    trigger: "#section2",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true
});

// SECTION3 순차적으로 나오기
const ani3 = gsap.timeline();
ani3.from("#section3 .c1", { y: -500, autoAlpha: 0 })
    .from("#section3 .c2", { y: -500, autoAlpha: 0 })
    .from("#section3 .c3", { y: -500, autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani3,
    trigger: "#section3",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true
});

// SECTION4 순차적으로 나오기
const ani4 = gsap.timeline();
ani4.from("#section4 .d1", { y: -100, autoAlpha: 0 })
    .from("#section4 .d2", { y: -100, autoAlpha: 0 })
    .from("#section4 .d3", { y: 200, autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani4,
    trigger: "#section4",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true
});

// SECTION5 순차적으로 나오기
const ani5 = gsap.timeline();
ani5.from("#section5 .e1", { y: -500, autoAlpha: 0 })
    .from("#section5 .e2", { y: -500, autoAlpha: 0 })
    .from("#section5 .e3", { y: -500, autoAlpha: 0 });

ScrollTrigger.create({
    animation: ani5,
    trigger: "#section5",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: true
});

// 가로 섹션 애니메이션
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > section");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        snap: {
            snapTo: 1 / (sections.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 }
        }
    }
});

// 메뉴 이동 설정
let links = gsap.utils.toArray("#parallax__nav ul li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href"));

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
                // 스크롤 완료 후 ScrollTrigger 상태 갱신 및 애니메이션 재시작
                ScrollTrigger.refresh(); // 전체 ScrollTrigger 상태 갱신
                let animation = element.dataset.animation;
                if (animation) {
                    eval(animation).restart(); // 해당 섹션 애니메이션 재시작
                }
            },
            overwrite: "auto"
        });
    });
});

// 각 섹션에 데이터 속성으로 타임라인을 저장
document.querySelectorAll("section").forEach((section, index) => {
    section.dataset.animation = `ani${index + 1}`;
});
