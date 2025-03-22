/**
 * Education Data Configuration File
 *
 * This file contains all education definitions. To add a new education entry:
 * 1. Add a new Education object to the educationData array below
 */

// Education data - easy to add or modify education entries
const educationData = [
  // First education
  new Education(
    "education1",
    "Bachelor of Technology",
    "Mechanical Engineering",
    "IIITDM Kancheepuram",
    "2019 - 2023",
    "<b>CGPA:</b> 8.5/10<br>" +
      "<b>Activities:</b> Tech Club, Robotics Society<br>" +
      "<b>Achievements:</b> Dean's List for Academic Excellence, Best Student Project Award",
    "https://www.iiitdm.ac.in/"
  ),

  // Second education
  new Education(
    "education2",
    "Higher Secondary Education",
    "Science and Mathematics",
    "Delhi Public School",
    "2017 - 2019",
    "<b>Percentage:</b> 92%<br>" +
      "<b>Activities:</b> Science Club, Cricket Team<br>" +
      "<b>Achievements:</b> School Topper in Physics, Selected for National Science Olympiad",
    "#"
  ),

  // Third education
  new Education(
    "education3",
    "Secondary Education",
    "All Subjects",
    "Delhi Public School",
    "2015 - 2017",
    "<b>Percentage:</b> 94%<br>" +
      "<b>Activities:</b> Coding Club, Literary Society<br>" +
      "<b>Achievements:</b> Perfect Attendance Award, Mathematics Competition Winner",
    "#"
  ),
];

// Create and export the education manager instance
const educationManager = new EducationManager();
educationManager.initializeEducation(educationData);

// Make education manager available globally
window.educationManager = educationManager;
