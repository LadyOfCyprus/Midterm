// JS Feature 1 & 2: Button Click Event & Dynamic Content Display
const viewMoreBtn = document.getElementById('viewMoreBtn');
const extraAbout = document.getElementById('extra-about');

if (viewMoreBtn && extraAbout) {
  viewMoreBtn.addEventListener('click', () => {
    if (extraAbout.style.display === 'none') {
      extraAbout.style.display = 'block'; 
      viewMoreBtn.textContent = 'Read Less'; 
    } else {
      extraAbout.style.display = 'none'; 
      viewMoreBtn.textContent = 'Read More'; 
    }
  });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading on submit

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all the fields.');
    } else {
      const formMessage = document.getElementById('formMessage');
      formMessage.style.display = 'block';
      
      contactForm.reset();
      
  
      setTimeout(() => {
          formMessage.style.display = 'none';
      }, 3000);
    }
  });
}

const toggleCertBtn = document.getElementById('toggleCertBtn');
const hiddenCerts = document.getElementById('hidden-certs');

if (toggleCertBtn && hiddenCerts) {
  toggleCertBtn.addEventListener('click', () => {

    if (hiddenCerts.style.display === 'none') {
      hiddenCerts.style.display = 'block';
      toggleCertBtn.textContent = 'Hide Extra Certifications ▲'; 
      toggleCertBtn.style.backgroundColor = '#ec7c7c';
      toggleCertBtn.style.color = '#fff';
    } 
    else {
      hiddenCerts.style.display = 'none';
      toggleCertBtn.textContent = 'Show Extra Certifications ▼'; 
      toggleCertBtn.style.backgroundColor = 'transparent'; 
      toggleCertBtn.style.color = '#fff';
    }
  });
}