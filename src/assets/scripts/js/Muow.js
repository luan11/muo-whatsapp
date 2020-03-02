import DateBuilder from './DateBuilder';
import LinkGenerator from './LinkGenerator';

export default class Muow {

	/**
	 * Creates an instance of Muow.
	 * @param {object} [properties={}]
	 * @memberof Muow
	 */
	constructor(properties = {}) {
		this.properties = {
			...{
				showChat: true,
				phone: '+55 (11) 90000-0000',
				defaultMessage: 'Hello, how are you?',
				profile: {
					picture: 'https://picsum.photos/32',
					name: 'Message us on WhatsApp',
				},
				messageFieldPlaceholder: 'Type your message...',
				playNotificationSound: false,
				lang: 'en-US',
				translations: {
					'en-US': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					'pt-BR': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
				}
			},
			...properties
		};

		this.sanitizeProperties();

		this._buildedDate = new DateBuilder(this.properties.translations, this.properties.lang);
		this._el = null;
		this._styles = document.head.querySelectorAll('link[rel="stylesheet"]');
		this._css = `.muow{position:fixed;z-index:999;right:32px;bottom:32px}.muow *{font-family:'Open Sans',sans-serif;outline:0}.muow button{cursor:pointer;padding:0}.muow-chat{transition:transform .2s ease-in-out .3s,opacity .2s ease-in-out;opacity:0;transform:scale(0);position:absolute;bottom:56px;right:0;background-color:#ECE5DD;width:300px;height:150px;border-radius:8px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;-webkit-animation:softdown .3s linear;animation:softdown .3s linear}.muow-chat.open{transition:opacity .3s ease-in-out .1s;opacity:1;transform:scale(1);-webkit-animation:softup .4s linear;animation:softup .4s linear}.muow-chat::after{content:'';position:absolute;width:32px;height:32px;transform:rotate(45deg);background:#ECE5DD;right:30px;bottom:-12px}.muow-chat>#muow-close{transition:z-index .3s ease-in-out .3s,transform .3s ease-in-out,opacity .3s ease-in-out;position:absolute;height:24px;width:24px;border:0;right:16px;top:-12px;background-color:#FFF;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.45)}.muow-chat>#muow-close:hover{transition:all .35s ease-in-out 0s;box-shadow:0 2px 8px rgba(0,0,0,.75)}.muow-chat>.header{border-top-left-radius:8px;border-top-right-radius:8px;background-color:#075E54;padding:6px 0;display:flex;align-items:center;justify-content:flex-start;width:100%}.muow-chat>.header .profile-picture{border-radius:50%;width:32px;height:32px;margin-left:12px}.muow-chat>.header .profile-name{margin:0 12px 0 10px;color:#FFF;font-weight:600;line-height:19px;font-size:14px}.muow-chat>.date{background-color:#dbf2fd;color:#34B7F1;text-transform:uppercase;padding:2px 8px;border-radius:4px;font-weight:600;font-size:10px;display:block;margin:8px auto 0;box-shadow:0 1px 4px rgba(0,0,0,.1)}.muow-chat>.main{z-index:1;width:100%;margin:auto 0 18px;display:flex;position:relative}.muow-chat>.main>.muow-control{margin:0 10px}.muow-chat>.main>#muow-send{transition:all .3s ease-in-out 0s;width:42px;height:42px;background-color:#075E54;border:0;border-radius:50%;display:block;position:absolute;right:10px;top:0;bottom:0;margin:auto 0}.muow-chat>.main>#muow-send:focus,.muow-chat>.main>#muow-send:hover{background-color:#128C7E}.muow-control{border:0;height:35px;border-radius:17.5px;padding:0 15px;font-size:12.5px;line-height:16px;color:#000;width:100%;box-shadow:0 2px 4px rgba(0,0,0,.15)}.muow-control::-webkit-input-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control::-moz-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control:-ms-input-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control::-ms-input-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control::placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control:focus::-webkit-input-placeholder{color:#FFF}.muow-control:focus::-moz-placeholder{color:#FFF}.muow-control:focus:-ms-input-placeholder{color:#FFF}.muow-control:focus::-ms-input-placeholder{color:#FFF}.muow-control:focus::placeholder{color:#FFF}.muow-icon{transition:all .3s ease-in-out 0s;display:block;margin:auto}.muow #muow-trigger{position:absolute;right:22px;bottom:0;transition:all .3s ease-in-out 0s;width:48px;height:48px;border:0;display:block;background-color:#25D366;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.4)}.muow #muow-trigger:hover{background-color:#3D9D61;box-shadow:0 2px 4px rgba(0,0,0,.65)}.muow #muow-trigger.active{background-color:#368A56;box-shadow:0 0 8px rgba(0,0,0,.75)}.muow #muow-trigger.active>.muow-icon{transform:scale(.83)}@-webkit-keyframes softup{0%{transform:translateY(30%) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(0) scale(1)}}@keyframes softup{0%{transform:translateY(30%) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(0) scale(1)}}@-webkit-keyframes softdown{0%{transform:translateY(0) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(30%) scale(1)}}@keyframes softdown{0%{transform:translateY(0) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(30%) scale(1)}}@media screen and (min-width:991px){.muow-chat>#muow-close{opacity:0;transform:translateX(100%);z-index:-1}.muow-chat:hover>#muow-close{transition:all .35s ease-in-out 0s;z-index:0;opacity:1;transform:translateX(0)}}@media screen and (max-width:480px){.muow{right:16px;bottom:28px}}@media screen and (max-width:320px){.muow{right:10px}}`;
		this._assets = {
			icons: {
				whatsapp: '<svg class="muow-icon" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.991.428C6.194.8.041 7.293.065 15.1a14.578 14.578 0 001.593 6.605L.104 29.25a.57.57 0 00.69.67l7.394-1.752c1.9.946 4.033 1.493 6.292 1.527 7.97.122 14.614-6.206 14.863-14.173C29.609 6.982 22.56.02 13.99.428zm8.824 22.733a11.39 11.39 0 01-8.108 3.358c-1.793 0-3.51-.402-5.103-1.195l-1.03-.513-4.533 1.074.954-4.633-.507-.993a11.337 11.337 0 01-1.246-5.205A11.39 11.39 0 016.6 6.947a11.486 11.486 0 018.108-3.358 11.39 11.39 0 018.107 3.358 11.39 11.39 0 013.358 8.107c0 3.035-1.212 5.961-3.358 8.107z" fill="#fff"/><path d="M21.814 18.23l-2.837-.815a1.057 1.057 0 00-1.046.276l-.693.706a1.033 1.033 0 01-1.124.238c-1.341-.544-4.164-3.053-4.885-4.308a1.033 1.033 0 01.082-1.145l.606-.784c.237-.307.287-.719.13-1.074l-1.193-2.699a1.058 1.058 0 00-1.652-.378c-.791.67-1.73 1.687-1.845 2.814-.201 1.988.651 4.493 3.874 7.5 3.723 3.476 6.705 3.935 8.646 3.465 1.101-.267 1.981-1.336 2.537-2.212.378-.597.08-1.39-.6-1.584z" fill="#fff"/></svg>',
				send: '<svg class="muow-icon" width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 15.429l18-7.715L0 0v6l12.857 1.714L0 9.43v6z" fill="#fff"/></svg>',
				close: '<svg class="muow-icon" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M7.1 6.009l4.672-4.673a.777.777 0 10-1.1-1.099L6 4.91 1.327.237a.777.777 0 10-1.099 1.1l4.673 4.672-4.673 4.673a.776.776 0 101.1 1.099L6 7.108l4.673 4.673a.775.775 0 001.099 0 .777.777 0 000-1.1L7.099 6.01z" fill="#C52626"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>',
			},
			audio: {
				notification: 'https://raw.githubusercontent.com/luan11/muo-whatsapp/master/dist/assets/audio/notification.mp3',
			}
		};
		this._notificationEl = (this.properties.playNotificationSound) ? new Audio(this._assets.audio.notification) : null;
		this._template = document.createElement('div');
		this._template.classList.add('muow');
		this._template.innerHTML = (this.properties.showChat) ? `<div class="muow-chat"> <button id="muow-close"> ${ this._assets.icons.close } </button> <div class="header"> <img src="${ this.properties.profile.picture }" alt="Profile Picture" class="profile-picture"> <h4 class="profile-name" title="${ this.properties.profile._name }">${ this.properties.profile.name }</h4> </div> <span class="date">${ this._buildedDate.getFormattedDate() }</span> <div class="main"> <input type="text" id="muow-message" class="muow-control" placeholder="${ this.properties.messageFieldPlaceholder }"> <button id="muow-send"> ${ this._assets.icons.send } </button> </div> </div> <button id="muow-trigger"> ${ this._assets.icons.whatsapp } </button>` : `<button id="muow-trigger"> <img src="${ this._assets.icons.whatsapp }" alt="WhatsApp Icon" class="muow-icon"> </button>`;

		this.build();
		this.listen();
	}

	/**
	 * Sanitize the properties.
	 *
	 * @memberof Muow
	 */
	sanitizeProperties() {
		this.properties.phone = this.properties.phone.replace(/\D+/g, '');
		this.properties.profile._name = this.properties.profile.name;
		this.properties.profile.name = (this.properties.profile.name.length > 21) ? this.properties.profile.name.substr(0, 21) + '...' : this.properties.profile.name;
	}

	/**
	 * Build Muow HTML and Style (if necessary).
	 *
	 * @memberof Muow
	 */
	build() {
		let hasMuowStyle = false;

		this._styles.forEach(style => {
			if(style.getAttribute('href').indexOf('muow.css') !== -1) hasMuowStyle = true;
		});

		if(!hasMuowStyle) {
			let styleEl = document.createElement('style');
			styleEl.innerHTML = this._css;
			document.head.appendChild(styleEl);
		}
		
		document.body.appendChild(this._template);
		this._el = document.querySelector('.muow');
	}
	
	/**
	 * Listen all events of Muow to do.
	 *
	 * @memberof Muow
	 */
	listen() {
		const trigger = this._el.querySelector('#muow-trigger');

		if(this._el.querySelector('.muow-chat')) {
			const chat = this._el.querySelector('.muow-chat');
			const close = this._el.querySelector('#muow-close');
			const message = chat.querySelector('#muow-message');
			const send = chat.querySelector('#muow-send');

			trigger.onclick = (e) => {
				e.stopPropagation();

				if(trigger.getAttribute('class') && trigger.getAttribute('class').indexOf('active') !== -1) {
					chat.classList.remove('open');
					message.value = '';
					trigger.classList.remove('active');
				} else {	
					if(this.properties.playNotificationSound) this._notificationEl.play();

					trigger.classList.add('active');
					chat.classList.add('open');
				}
			};

			chat.onclick = (e) => {
				e.stopPropagation();
			};

			send.onclick = () => {
				if(message.value != '') {
					new LinkGenerator(this.properties.phone, message.value);

					chat.classList.remove('open');
					message.value = '';
					trigger.classList.remove('active');
				} else {
					message.focus();
				}
			};

			close.onclick = () => {
				chat.classList.remove('open');
				message.value = '';
				trigger.classList.remove('active');
			};

			document.body.onclick = () => {
				chat.classList.remove('open');
				message.value = '';
				trigger.classList.remove('active');
			};
		} else {
			trigger.onclick = () => {
				new LinkGenerator(this.properties.phone, this.properties.defaultMessage);
			};
		}
	}

}