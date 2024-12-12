gsap.registerPlugin(ScrollTrigger);

// 왼쪽 컬럼 애니메이션 (처음 등장)
gsap.fromTo(
  ".left-column",
  { opacity: 0, translateY: 50 },
  {
    opacity: 1,
    translateY: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".container",
      start: "top top", // 스크롤 시작
      end: "top+=100", // 타이틀이 나타난 상태 유지
      pin: true, // 고정 상태 유지
      scrub: true, // 스크롤과 동기화
    },
  }
);

// 오른쪽 컬럼 패러그래프 애니메이션
document.querySelectorAll(".right-column .content p").forEach((el, index) => {
  gsap.fromTo(
    el,
    { opacity: 0, translateY: 20 },
    {
      opacity: 1,
      translateY: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: () => `top+=${index * 50} 80%`, // 패러그래프 순차적 등장
        end: "top 60%",
        scrub: true,
        markers: false, // 디버깅 마커 (필요 시 true로 변경)
      },
    }
  );
});

// 오른쪽 컬럼 콘텐츠 위로 스크롤
gsap.to(".right-column .content", {
  y: () =>
    -(document.querySelector(".right-column .content").scrollHeight -
      window.innerHeight),
  ease: "none",
  scrollTrigger: {
    trigger: ".right-column",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
