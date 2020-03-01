import LinkGenerator from './LinkGenerator';

export default class Muow {
	
	/**
	 * Creates an instance of Muow.
	 * @param {object} properties
	 * @memberof Muow
	 */
	constructor(properties) {
		this.properties = {
			...{
				chat: true,
				phone: {
					countryCode: '55',
					number: '11900000000',
				},
				profilePicture: 'https://www.placehold.it/28x28',
				profileName: 'Name',
				messageFieldPlaceholder: 'Type your message...',
				defaultMessage: 'Hi, ',
				icons: {
					whatsapp: 'assets/images/whatsapp-icon-muow.svg',
					close: 'assets/images/close-muow.svg',
					send: 'assets/images/send-muow.svg',
				},
				notificationSound: 'assets/audio/notification.mp3',
				playNotificationSound: false,
			},
			...properties
		};
		this._el = null;
		this._styles = document.head.querySelectorAll('link[rel="stylesheet"]');
		this._css = `.muow{position:fixed;z-index:999;right:32px;bottom:32px}.muow *{font-family:'Open Sans',sans-serif;outline:0}.muow button{cursor:pointer;padding:0}.muow-chat{transition:transform .2s ease-in-out .3s,opacity .2s ease-in-out;opacity:0;transform:scale(0);position:absolute;bottom:56px;right:0;background-color:#ECE5DD;width:300px;height:150px;border-radius:8px;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;-webkit-animation:softdown .3s linear;animation:softdown .3s linear}.muow-chat.open{transition:opacity .3s ease-in-out .1s;opacity:1;transform:scale(1);-webkit-animation:softup .4s linear;animation:softup .4s linear}.muow-chat::after{content:'';position:absolute;width:32px;height:32px;transform:rotate(45deg);background:#ECE5DD;right:30px;bottom:-12px}.muow-chat #muow-close{transition:z-index .3s ease-in-out .3s,transform .3s ease-in-out,opacity .3s ease-in-out;position:absolute;height:24px;width:24px;border:0;right:16px;top:-12px;background-color:#FFF;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.45)}.muow-chat #muow-close>img{width:12px;height:12px}.muow-chat #muow-close:hover{transition:all .35s ease-in-out 0s;box-shadow:0 2px 8px rgba(0,0,0,.75)}.muow-chat .header{border-top-left-radius:8px;border-top-right-radius:8px;background-color:#075E54;padding:6px 0;display:flex;align-items:center;justify-content:flex-start;width:100%}.muow-chat .header .profile-picture{border-radius:50%;width:28px;height:28px;margin-left:12px}.muow-chat .header .profile-name{margin:0 12px 0 10px;color:#FFF;font-weight:600;line-height:19px;font-size:14px}.muow-chat .main{z-index:1;width:100%;margin:auto 0 18px;display:flex;position:relative}.muow-chat .main>.muow-control{margin:0 10px}.muow-chat .main #muow-send{transition:all .3s ease-in-out 0s;width:38px;height:38px;background-color:#075E54;border:0;border-radius:50%;display:block;position:absolute;right:10px;top:0;bottom:0;margin:auto 0}.muow-chat .main #muow-send>img{width:18px;height:16px}.muow-chat .main #muow-send:focus,.muow-chat .main #muow-send:hover{background-color:#128C7E}.muow-control{border:0;height:30px;border-radius:15px;padding:0 15px;font-size:12px;line-height:16px;color:#000;width:100%;box-shadow:0 2px 4px rgba(0,0,0,.15)}.muow-control::-webkit-input-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control::-moz-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control:-ms-input-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control::-ms-input-placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control::placeholder{transition:all .3s ease-in-out 0s;color:#ACACAC}.muow-control:focus::-webkit-input-placeholder{color:#FFF}.muow-control:focus::-moz-placeholder{color:#FFF}.muow-control:focus:-ms-input-placeholder{color:#FFF}.muow-control:focus::-ms-input-placeholder{color:#FFF}.muow-control:focus::placeholder{color:#FFF}.muow-icon{transition:all .3s ease-in-out 0s;display:block;margin:auto}.muow #muow-trigger{position:absolute;right:22px;bottom:0;transition:all .3s ease-in-out 0s;width:48px;height:48px;border:0;display:block;background-color:#25D366;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.4)}.muow #muow-trigger>img{width:30px;height:30px}.muow #muow-trigger:hover{background-color:#3D9D61;box-shadow:0 2px 4px rgba(0,0,0,.65)}.muow #muow-trigger.active{background-color:#368A56;box-shadow:0 0 8px rgba(0,0,0,.75)}.muow #muow-trigger.active>.muow-icon{transform:scale(.83)}@-webkit-keyframes softup{0%{transform:translateY(30%) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(0) scale(1)}}@keyframes softup{0%{transform:translateY(30%) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(0) scale(1)}}@-webkit-keyframes softdown{0%{transform:translateY(0) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(30%) scale(1)}}@keyframes softdown{0%{transform:translateY(0) scale(1)}50%{transform:translateY(15%) scale(1)}100%{transform:translateY(30%) scale(1)}}@media screen and (min-width:991px){.muow-chat #muow-close{opacity:0;transform:translateX(100%);z-index:-1}.muow-chat:hover #muow-close{transition:all .35s ease-in-out 0s;z-index:0;opacity:1;transform:translateX(0)}}@media screen and (max-width:480px){.muow{right:16px;bottom:28px}}@media screen and (max-width:320px){.muow{right:10px}}`;
		this._notificationEl = new Audio(this.properties.notificationSound);
		this._template = document.createElement('div');
		this._template.classList.add('muow');
		this._template.innerHTML = (this.properties.chat) ? `<div class="muow-chat"> <button id="muow-close"> <img src="${ this.properties.icons.close }" alt="Close Icon" class="muow-icon"> </button> <div class="header"> <img src="${ this.properties.profilePicture }" alt="Profile Picture" class="profile-picture"> <h4 class="profile-name">${ this.properties.profileName }</h4> </div> <div class="main"> <input type="text" id="muow-message" class="muow-control" placeholder="${ this.properties.messageFieldPlaceholder }"> <button id="muow-send"> <img src="${ this.properties.icons.send }" alt="Send Icon" class="muow-icon"> </button> </div> </div> <button id="muow-trigger"> <img src="${ this.properties.icons.whatsapp }" alt="WhatsApp Icon" class="muow-icon"> </button>` : `<button id="muow-trigger"> <img src="${ this.properties.icons.whatsapp }" alt="WhatsApp Icon" class="muow-icon"> </button>`;

		this.build();
		this.listen();
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
	 * Listen all events of Muow to do
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
					new LinkGenerator(this.properties.phone.countryCode, this.properties.phone.number, message.value);

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
				new LinkGenerator(this.properties.phone.countryCode, this.properties.phone.number, this.properties.defaultMessage);
			};
		}
	}

}