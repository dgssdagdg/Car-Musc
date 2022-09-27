const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header-nav').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const swiper = new Swiper('.slider-slids', {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.slider .swiper-next',
      prevEl: '.slider .swiper-prev',
    },
    spaceBetween: 24,
});

const swipertwo = new Swiper('.services-sliders', {
  loop: true,
  speed: 800,
  slidesPerView: 1,
  navigation: {
    nextEl: '.services-sliders .swiper-next',
    prevEl: '.services-sliders .swiper-prev',
  },
  spaceBetween: 50,
});
window.addEventListener('click', function(event) {
    let ev = event.target;

    if(ev.closest('.menu')) {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
    }

    let btnOne = document.querySelector('[data-one-btn]');
    let btnTwo = document.querySelector('[data-two-btn]');
    if (ev.hasAttribute('data-one-btn') && !ev.closest('.attendance-btn-active') && btnTwo.closest('.attendance-btn-active') ){
      btnOne.classList.add('attendance-btn-active')
      btnTwo.classList.remove('attendance-btn-active')
    }
    if (ev.hasAttribute('data-two-btn') && !ev.closest('.attendance-btn-active') && btnOne.closest('.attendance-btn-active')) {
      btnTwo.classList.add('attendance-btn-active')
      btnOne.classList.remove('attendance-btn-active')
    }

    let oneBlock = document.querySelector('[data-one-block]');
    let twoBlock = document.querySelector('[data-two-block]');
    if (btnOne.closest('.attendance-btn-active')) {
      oneBlock.classList.add('attendance-blocks-active')
    } else {
      oneBlock.classList.remove('attendance-blocks-active')
    }
    if (btnTwo.closest('.attendance-btn-active')) {
      twoBlock.classList.add('attendance-blocks-active')
    } else {
      twoBlock.classList.remove('attendance-blocks-active')
    }
})

$(".gallery-list").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true
  }
});
