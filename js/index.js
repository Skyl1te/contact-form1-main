const form = document.getElementById('form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const firstName = document.getElementById('firstName').value.trim();
	const lastName = document.getElementById('lastName').value.trim();
	const emailAddress = document.getElementById('email').value.trim();
	const queryType = document.querySelector('input[name="queryType"]:checked');
	const message = document.getElementById('message').value.trim();
	const consent = document.getElementById('consent').checked;

	const formAlert = document.querySelectorAll('.form-item__alert');

	let isValid = true;

	// firstName validation
	if (firstName === '') {
		isValid = false;
		document.querySelector('#firstName + .form-item__alert').style.display = 'block';
		document.querySelector('#firstName').style.border = '0.1rem solid red';
	} else {
		document.querySelector('#firstName + .form-item__alert').style.display = 'none';
		document.querySelector('#firstName').style.border = '1px solid hsl(186, 15%, 59%)';
	}

	// lastName validation
	if (lastName === '') {
		isValid = false;
		document.querySelector('#lastName + .form-item__alert').style.display = 'block';
		document.querySelector('#lastName').style.border = '0.1rem solid red';
	} else {
		document.querySelector('#lastName + .form-item__alert').style.display = 'none';
		document.querySelector('#lastName').style.border = '1px solid hsl(186, 15%, 59%)';
	}

	// email validation
	if (!isValidEmail(emailAddress)) {
		isValid = false;
		document.querySelector('#email + .form-item__alert').style.display = 'block';
		document.querySelector('#email').style.border = '0.1rem solid red';
	} else {
		document.querySelector('#email + .form-item__alert').style.display = 'none';
		document.querySelector('#email').style.border = '1px solid hsl(186, 15%, 59%)'
	}

	// queryType validation
	if (!queryType) {
		isValid = false
		document.querySelector('.radio-option ~ .form-item__alert').style.display = 'block';	
	} else {
		document.querySelector('.radio-option ~ .form-item__alert').style.display = 'none';	
	}

	if (message === '') {
		isValid = false
		document.querySelector('#message ~ .form-item__alert').style.display = 'block'
		document.querySelector('#message').style.border = '0.1rem solid red';
	} else {
		document.querySelector('#message ~ .form-item__alert').style.display = 'none'
		document.querySelector('#message').style.border = '1px solid hsl(186, 15%, 59%)'
	}

	// consent validation
	if (!consent) {
		isValid = false
		document.querySelector('#consent ~ .form-item__alert').style.display = 'block'
	} else {
		document.querySelector('#consent ~ .form-item__alert').style.display = 'none'
	}

	if (isValid) {
		document.getElementById('success-message').style.display = 'block'
		setTimeout(()=>{
			form.reset()
			document.getElementById('success-message').style.display = 'none'
		}, 1500)
	}

})

// Email validation function 
function isValidEmail(email) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	return regex.test(email);
}
