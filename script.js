document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;

    const contactList = document.getElementById('contactList');
    const li = document.createElement('li');
    li.textContent = `${name} (${email})`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        contactList.removeChild(li);
    });

    li.appendChild(deleteButton);
    contactList.appendChild(li);

    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
});
