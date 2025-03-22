/**
 * Project Data Configuration File
 * 
 * This file contains all project definitions. To add a new project:
 * 1. Create a folder in assets/img/projects/ with your project ID
 * 2. Add numbered screenshots (01.jpg, 02.jpg, etc.) to that folder
 * 3. Add a new Project object to the projectsData array below
 */

// Project data - easy to add or modify projects
const projectsData = [
    // E-commerce project
    new Project(
        'ecommerce',
        'E-Commerce Android App',
        'A feature-rich e-commerce application built with Kotlin and Android Jetpack components. Implements MVVM architecture with clean code practices.',
        ['Kotlin', 'MVVM', 'Firebase'],
        '#',
        3  // Number of screenshots
    ),
    
    // Fitness project
    new Project(
        'fitness',
        'Fitness Tracker App',
        'A comprehensive fitness tracking application that monitors workouts, nutrition, and sleep patterns. Uses Room database and Coroutines for background processing.',
        ['Kotlin', 'Room DB', 'Coroutines'],
        '#',
        3
    ),
    // Fitness project
    new Project(
        'fitness',
        'Fitness Tracker App',
        'A comprehensive fitness tracking application that monitors workouts, nutrition, and sleep patterns. Uses Room database and Coroutines for background processing.',
        ['Kotlin', 'Room DB', 'Coroutines'],
        '#',
        3
    ),
    
    // Social media project
    new Project(
        'social',
        'Social Media Integration',
        'A social networking platform that seamlessly integrates various social media APIs. Features real-time chat, media sharing, and notification system.',
        ['Java', 'Firebase', 'REST APIs'],
        '#',
        3
    ),
    
    // Weather project
    new Project(
        'weather',
        'Weather Forecast App',
        'A modern weather application with location-based forecasts, beautiful UI animations, and offline support. Utilizes OpenWeatherMap API and caching mechanisms.',
        ['Kotlin', 'Retrofit', 'MVVM'],
        '#',
        3
    )
];

// Create and export the project manager instance
const projectManager = new ProjectManager();
projectManager.initializeProjects(projectsData);

// Make project manager available globally
window.projectManager = projectManager; 