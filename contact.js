document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
      
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;
          
    
          if (!name || !email || !message) {
              event.preventDefault();
              alert('Please fill out all required fields.');
              return;
          }
          
     
          console.log('Form submitted with the following data:');
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Message:', message);
          
         
      });
  }
});