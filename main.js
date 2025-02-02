
/*=============== COPYRIGHT ===============*/
document.addEventListener("copy", function (event) {
  event.preventDefault();
  navigator.clipboard.writeText(
    "Подборка экологических мультфильмов Толеубекова Жасулана 🔗 - https://zhaik007.github.io/article/"
  );
});

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");

    // Add show-icon to show and hide the menu icon
    toggle.classList.toggle("show-icon");
  });
};
showMenu("nav-toggle", "nav-menu");

const swiper = new Swiper(".slider-wrapper", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


const swipe = new Swiper(".vision-wrapper", {
    direction: "horizontal",
    loop: false,
    grabCursor: true,
    spaceBetween: 25,
    autoplay: {
      delay: 5000,
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    slidesPerView: 1,
    
  });

const partners = new Swiper(".org-wrapper", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

const cards = document.querySelectorAll(".news");

cards.forEach((card) => {
  card.addEventListener("mouseover", play_song);
  card.addEventListener("mouseleave", stop_song);
});

const fadeDuration = 3000;

function play_song(event) {
  const card = event.currentTarget;
  const audio = card.querySelector("#audio");

  if (!audio.paused) {
    // If the audio is already playing, don't interrupt it
    return;
  }

  fadeIn(audio, fadeDuration);

  audio.addEventListener("ended", () => {
    if (card.matches(":hover")) {
      fadeIn(audio, fadeDuration);
    }
  });
}

function stop_song(event) {
  const card = event.currentTarget;
  const audio = card.querySelector("#audio");
  fadeOut(audio, fadeDuration);
}

function fadeIn(audio, duration) {
  let volume = 0;
  audio.volume = volume;
  audio.play();

  const step = 1 / (duration / 100);

  const fadeAudioIn = setInterval(() => {
    if (volume < 1) {
      volume += step;
      if (volume > 1) volume = 1;
      audio.volume = volume;
    } else {
      clearInterval(fadeAudioIn);
    }
  }, 100);
}

function fadeOut(audio, duration) {
  let volume = 1;
  const step = 1 / (duration / 100);

  const fadeAudioOut = setInterval(() => {
    if (volume > 0) {
      volume -= step;
      if (volume < 0) volume = 0;
      audio.volume = volume;
    } else {
      clearInterval(fadeAudioOut);
      audio.pause();
      audio.currentTime = 0; // Reset to the beginning
    }
  }, 100);
}

let karts = document.querySelectorAll(".kart");
karts.forEach((elem) => {
  let mor = elem.querySelector(".more");
  mor.addEventListener("click", function () {
    
  let asr = false
  if (elem.classList.contains("active")){
    asr = true
  }
  
    karts.forEach((elem) => {
      let momor = elem.querySelector(".more")
      momor.classList.remove("min");
      momor.innerHTML = `<i class="fa-solid fa-circle-plus"></i> Подробнее`;

      elem.classList.remove("active")
      elem.classList.remove("kart_open")
      elem.classList.remove("kart_shrink")


      hidden = elem.querySelectorAll(".hiddable");
      for (let j = 0; j < hidden.length; j++) {
          hidden[j].classList.add("hidden");
          hidden[j].classList.remove("unhidden");
      }
    })

    if (asr){
      elem.classList.add("active")
    }
    elem.classList.toggle("active")

    hidden = elem.querySelectorAll(".hiddable");
    if (elem.classList.contains("active")){
      elem.classList.add("kart_open")
      mor.classList.add("min");
      mor.innerHTML = `<i class="fa-solid fa-circle-minus"></i> Меньше`;
      for (let j = 0; j < hidden.length; j++) {
        hidden[j].classList.remove("hidden");
        hidden[j].classList.add("unhidden");
      }

      const parentDiv = elem.parentElement;  // The parent container (flexbox)

      const children = Array.from(parentDiv.children);  // Get all child divs

    // Find the index of the clicked div
    const clickedIndex = children.indexOf(elem);

      // Determine if clicked index is even or odd
      if (clickedIndex % 2 === 0) {
          // Even index -> Shrink the next div (right neighbor)
          if (clickedIndex + 1 < children.length) {
              children[clickedIndex + 1].classList.add("kart_shrink")  // Shrink the next div to 1/3
          }
      } else {
          // Odd index -> Shrink the previous div (left neighbor)
          if (clickedIndex - 1 >= 0) {
              children[clickedIndex - 1].classList.add("kart_shrink")  // Shrink the previous div to 1/3
          }
      }

    }else{
      elem.classList.remove("kart_open")
      mor.classList.remove("min");
      mor.innerHTML = `<i class="fa-solid fa-circle-plus"></i> Подробнее`;
      for (let j = 0; j < hidden.length; j++) {
        hidden[j].classList.add("hidden");
        hidden[j].classList.remove("unhidden");
      }
    }

    
    
  });
});

/*=============== LANG MENU ===============*/
var drop = document.querySelector("#langdrop");
var dropbtn = document.querySelector("#cdrop");

let el = drop.querySelectorAll("li");
el.forEach((elem) => {
  let p = elem.querySelector("p");
  elem.addEventListener("click", function update_country(elem) {
    dropbtn.innerHTML =
      p.innerText + `<i class="ri-arrow-down-s-line dropdown__arrow"></i>`;
  });
});
