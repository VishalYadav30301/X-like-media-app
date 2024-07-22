function renderError(msg){
	document.getElementById('signup-error').innerHTML = msg;
}
function submitHandler(e){

	e.preventDefault();
	const username = document.getElementById('signup-username').value;
	const password = document.getElementById('signup-password').value;
	const confirm_password = document.getElementById('signup-confirm-password').value;
	console.log(username,password,confirm_password);

	if (password != confirm_password){
		// we show error
		renderError('passwords do not match. Please try again');
	}else{
		// continue
		renderError('');

		let authData = JSON.parse(localStorage.getItem('auth')) || [];
		let userFound = false;
		// check if user already signed up
		for (const userObj of authData){
			if (userObj.username  === username){
				// show error
				userFound = true;
				document.getElementById('signup-error').innerHTML = 'user already exists. please login instead'
			}
		}
		// allow to sign up
		if(!userFound){
			const userDetails = {
				"username" : username,
				"password": password
			}
			authData.push(userDetails);
			localStorage.setItem('auth',JSON.stringify(authData));
			location.href = 'login.html';
		}

	}


}
document.getElementById('signup-form-container-id').addEventListener("submit", (e) => submitHandler(e));