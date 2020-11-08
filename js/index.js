let header = document.querySelector('.header');
let link = document.querySelectorAll('.link');
var mediaqueryList = window.matchMedia("(max-width: 1024px)");

const validation = mediaqueryList.matches ? 50 : 70;

window.onscroll = function() {
  let height;
  height = window.scrollY;
  
  if(height >= validation){
    header.classList.add('header-active');
    for (let i = 0; i < link.length; i++) {
      link[i].classList.add("link-active");
    }
  }else {
    header.classList.remove('header-active');
    for (let i = 0; i < link.length; i++) {
      link[i].classList.remove("link-active");
    }
  }
};
