// Doctor data by department
const doctors = {
  dermatology: [
      {
          name: "Dr. Sheena Singh",
          position: "Senior Dermatologist",
          image: "singh.png"
      },
      {
          name: "Dr. Mohan Shrestha",
          position: "Cosmetic Dermatologist",
          image: "shrestha.jpg"
      }
  ],
  cardiology: [
      {
          name: "Dr. Rama Ali",
          position: "Interventional Cardiologist",
          image: "ali.jpg"
      },
      {
          name: "Dr. James Ganesh",
          position: "Cardiac Surgeon",
          image: "ganesh.jpg"
      }
  ],
  gynaecology: [
      {
          name: "Dr. Hridaya Bhattarai",
          position: "Gynecologist & Obstetrician",
          image: "bhattarai.jpg"
      },
      {
          name: "Dr. Lily Rai",
          position: "Reproductive Endocrinologist",
          image: "rai.jpg"
      }
  ],
  ent: [
      {
          name: "Dr. Rohili Yadav",
          position: "ENT Specialist",
          image: "yadav.jpg"
      },
      {
          name: "Dr. Raviraj Nepal",
          position: "Head & Neck Surgeon",
          image: "nepal.jpg"
      }
  ]
};

// DOM elements
const departmentBoxes = document.querySelectorAll('.department');
const doctorsContainer = document.getElementById('doctorsContainer');


departmentBoxes.forEach(box => {
  box.addEventListener('click', function() {
      // Remove active class from all boxes
      departmentBoxes.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked box
      this.classList.add('active');
      
      // Get department name from data attribute
      const department = this.getAttribute('data-department');
      
      // Display doctors for the selected department
      displayDoctors(department);
  });
});

// Function to display doctors for selected department
function displayDoctors(department) {
  // Clear previous content
  doctorsContainer.innerHTML = '';
  
  // Get doctors for the selected department
  const departmentDoctors = doctors[department];
  
  // Create doctor cards
  departmentDoctors.forEach(doctor => {
      const doctorCard = document.createElement('div');
      doctorCard.className = 'doctor-card';
      
      doctorCard.innerHTML = `
          <div class="doctor-image">
              <img src="${doctor.image}" alt="${doctor.name}">
          </div>
          <div class="doctor-info">
              <h3>${doctor.name}</h3>
              <p>${doctor.position}</p>
          </div>
      `;
      
      doctorsContainer.appendChild(doctorCard);
  });
}



 
