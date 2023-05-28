const form = document.querySelector('form');
const response = document.querySelector('.response');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	// Perform registration validation here
	if (name && email && password) {
		response.innerHTML = 'Registration successful!';
		response.classList.remove('error');
		response.classList.add('success');
		response.style.display = 'block';
	} else {
		response.innerHTML = 'Please fill in all fields';
		response.classList.remove('success');
		response.classList.add('error');
		response.style.display = 'block';
	}
});
