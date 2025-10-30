//  section1 홈화면 인트로 
let home1_content = document.querySelector(".home1_content");
let op_count = 0;


setTimeout(()=> {
const fadein = setInterval(() => {
  op_count = op_count + 0.1; 
  home1_content.style.opacity = op_count;

  if (op_count >= 1) {
    clearInterval(fadein); 
  }
}, 50); 
}, 1000);


