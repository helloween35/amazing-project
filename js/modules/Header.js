import Common from '../common.js';

export default class Header {

	constructor() {
		this.common = new Common;
		this.loggedIn = false; 

		this.render();
		this.init();
	}

	init() {
		addEventListener("DOMContentLoaded", () => {
			const loginForm = document.getElementById("loginForm");
			if(loginForm) {			
				loginForm.addEventListener("userLogin", event => {
				 	this.loggedIn = true;

				 	this.render();
				}, false);
			} 
		});
	}

	render() {
		let html = `<nav class="navbar navbar-light bg-light d-flex justify-content-end mb-5">
			<div class="container">
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-primary" type="submit">Search</button>
				</form>`
				if(this.loggedIn) {
					html += `	
					<div id="profile">
						<span class="text-success">Beléptél</span>
					</div>`;
				}
			
			html += `</div>
		</nav>`;

		this.common.getContainer().getElementsByClassName("header-container")[0].innerHTML = html;
	}


}