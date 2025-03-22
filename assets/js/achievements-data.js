/**
 * Achievements Data Configuration File
 *
 * This file contains all achievement definitions. To add a new achievement:
 * 1. Add a new Achievement object to the achievementsData array below
 */

// Achievements data - easy to add or modify achievements
const achievementsData = [
  // First achievement
  new Achievement(
    "achievement1",
    "Android Developer Competition Winner",
    "2023",
    "<b>First Prize:</b> Won first place in the National Android App Development Competition.<br>" +
      "<b>Recognition:</b> Recognized for innovative UI/UX design and efficient implementation.<br>" +
      "<b>Project:</b> The winning project was a food ordering application with real-time order tracking."
  ),

  // Second achievement
  new Achievement(
    "achievement2",
    "Google Developer Certification",
    "2022",
    "<b>Android Developer Certification:</b> Successfully completed Google's Android Developer Certification.<br>" +
      "<b>Skills Validated:</b> Demonstrated proficiency in app architecture, user interface design, and data management."
  ),

  // Third achievement
  new Achievement(
    "achievement3",
    "Open Source Contribution Recognition",
    "2021",
    "<b>Project:</b> Contributed to prominent Android open-source libraries.<br>" +
      "<b>Impact:</b> Pull requests accepted and implemented in production versions of the libraries.<br>" +
      "<b>Recognition:</b> Received acknowledgment from the core team for code quality and optimization."
  ),

  // Fourth achievement
  new Achievement(
    "achievement4",
    "Hackathon Finalist",
    "2020",
    "<b>Event:</b> Reached the finals of International Code Hackathon.<br>" +
      "<b>Project:</b> Developed a real-time collaboration tool for remote teams.<br>" +
      "<b>Achievement:</b> Selected among top 10 teams from over 500 participating teams."
  ),
];

// Create and export the achievements manager instance
const achievementsManager = new AchievementsManager();
achievementsManager.initializeAchievements(achievementsData);

// Make achievements manager available globally
window.achievementsManager = achievementsManager;
