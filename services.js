document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointment-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
          
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            // Check if required fields are filled
            if (!fullName || !email || !phone || !service || !date || !time) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
          
            // Date validation (must be today or in the future)
            const selectedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                alert('Please select a date from today onwards', 'error');
                return;
            }
            
            
            alert('Appointment booked successfully! We will contact you shortly to confirm.', 'success');
            form.reset();
        });
    }
    
   
});