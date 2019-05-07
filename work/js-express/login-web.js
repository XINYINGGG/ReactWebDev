const loginWeb = {
	loginPage: function() {
		return `
			<!DOCTYPE html>
			<html>
			<head>
				<link rel="stylesheet" type="text/css" href="/login-web.css">
				<title>Login Page</title>
			</head>
			<body>
				<img src="login.png">
				<div class="login">
					<form action="/login" method="POST">
						<input class="to-login" name="username" placeholder="Enter your username">
						<button type="Login" class="loginButton">Login</button>
					</form>
				</div>
			</body>
			</html>
		`;
	}
};

module.exports = loginWeb;