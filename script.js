document.addEventListener('DOMContentLoaded', function() {

  // Elements for menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle the menu visibility on button click
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Course data
  const courses = [
    // Your course data objects
  ];

  /**
   * Create the HTML content for a course.
   * @param {Object} course - Course data object.
   * @returns {HTMLElement} - The course content container.
   */
  function createCourseContent(course) {
    const courseContainer = document.createElement('div');
    courseContainer.classList.add('course');

    const courseHeader = document.createElement('div');
    courseHeader.classList.add('course-header');

    const courseIcon = document.createElement('i');
    courseIcon.className = course.icon;

    const courseTitle = document.createElement('h3');
    courseTitle.textContent = course.title;

    const courseDescription = document.createElement('p');
    courseDescription.textContent = course.description;

    courseHeader.append(courseIcon, courseTitle, courseDescription);
    courseContainer.appendChild(courseHeader);

    const chaptersList = document.createElement('ul');

    course.chapters.forEach(chapter => {
      const chapterItem = document.createElement('li');
      
      // Create chapter title
      const chapterTitle = document.createElement('h4');
      chapterTitle.textContent = chapter.title;

      // Create subpoints list
      const subpointsList = document.createElement('ul');
      chapter.subpoints.forEach(subpoint => {
        const subpointItem = document.createElement('li');
        subpointItem.textContent = subpoint;
        subpointsList.appendChild(subpointItem);
      });

      chapterItem.append(chapterTitle, subpointsList);
      chaptersList.appendChild(chapterItem);
    });

    courseContainer.appendChild(chaptersList);
    return courseContainer;
  }

  /**
   * Render all courses into the courses container.
   */
  function renderCourses() {
    const coursesContainer = document.querySelector('.courses-container');
    if (coursesContainer) {
      courses.forEach(course => {
        const courseContent = createCourseContent(course);
        coursesContainer.appendChild(courseContent);
      });
    }
  }

  // Initialize rendering of courses
  renderCourses();

  // Dropdown menu functionality for mobile
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    toggle.addEventListener('click', function(event) {
      event.preventDefault();
      const isOpen = menu.classList.contains('show');
      menu.classList.toggle('show', !isOpen);
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown')) {
      dropdowns.forEach(dropdown => {
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
      });
    }
  });
});
