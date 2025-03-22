/**
 * Achievement Class - Represents an achievement in the portfolio
 */
class Achievement {
  /**
   * Create a new achievement entry
   * @param {string} id - Unique identifier for the achievement
   * @param {string} title - Achievement title
   * @param {string} year - Year of achievement
   * @param {string} description - Achievement description
   */
  constructor(id, title, year, description) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.description = description;
  }

  /**
   * Generate HTML for this achievement
   * @returns {string} HTML string for the achievement
   */
  generateHTML() {
    return `
        <div class="achievement__card" data-achievement-id="${this.id}">
            <div class="achievement__icon">
                <i class='bx bx-trophy'></i>
                <span class="achievement__year">${this.year}</span>
            </div>
            <div class="achievement__content">
                <h3 class="achievement__title">${this.title}</h3>
                <p class="achievement__description">${this.description}</p>
            </div>
        </div>
        `;
  }
}

/**
 * AchievementsManager Class - Handles achievements loading and display
 */
class AchievementsManager {
  constructor() {
    this.achievements = [];
  }

  /**
   * Add an achievement to the manager
   * @param {Achievement} achievement - Achievement to add
   */
  addAchievement(achievement) {
    this.achievements.push(achievement);
  }

  /**
   * Initialize with a list of achievements
   * @param {Achievement[]} achievements - List of Achievement objects
   */
  initializeAchievements(achievements) {
    this.achievements = achievements;
  }

  /**
   * Render all achievements to the container
   * @param {string} containerId - ID of container element
   */
  renderAchievements(containerId = "achievements-container") {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container element with ID '${containerId}' not found`);
      return;
    }

    // Generate HTML for all achievements
    const achievementsHTML = this.achievements
      .map((achievement) => achievement.generateHTML())
      .join("");
    container.innerHTML = achievementsHTML;

    // Apply staggered animation delay to achievement cards
    const achievementCards = container.querySelectorAll(".achievement__card");
    achievementCards.forEach((card, index) => {
      // Add a staggered delay effect (0.2s between each card)
      card.style.animationDelay = `${index * 0.2}s`;
    });

    console.log(
      `Rendered ${this.achievements.length} achievements to container`
    );

    // Add scroll reveal animations
    this.addScrollRevealAnimations();
  }

  /**
   * Add scroll reveal animations to achievement cards
   */
  addScrollRevealAnimations() {
    if (typeof ScrollReveal !== "undefined") {
      ScrollReveal().reveal(".achievement__card", {
        origin: "bottom",
        distance: "30px",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        interval: 200,
      });
    }
  }
}

// Initialize the achievements section when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  if (window.achievementsManager) {
    window.achievementsManager.renderAchievements();
  } else {
    console.error(
      "Achievements manager not found. Make sure achievements-data.js is loaded before achievements.js"
    );
  }
});
