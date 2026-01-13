//  section1 홈화면 인트로 
let home1_content = document.querySelector(".home1_content");
let op_count = 0;
setTimeout(() => {
  const fadein = setInterval(() => {
    op_count = op_count + 0.1;
    home1_content.style.opacity = op_count;

    if (op_count >= 1) {
      clearInterval(fadein);
    }
  }, 50);
}, 1000);

// 페이지 진입시 페이드인 효과 
const options = {
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px",
}

const targets = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });

}, options);

targets.forEach((el) => observer.observe(el));

// // 새로고침시 초기화면으로 화면 리셋
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".home4_track");
  const slides = document.querySelectorAll(".home4_track .home4_inner");

  if (!track || slides.length === 0) return;

  let index = 0;
  const total = slides.length;
  const intervalMs = 3000;

  function goTo(i) {
    index = (i + total) % total;
    track.style.transform = `translateX(${-100 * index}%)`;
  }

  // 자동 재생
  let timer = setInterval(() => goTo(index + 1), intervalMs);
});