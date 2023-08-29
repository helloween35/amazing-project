import Common from '../common.js';

export default class LoginForm {

	constructor() {
		this.common = new Common;
		this.render();
		this.init();
	}

	render() {
		const html = `
		<div class="row">
			<form id="loginForm">
				<div class="col mb-2">
					<label>Név: </label>
					<input type="text" class="form-control" placeholder="First name" aria-label="First name">
				</div>
				<div class="col">
					<label>Jelszó: </label>
					<input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
				</div>
				<div class="col mt-3">
					<button class="btn btn-primary">Belépek, baszod!</button>
				</div>
			</form>
		</div>`;

		this.common.getContainer().getElementsByClassName("form-container")[0].innerHTML = html;
	}

	init() {
		const userLogin = new Event("userLogin");
		const loginForm = document.getElementById("loginForm");

		if(loginForm) {
			loginForm.addEventListener("submit", event => {
				event.preventDefault();

				// if jelszó egyezik!?

				loginForm.dispatchEvent(userLogin);
			});
		}
	}
}