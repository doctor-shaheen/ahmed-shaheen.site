document.addEventListener('DOMContentLoaded', function() {
  // Course data
  const courses = [
    {
      id: 1,
      title: 'Course 1: R Programming and Data Analysis Fundamentals',
      description: 'A comprehensive introduction to R and fundamental data analysis techniques.',
      icon: 'fas fa-code',
      chapters: [
        { title: 'R Basics: Exploring COVID-19 Data', subpoints: ['R fundamentals and data types', 'Basic operations and functions', 'Control structures and vectorization'] },
        { title: 'Data Visualization with ggplot2', subpoints: ['Understanding ggplot2 layers', 'Creating various plot types', 'Customizing visualizations'] },
        // ... more chapters
      ]
    },
    {
      id: 2,
      title: 'Course 2: Regression Analysis and Mathematical Modeling',
      description: 'Advanced techniques in regression analysis and mathematical modeling for research.',
      icon: 'fas fa-chart-line',
      chapters: [
        // ... chapter data
      ]
    },
    // ... more course data
  ];

  // Enrollment options data
  const enrollmentOptions = [
    { 
      title: 'Course 1: R Programming and Data Analysis Fundamentals',
      description: 'A comprehensive introduction to R and fundamental data analysis techniques.',
      price: 50,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfJyEHNJGIstRzPvrrJttxIEE9AxFpAhn-55I02ePn6mEI8lQ/viewform?usp=sf_link' 
    },
    { 
      title: 'Course 2: Regression Analysis and Mathematical Modeling',
      description: 'Advanced techniques in regression analysis and mathematical modeling for research.',
      price: 50,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSfJyEHNJGIstRzPvrrJttxIEE9AxFpAhn-55I02ePn6mEI8lQ/viewform?usp=sf_link' 
    },
    // ... more enrollment option data
  ];

  // Get references to the DOM elements
  const chapterGrid = document.querySelector('.chapter-grid');
  const enrollmentOptionsContainer = document.getElementById('enrollment-options');
  const testimonialForm = document.getElementById('testimonial-form');
  const testimonialGrid = document.getElementById('testimonial-grid');
  const adminLoginBtn = document.getElementById('admin-login-btn');
  const adminLoginForm = document.getElementById('admin-login-form');
  const adminSubmit = document.getElementById('admin-submit');
  const adminPassword = document.getElementById('admin-password');

  // Admin login state
  let isAdminLoggedIn = false;

  // Function to create course cards
  function createCourseCard(course) {
    const card = document.createElement('div');
    card.classList.add('chapter'); 
    card.innerHTML = `
      <h3><i class="${course.icon}"></i> ${course.title}</h3>
      <p>${course.description}</p>
      <ul>${course.chapters.map(chapter => `
        <li>
          <strong>${chapter.title}</strong>
          <ul>
            ${chapter.subpoints.map(subpoint => `<li>${subpoint}</li>`).join('')}
          </ul>
        </li>
      `).join('')}</ul>
    `;
    return card;
  }

  // Function to create enrollment option cards
  function createEnrollmentOption(option) {
    const div = document.createElement('div');
    div.classList.add('enrollment-option');
    div.innerHTML = `
      <h3>${option.title}</h3>
      <p class="description">${option.description}</p>
      <div class="payment-buttons">
        <a href="${option.link}" class="cta-button">Enroll Now - $${option.price}</a>
      </div>
    `;
    return div;
  }

  // Load courses
  courses.forEach(course => {
    const courseCard = createCourseCard(course);
    chapterGrid.appendChild(courseCard);
  });

  // Load enrollment options
  enrollmentOptions.forEach(option => {
    const optionCard = createEnrollmentOption(option);
    enrollmentOptionsContainer.appendChild(optionCard);
  });

  // Testimonials Functionality
  testimonialForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    addTestimonial(name, review, rating);
    saveTestimonials();
    testimonialForm.reset();
  });

  function addTestimonial(name, review, rating, id = Date.now()) {
    const testimonial = document.createElement('div');
    testimonial.className = 'testimonial-item';
    testimonial.dataset.id = id; 
    testimonial.innerHTML = `
      <h4>${name}