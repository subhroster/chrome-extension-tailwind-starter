document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const actionButton = document.getElementById('actionButton');

    actionButton.addEventListener('click', function() {
        messageElement.textContent = 'Button clicked! This is a dynamic message.';
        messageElement.classList.remove('hidden');
        actionButton.classList.add('bg-green-500');
        actionButton.textContent = 'Success!';
    });
});
