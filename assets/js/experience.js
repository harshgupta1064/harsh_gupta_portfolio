/**
 * Experience Class - Represents a work experience in the portfolio
 */
class Experience {
  /**
   * Create a new experience entry
   * @param {string} id - Unique identifier for the experience
   * @param {string} title - Job title
   * @param {string} company - Company name
   * @param {string} period - Time period (e.g., "Jan 2020 - Dec 2021")
   * @param {string} description - Job description
   * @param {string[]} skills - Array of skills used in this job
   */
  constructor(id, title, company, period, description, skills) {
    this.id = id;
    this.title = title;
    this.company = company;
    this.period = period;
    this.description = description;
    this.skills = skills;
  }

  /**
   * Generate HTML for this experience
   * @returns {string} HTML string for the experience
   */
  generateHTML() {
    const skillTags = this.skills
      .map(
        (skill) =>
          `<span class="experience__skill-tag" data-skill="${skill.toLowerCase()}">${skill}</span>`
      )
      .join("");

    return `
        <div class="experience__item" data-experience-id="${this.id}">
            <div class="experience__timeline">
                <div class="experience__circle"></div>
                <div class="experience__stem"></div>
            </div>
            <div class="experience__content">
                <div class="experience__header">
                    <h3 class="experience__title">${this.title}</h3>
                    <h4 class="experience__company">${this.company}</h4>
                    <span class="experience__period">${this.period}</span>
                </div>
                <div class="experience__body">
                    <p class="experience__description">${this.description}</p>
                    <div class="experience__skills">
                        ${skillTags}
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

/**
 * ExperienceManager Class - Handles experience loading and display
 */
class ExperienceManager {
  constructor() {
    this.experiences = [];
    this.currentIndex = 0;
  }

  /**
   * Add an experience to the manager
   * @param {Experience} experience - Experience to add
   */
  addExperience(experience) {
    this.experiences.push(experience);
  }

  /**
   * Initialize with a list of experiences
   * @param {Experience[]} experiences - List of Experience objects
   */
  initializeExperiences(experiences) {
    this.experiences = experiences;
  }

  /**
   * Render all experiences to the container
   * @param {string} containerId - ID of container element
   */
  renderExperiences(containerId = "experience-timeline") {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container element with ID '${containerId}' not found`);
      return;
    }

    // Generate HTML for all experiences
    const experiencesHTML = this.experiences
      .map((experience) => experience.generateHTML())
      .join("");
    container.innerHTML = experiencesHTML;

    // Apply staggered animation delay to experience items
    const experienceItems = container.querySelectorAll(".experience__item");
    experienceItems.forEach((item, index) => {
      // Add a staggered delay effect (0.2s between each item)
      item.style.animationDelay = `${index * 0.2}s`;
    });

    console.log(`Rendered ${this.experiences.length} experiences to container`);

    // Add scroll reveal animations
    this.addScrollRevealAnimations();
  }

  /**
   * Add scroll reveal animations to experience items
   */
  addScrollRevealAnimations() {
    if (typeof ScrollReveal !== "undefined") {
      ScrollReveal().reveal(".experience__item", {
        origin: "left",
        distance: "30px",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        interval: 200,
      });
    }
  }
}

// Initialize the experience section when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  if (window.experienceManager) {
    window.experienceManager.renderExperiences();
  } else {
    console.error(
      "Experience manager not found. Make sure experience-data.js is loaded before experience.js"
    );
  }
});
