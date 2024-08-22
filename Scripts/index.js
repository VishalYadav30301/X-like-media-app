function renderError(msg){
	document.getElementById('login-error').innerHTML = msg;
}

function loginHandler(e){
	e.preventDefault();
	const username = document.getElementById('login-username').value;
	const password = document.getElementById('login-password').value;
	console.log(username,password);

	// check whether this user is already registered or not
	const authData = JSON.parse(localStorage.getItem('auth')) || [];
	let userFound = false;
	let user_pass_from_auth = '';
	for (userObj of authData){
		if (userObj.username === username){
			userFound = true;
			user_pass_from_auth = userObj.password;
		}
	}
	if(!userFound){
		renderError('user not found. Please register');
		return;
	}
	renderError('');
	// user has signed up! , validate the password
	if( password != user_pass_from_auth){
		renderError('incorrect username or password');
		return;
	}
	renderError('');
	// user exists and password is valid, so we redirect to home.html
	location.href = 'home.html';
}

document.getElementById('form-container-id').addEventListener("submit", (e) => {
	loginHandler(e);
}

)
