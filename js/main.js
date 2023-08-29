import Header from './modules/Header.js';
import LoginForm from './modules/LoginForm.js';

export default class Main {
	constructor() {
		// Ilyet élesben nem tárolunk benne, tom'
		localStorage.setItem("nickname", "abc");
		localStorage.setItem("password", "123");

		this.header 	= new Header();
		this.loginForm  = new LoginForm();
	}
}

const main = new Main();