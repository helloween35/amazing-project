import Header from './modules/Header.js';
import LoginForm from './modules/LoginForm.js';

export default class Main {
	constructor() {
		this.header 	= new Header();
		this.loginForm  = new LoginForm();
	}
}

const main = new Main();