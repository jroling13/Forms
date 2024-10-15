// JavaScript code for form validation

document.addEventListener('DOMContentLoaded', function() {
 let form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
      // Prevent the form from submitting
      event.preventDefault();

      // Retrieve the input field value
      let inputField = document.getElementById('inputField').value;

      // Regular expression pattern for alphanumeric input
      let alphanumeric = /^[a-z0-9]+$/i;

      // Check if the input value matches the pattern
      if (alphanumeric.test(inputField)) {
          // Valid input: display confirmation and submit the form
          alert('Input is valid. Form submitted');

      } else {
          // Invalid input: display error message
          alert('Error: Input must be alphanumeric.');
      }
  });
});