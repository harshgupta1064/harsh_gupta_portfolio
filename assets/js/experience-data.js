/**
 * Experience Data Configuration File
 *
 * This file contains all experience definitions. To add a new experience:
 * 1. Add a new Experience object to the experiencesData array below
 */

// Experience data - easy to add or modify experiences
const experiencesData = [
  // First experience
  new Experience(
    "experience1",
    "Software Development Intern",
    "Evu Inc.<br> New York, U.S. ",
    "May 2025 - Present",
    "Building the Mobile Application for Elaview at Evu. Elaview is a B2B marketplace that connects landlords who have physical advertising space — like building walls, windows, vehicles, or billboards — with businesses looking to rent those spaces for ads.",
    ["Flutter", "Getx", "State Management", "Firebase", "Git"]
  ),

  // Second experience
  new Experience(
    "experience2",
    "Software Developer Intern",
    "Thennal Air Filters Pvt. Ltd. <br> Chennai, India",
    "September 2024 - November 2024",
    `
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li>Created an Android application from the ground up, connecting with sensors to display real-time readings.</li>
    <li>Collaborated with design team to create intuitive and responsive user interfaces.</li>
    <li>Crafted and executed core functionalities for seamless communication between the application and sensors.</li>
    <li>Collaborated with the team to enhance user experience, ensuring smooth operation and data flow.</li>
  </ul><br>
`,
    ["Kotlin", "REST APIs", "Room Database", "Material Design", "Firebase", "Authentication"]
  ),

];

// Create and export the experience manager instance
const experienceManager = new ExperienceManager();
experienceManager.initializeExperiences(experiencesData);

// Make experience manager available globally
window.experienceManager = experienceManager;
