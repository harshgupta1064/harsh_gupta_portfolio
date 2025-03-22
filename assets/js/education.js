/**
 * Education Class - Represents an education entry in the portfolio
 */
class Education {
  /**
   * Create a new education entry
   * @param {string} id - Unique identifier for the education
   * @param {string} degree - Degree name
   * @param {string} field - Field of study
   * @param {string} institution - School/college name
   * @param {string} period - Time period (e.g., "2019 - 2023")
   * @param {string} description - Education description
   * @param {string} link - URL of the institution (optional)
   */
  constructor(id, degree, field, institution, period, description, link = "#") {
    this.id = id;
    this.degree = degree;
    this.field = field;
    this.institution = institution;
    this.period = period;
    this.description = description;
    this.link = link;
  }

  /**
   * Generate HTML for this education entry
   * @returns {string} HTML string for the education
   */
  generateHTML() {
    return `
        <div class="education__card" data-education-id="${this.id}">
            <div class="education__header">
                <div class="education__icon">
                    <i class='bx bxs-graduation'></i>
                </div>
                <div class="education__meta">
                    <h3 class="education__degree">${this.degree}</h3>
                    <h4 class="education__field">${this.field}</h4>
                    <a href="${this.link}" class="education__institution" target="_blank" rel="noopener">
                        ${this.institution}
                    </a>
                    <span class="education__period">${this.period}</span>
                </div>
            </div>
            <div class="education__content">
                <p class="education__description">${this.description}</p>
            </div>
        </div>
        `;
  }
}

/**
 * EducationManager Class - Handles education loading and display
 */
class EducationManager {
  constructor() {
    this.education = [];
  }

  /**
   * Add an education entry to the manager
   * @param {Education} education - Education to add
   */
  addEducation(education) {
    this.education.push(education);
  }

  /**
   * Initialize with a list of education entries
   * @param {Education[]} education - List of Education objects
   */
  initializeEducation(education) {
    this.education = education;
  }

  /**
   * Render all education entries to the container
   * @param {string} containerId - ID of container element
   */
  renderEducation(containerId = "education-container") {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container element with ID '${containerId}' not found`);
      return;
    }

    // Generate HTML for all education entries
    const educationHTML = this.education
      .map((education) => education.generateHTML())
      .join("");
    container.innerHTML = educationHTML;

    // Apply staggered animation delay to education cards
    const educationCards = container.querySelectorAll(".education__card");
    educationCards.forEach((card, index) => {
      // Add a staggered delay effect (0.2s between each card)
      card.style.animationDelay = `${index * 0.2}s`;
    });

    console.log(
      `Rendered ${this.education.length} education entries to container`
    );

    // Add scroll reveal animations
    this.addScrollRevealAnimations();
  }

  /**
   * Add scroll reveal animations to education cards
   */
  addScrollRevealAnimations() {
    if (typeof ScrollReveal !== "undefined") {
      ScrollReveal().reveal(".education__card", {
        origin: "right",
        distance: "30px",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        interval: 200,
      });
    }
  }
}

// Initialize the education section when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  if (window.educationManager) {
    window.educationManager.renderEducation();
  } else {
    console.error(
      "Education manager not found. Make sure education-data.js is loaded before education.js"
    );
  }
});
