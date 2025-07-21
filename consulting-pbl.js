document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('consulting-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const data = {
        name: form.elements['name'].value.trim(),
        email: form.elements['email'].value.trim(),
        organization: form.elements['organization'].value.trim(),
        consultingNeeds: form.elements['consultingNeeds'].value.trim()
      };
      if (!data.name || !data.email || !data.organization || !data.consultingNeeds) {
        displayMessage('Please fill in all fields.', false);
        return;
      }
      displayMessage('Thank you! Your information has been submitted for PBL consulting.', true);
      form.reset();
    });
  }
});
function displayMessage(message, success) {
  let msgContainer = document.getElementById('msg');
  if (!msgContainer) {
    msgContainer = document.createElement('div');
    msgContainer.id = 'msg';
    document.getElementById('consulting-form').appendChild(msgContainer);
  }
  msgContainer.className = success ? 'success-message' : 'error-message';
  msgContainer.textContent = message;
}
