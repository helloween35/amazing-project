export default class Common {
	getContainer() {
		return document.getElementById("content");
	}

	renderElement(selector, html) {
		const elements = this.getContainer().getElementsByClassName(selector + "-container");
		if (elements) {
			elements[0].innerHTML = html;
		}
	}
}