const form = document.querySelector('form');
const response = document.querySelector('.response');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	// Perform login validation here
	if (email === 'example@example.com' && password === 'password') {
		response.innerHTML = 'Login successful!';
		response.classList.remove('error');
		response.classList.add('success');
		response.style.display = 'block';
	} else {
		response.innerHTML = 'Invalid email or password';
		response.classList.remove('success');
		response.classList.add('error');
		response.style.display = 'block';
	}
});
