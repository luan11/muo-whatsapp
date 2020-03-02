export default class DateBuilder {

	/**
	 * Creates an instance of DateBuilder.
	 * @param {object} translations
	 * @param {string} lang
	 * @memberof DateBuilder
	 */
	constructor(translations, lang) {
		this._date = new Date();
		this.translations = translations;		
		this.lang = lang;
	}
	
	/**
	 * Get formatted date.
	 *
	 * @returns {string}
	 * @memberof DateBuilder
	 */
	getFormattedDate() {
		return `${ this._date.getDate() } ${ this.translations[this.lang][this._date.getMonth()] } ${ this._date.getFullYear() }`;
	}

}