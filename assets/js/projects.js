/**
 * Project Class - Represents a project in the portfolio
 */
class Project {
    /**
     * Create a new project
     * @param {string} id - Unique identifier for the project
     * @param {string} title - Project title
     * @param {string} description - Project description
     * @param {string[]} technologies - Array of technologies used
     * @param {string} link - Project link URL
     * @param {number} screenshotCount - Number of screenshots available (will be loaded dynamically)
     */
    constructor(id, title, description, technologies, link = "#", screenshotCount = 3) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.link = link;
        this.screenshotCount = screenshotCount;
        this.baseImagePath = `assets/img/projects/${id}/`;
    }

    /**
     * Get screenshot paths for this project
     * @returns {string[]} Array of image paths
     */
    getScreenshotPaths() {
        const paths = [];
        for (let i = 1; i <= this.screenshotCount; i++) {
            // Format with leading zero: 01.jpg, 02.jpg, etc.
            const formattedNumber = i.toString().padStart(2, '0');
            paths.push(`${this.baseImagePath}${formattedNumber}.jpg`);
        }
        return paths;
    }

    /**
     * Generate HTML for this project
     * @returns {string} HTML string for the project
     */
    generateHTML() {
        const screenshotPaths = this.getScreenshotPaths();
        const techTags = this.technologies.map(tech => 
            `<span class="work__tech-tag" data-tech="${tech.toLowerCase()}">${tech}</span>`
        ).join('');

        // Create HTML for screenshots
        const screenshots = screenshotPaths.map((path, index) => `
            <div class="app-slide">
                <img src="${path}" alt="${this.title} Screenshot ${index + 1}">
            </div>
        `).join('');

        // Create HTML for dots
        const dots = Array.from({ length: this.screenshotCount }, (_, index) => `
            <span class="app-dot${index === 0 ? ' active' : ''}" data-index="${index}"></span>
        `).join('');

        return `
        <div class="work__project" data-project-id="${this.id}">
            <div class="work__img">
                <div class="device-frame">
                    <div class="device-notch"></div>
                    <div class="device-btn"></div>
                    <div class="device-screen">
                        <div class="app-slider" id="${this.id}-slider">
                            <div class="app-slides">
                                ${screenshots}
                            </div>
                            <div class="app-dots">
                                ${dots}
                            </div>
                        </div>
                    </div>
                    <div class="device-home"></div>
                </div>
            </div>
            <div class="work__data">
                <h3 class="work__title">${this.title}</h3>
                <p class="work__description">${this.description}</p>
                <div class="work__tech">
                    ${techTags}
                </div>
                <a href="${this.link}" class="work__button button" data-project="${this.id}">View Project <i class='bx bx-right-arrow-alt'></i></a>
            </div>
        </div>
        `;
    }
}

/**
 * ProjectManager Class - Handles project loading and display
 */
class ProjectManager {
    constructor() {
        this.projects = [];
        this.currentIndex = 0;
    }

    /**
     * Add a project to the manager
     * @param {Project} project - Project to add
     */
    addProject(project) {
        this.projects.push(project);
    }

    /**
     * Initialize with a list of projects
     * @param {Project[]} projects - List of Project objects
     */
    initializeProjects(projects) {
        this.projects = projects;
    }

    /**
     * Render all projects to the container
     * @param {string} containerId - ID of container element
     */
    renderProjects(containerId = 'work-slider') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container element with ID '${containerId}' not found`);
            return;
        }

        // Generate HTML for all projects
        const projectsHTML = this.projects.map(project => project.generateHTML()).join('');
        container.innerHTML = projectsHTML;

        // Apply staggered animation delay to device frames
        const deviceFrames = container.querySelectorAll('.device-frame');
        deviceFrames.forEach((frame, index) => {
            // Add a staggered delay effect (0.2s between each frame)
            frame.style.animationDelay = `${index * 0.2}s`;
        });

        // Generate navigation dots
        this.updateNavigationDots();
        
        console.log(`Rendered ${this.projects.length} projects to container`);
    }

    /**
     * Update navigation dots based on number of projects
     */
    updateNavigationDots() {
        const dotsContainer = document.querySelector('.work__nav-dots');
        if (!dotsContainer) return;

        dotsContainer.innerHTML = this.projects.map((project, index) => `
            <span class="work__nav-dot${index === 0 ? ' active' : ''}" 
                  data-index="${index}" 
                  data-project="${project.id}"></span>
        `).join('');
    }

    /**
     * Initialize slider functionality
     */
    initializeSlider() {
        const slider = document.querySelector('.work__slider');
        const prevBtn = document.getElementById('work-prev');
        const nextBtn = document.getElementById('work-next');
        const dots = document.querySelectorAll('.work__nav-dot');
        
        if (!slider || !prevBtn || !nextBtn || dots.length === 0) {
            console.error('Required slider elements not found');
            return;
        }

        // Update slider position
        const updateSlider = (index) => {
            this.currentIndex = index;
            
            // Move slider
            slider.style.transform = `translateX(-${index * 100}%)`;
            
            // Update active dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            // Update button state
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === this.projects.length - 1;

            // Update project visibility
            const projects = document.querySelectorAll('.work__project');
            projects.forEach((project, i) => {
                project.classList.toggle('active', i === index);
            });
        };
        
        // Initialize buttons
        prevBtn.disabled = true;
        
        // Add event listeners
        nextBtn.addEventListener('click', () => {
            if (this.currentIndex < this.projects.length - 1) {
                updateSlider(this.currentIndex + 1);
            }
        });
        
        prevBtn.addEventListener('click', () => {
            if (this.currentIndex > 0) {
                updateSlider(this.currentIndex - 1);
            }
        });
        
        // Add dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateSlider(index);
            });
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            const workSection = document.getElementById('work');
            if (!workSection) return;
            
            const rect = workSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                if (e.key === 'ArrowRight' && this.currentIndex < this.projects.length - 1) {
                    updateSlider(this.currentIndex + 1);
                } else if (e.key === 'ArrowLeft' && this.currentIndex > 0) {
                    updateSlider(this.currentIndex - 1);
                }
            }
        });
        
        // Initialize slider position
        updateSlider(0);
    }

    /**
     * Initialize app sliders for all projects
     */
    initializeAppSliders() {
        // Initialize all app sliders
        this.projects.forEach(project => {
            const sliderId = `${project.id}-slider`;
            initAppSlider(sliderId);
        });
    }
}

/**
 * App slider initializer function - extracted for reuse
 */
function initAppSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) {
        console.warn(`Slider with ID ${sliderId} not found`);
        return null;
    }
    
    const projectId = sliderId.split('-')[0];
    const slides = slider.querySelector('.app-slides');
    const dots = slider.querySelectorAll('.app-dot');
    let currentIndex = 0;
    let intervalId = null;
    const slideCount = dots.length;
    
    // Initialize slider
    updateSlider(0);
    
    // Start auto-scrolling
    startAutoScroll();
    
    // Add event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoScroll();
            updateSlider(index);
            startAutoScroll();
        });
    });
    
    // Pause auto-scrolling when hovering over slider
    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoScroll();
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoScroll();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left, go to next slide
            goToNextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right, go to previous slide
            goToPrevSlide();
        }
    }
    
    function updateSlider(index) {
        // Store previous index for animation
        const prevIndex = currentIndex;
        
        // Update current index
        currentIndex = index;
        
        // Get all slide elements
        const slideElements = slides.querySelectorAll('.app-slide');
        
        // First remove all animation classes
        slideElements.forEach(slide => {
            slide.classList.remove('active-slide', 'prev-slide');
        });
        
        // Add animation classes
        if (slideElements.length > 0) {
            // Add active class to current slide
            slideElements[currentIndex].classList.add('active-slide');
            
            // Add prev class to previous slide if this isn't the initial load
            if (prevIndex !== currentIndex && prevIndex >= 0 && prevIndex < slideElements.length) {
                slideElements[prevIndex].classList.add('prev-slide');
            }
        }
        
        // Move slider with transform for smooth movement
        slides.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        // Apply subtle parallax effect to the images
        slideElements.forEach((slide, i) => {
            const img = slide.querySelector('img');
            if (img) {
                const distance = i - currentIndex;
                const parallaxOffset = distance * 5; // 5px offset per slide distance
                img.style.transform = `translateX(${parallaxOffset}px) scale(${i === currentIndex ? 1.05 : 1})`;
            }
        });
    }
    
    function goToNextSlide() {
        const nextIndex = (currentIndex + 1) % slideCount;
        updateSlider(nextIndex);
    }
    
    function goToPrevSlide() {
        const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider(prevIndex);
    }
    
    function startAutoScroll() {
        if (!intervalId) {
            intervalId = setInterval(goToNextSlide, 3000);
        }
    }
    
    function stopAutoScroll() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    
    // Return API for potential external control
    return {
        projectId: projectId,
        goToNext: goToNextSlide,
        goToPrev: goToPrevSlide,
        goToSlide: updateSlider,
        startAuto: startAutoScroll,
        stopAuto: stopAutoScroll
    };
}

// Export classes and functions for use in other modules
window.Project = Project;
window.ProjectManager = ProjectManager;
window.initAppSlider = initAppSlider; 