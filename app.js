document.getElementById('name').addEventListener('blur', validate_name);
document.getElementById('zip').addEventListener('blur', validate_zip);
document.getElementById('email').addEventListener('blur', validate_email);
document.getElementById('phone').addEventListener('blur', validate_phone);

function validate_name(){
	const name = document.getElementById('name');
	const re = /^[a-zA-Z]{2,10}$/;
	if(!re.test(name.value)){
		name.classList.add('is-invalid');
	}else{
		name.classList.remove('is-invalid');
	}
}

function validate_zip(){
	const zip = document.getElementById('zip');
	const re = /^[1-9][0-9]{5}$/;
	if(!re.test(zip.value)){
		zip.classList.add('is-invalid');
	}else{
		zip.classList.remove('is-invalid');
	}
}

function validate_email(){
	const email = document.getElementById('email');
	const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if(!re.test(email.value)){
		email.classList.add('is-invalid');
	}else{
		email.classList.remove('is-invalid');
	}
}

function validate_phone(){
	const phone = document.getElementById('phone');
	const re = /^((\+){1}91){1}[1-9]{1}[0-9]{9}$/;
	if(!re.test(phone.value)){
		phone.classList.add('is-invalid');
	}else{
		phone.classList.remove('is-invalid');
	}
}