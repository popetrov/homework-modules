const password = document.querySelector('.password');
password.addEventListener('input', () => {
	const passwordStrength = document.querySelector('.passwordStrength');
	const strength = passwordMeter.check(password.value).complexity;
	if (password.value.length !== 0) {
		passwordStrength.textContent = `Сложность пароля ${strength} из 5`;
	}
});
