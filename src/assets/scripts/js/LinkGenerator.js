export default class LinkGenerator {

	/**
	 * Creates an instance of LinkGenerator.
	 * @param {string} countryCode
	 * @param {string} phoneNumber
	 * @param {string} message
	 * @param {boolean} [openUrl=true]
	 * @memberof LinkGenerator
	 */
	constructor(countryCode, phoneNumber, message, openUrl = true) {
		this.params = {
			phone: countryCode.toString() + phoneNumber.toString(),
			text: message,
		};

		this.build();
		if(openUrl) this.open();
	}

	/**
	 * Build a WhatsApp API url.
	 *
	 * @memberof LinkGenerator
	 */
	build() {
		this.url = `https://wa.me/${ this.params.phone }?text=${ encodeURIComponent(this.params.text) }`;
	}

	/**
	 * Open the builded WhatsApp API url.
	 *
	 * @memberof LinkGenerator
	 */
	open() {
		window.open(this.url, '_blank');
	}

	/**
	 * Get the builded WhatsApp API url.
	 *
	 * @returns {string}
	 * @memberof LinkGenerator
	 */
	getUrl() {
		return this.url;
	}
}