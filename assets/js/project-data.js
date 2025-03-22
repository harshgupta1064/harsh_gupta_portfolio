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
        'Food Ordering Application',
        "<b>Real-Time Order Handling:</b> Utilized Firebase for instant database updates, enhancing user interaction and ensuring orders and menu items remain current.<br>"
        + "<b>Scalable Architecture:</b> Implemented the MVVM design pattern, enabling clearer separation of concerns that enhanced maintainability and facilitated a 30% reduction in bug reports during initial testing phases by creating modular code components.<br>"
        + "<b>Dynamic Menu Features:</b> Integrated tools for managing menu items dynamically, allowing restaurant owners to adjust offerings effortlessly.<br>"
        + "<b>User Security:</b> Incorporated Google and Email authentication for secure and user-friendly login experiences.",
        [
            "Kotlin",
            "Jetpack Compose",
            "MVVM Architecture",
            "Firebase",
            "Retrofit",
            "Room Database",
            "Material Design",
            "RecyclerView",
            "LiveData & ViewModel",
            "Google Authentication"
        ],
        'https://github.com/Harshgupta1064/Food_On_The_Way',
        5  // Number of screenshots
    ),
    
    // Fitness project
    new Project(
        'ai',
        'AI Tarot Application',
        "<b>AI-Powered Readings:</b> Integrated Gemini API for AI-generated Tarot card interpretations.<br>" 
    + "<b>Voice Interaction:</b> Implemented Google Speech-to-Text and Text-to-Speech APIs for hands-free user interaction.<br>"
    + "<b>Card Selection System:</b> Designed a RecyclerView-based selection mechanism allowing users to pick up to three cards.<br>"
    + "<b>Efficient UI Rendering:</b> Ensured optimal performance through smooth UI rendering and API handling.<br>"
    + "<b>MVVM Architecture:</b> Applied MVVM for better maintainability and separation of concerns.",
    [
        "Kotlin",
        "Jetpack Compose",
        "MVVM Architecture",
        "Google Speech-to-Text",
        "Google Text-to-Speech",
        "Gemini API",
        "RecyclerView",
        "Retrofit",
        "Room Database",
        "Coroutines",
        "Material Design",
        "LiveData & ViewModel",
        "API Integration",
        "UI/UX Design"
    ],
        'https://github.com/harshgupta1064/AI-Tarot-App',
        6
    ),
    
    // Social media project
    new Project(
        'settle',
        'Expense Management Application',
        "<b>Intuitive Expense Tracking:</b> Designed a user-friendly interface enabling individuals to record, categorize, and manage group expenses effortlessly, offering clear summaries and balance details.<br>" 
    + "<b>Group Management:</b> Integrated features that allow users to manage multiple groups, simplifying expense tracking across various activities.<br>"
    + "<b>Automated Settlements:</b> Developed algorithms to compute individual shares and suggest optimal ways to settle expenses, minimizing manual effort for users.",
    [
        "Kotlin",
        "Jetpack Compose",
        "MVVM Architecture",
        "Room Database",
        "Coroutines",
        "LiveData & ViewModel",
        "Material Design",
        "RecyclerView",
        "Firebase",
        "REST API Integration",
        "Google Authentication",
        "Expense Calculation Algorithms",
        "State Management",
        "Data Persistence",
        "UI/UX Design"
    ],
        'https://github.com/harshgupta1064/Settle.it',
        0
    ),
];

// Create and export the project manager instance
const projectManager = new ProjectManager();
projectManager.initializeProjects(projectsData);

// Make project manager available globally
window.projectManager = projectManager; 