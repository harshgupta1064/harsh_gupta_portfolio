/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  opacity: 1,
  //     reset: true
});

// Apply ScrollReveal to sections while ensuring opacity doesn't cause issues
sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {
  opacity: 1,
});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
  opacity: 1,
});
sr.reveal(".home__social-icon", { interval: 200, opacity: 1 });
sr.reveal(".skills__item, .contact__input", { interval: 200, opacity: 1 });

// Handle work items separately to ensure they remain visible
sr.reveal(".work__img", { interval: 200, opacity: 1 });

/*===== PROJECT SECTION INITIALIZATION =====*/
document.addEventListener("DOMContentLoaded", () => {
  // Initialize projects - only proceed if the project manager exists
  if (typeof projectManager !== "undefined") {
    try {
      // Get the work slider container
      const workSliderContainer = document.querySelector(".work__slider");
      if (!workSliderContainer) {
        console.error("Work slider container not found");
        return;
      }

      // Render all projects to the container
      projectManager.renderProjects("work-slider");

      // Initialize the main project slider
      projectManager.initializeSlider();

      // Initialize individual app sliders for each project
      projectManager.initializeAppSliders();

      console.log("Project section successfully initialized");
    } catch (error) {
      console.error("Error initializing project section:", error);
    }
  } else {
    console.error(
      "Project manager not found. Make sure project-data.js is loaded before main.js"
    );
  }
});

/*===== CONTACT FORM REDIRECT =====*/
document.addEventListener("DOMContentLoaded", function () {
  // Set redirect URL dynamically based on current location
  const redirectInput = document.getElementById("redirectUrl");
  if (redirectInput) {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split("#")[0].split("?")[0];
    const baseDir = baseUrl.substring(0, baseUrl.lastIndexOf("/") + 1);
    redirectInput.value = baseDir + "thanks.html";

    console.log("Form redirect set to: " + redirectInput.value);
  }

  // Handle form submission loading state
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (submitButton) {
        // Change icon to loading spinner
        const originalHTML = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending <i class="bx bx-loader"></i>';
        submitButton.classList.add("loading");

        // Reset button if submission takes too long (10 seconds)
        setTimeout(function () {
          if (submitButton.classList.contains("loading")) {
            submitButton.innerHTML = originalHTML;
            submitButton.classList.remove("loading");
          }
        }, 10000);
      }
    });
  }
});
