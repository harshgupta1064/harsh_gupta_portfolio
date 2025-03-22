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
    "Senior Android Developer",
    "Company Name",
    "June 2022 - Present",
    "<b>Feature Development:</b> Led the development of key features that increased user engagement by 30%.<br>" +
      "<b>Performance Optimization:</b> Improved app loading time by 40% through code refactoring and implementing best practices.<br>" +
      "<b>Team Leadership:</b> Mentored junior developers and implemented Agile methodologies for project management.",
    ["Kotlin", "MVVM Architecture", "Jetpack Compose", "Firebase", "Git"]
  ),

  // Second experience
  new Experience(
    "experience2",
    "Android Developer",
    "Previous Company",
    "January 2021 - May 2022",
    "<b>App Development:</b> Developed and maintained multiple Android applications with over 100K downloads.<br>" +
      "<b>UI/UX Implementation:</b> Collaborated with design team to create intuitive and responsive user interfaces.<br>" +
      "<b>Integration:</b> Successfully implemented third-party APIs and services.",
    ["Java", "Kotlin", "REST APIs", "Room Database", "Material Design"]
  ),

  // Third experience
  new Experience(
    "experience3",
    "Junior Developer Intern",
    "Internship Company",
    "May 2020 - December 2020",
    "<b>Mobile Development:</b> Contributed to the development of Android applications under senior guidance.<br>" +
      "<b>Bug Fixing:</b> Identified and resolved various bugs and issues in existing applications.<br>" +
      "<b>Documentation:</b> Created technical documentation for application features and APIs.",
    ["Java", "Android SDK", "SQLite", "Git", "Agile Development"]
  ),
];

// Create and export the experience manager instance
const experienceManager = new ExperienceManager();
experienceManager.initializeExperiences(experiencesData);

// Make experience manager available globally
window.experienceManager = experienceManager;
