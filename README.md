# Message us on WhatsApp (muo-whatsapp) - [Demo](https://luan11.github.io/muow-example/)

> Easy way to insert the floating button for Message us on Whatsapp.

## Getting Started

### Environment

To use, you'll need to include the Muow assets into your project. The assets are:

- images:
  - `whatsapp-icon-muow.svg`
  - `send-muow.svg`
  - `close-muow.svg`
- audio:
  - `notification.mp3`

Then you have included the assets, now include JavaScript and CSS (optional, but recommended) files into your HTML.

**Remember:**

- Don't change these files names.
- If font isn't included, the default is `sans-serif`.

```html
<!-- Include muow.css and font used in the HEAD -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="path/to/muow.css">

<!-- Include muow.min.js before BODY closing -->
<script src="path/to/muow.min.js"></script>
```

[View a code example :arrow_down:](#Usage)

### Properties

#### chat

- Type: `boolean`
- Default: `true`

Show the chat to user input a customized message.

#### phone

- Type: `object`
- Default: `{ countryCode: '55', number: '11900000000' }`

The phone number to receive the messages (Please set `countryCode` and `number` as escaped string).

#### profilePicture

- Type: `string`
- Default: `https://www.placehold.it/28x28`

The profile picture of chat.

#### profileName

- Type: `string`
- Default: `Name`

The representative name of chat.

#### messageFieldPlaceholder

- Type: `string`
- Default: `Type your message...`

The placeholder of message field.

#### defaultMessage

- Type: `string`
- Default: `Hi,`

The default message to receive if [chat](#chat): `false`.

#### icons

- Type: `object`
- Default: `{ whatsapp: 'assets/images/whatsapp-icon-muow.svg', close: 'assets/images/close-muow.svg', send: 'assets/images/send-muow.svg' }`

The path of assets.

#### notificationSound

- Type: `string`
- Default: `assets/audio/notification.mp3`

The path of notification sound.

#### playNotificationSound

- Type: `boolean`
- Default: `false`

Play a notification sound on chat opening.

### Usage

After setting up the [environment](#Environment), just instantiate the Muow class.

**Code example:**

```js
new Muow({
 chat: true,
 phone: {
  countryCode: '55',
  number: '11912345678',
 },
 profilePicture: 'https://avatars1.githubusercontent.com/u/36796413?s=28&v=4',
 profileName: 'luan11',
 messageFieldPlaceholder: 'Write what you need...',
 defaultMessage: 'Hello, have a time to talk to me?',
 icons: {
  whatsapp: 'assets/images/whatsapp-icon-muow.svg',
  close: 'assets/images/close-muow.svg',
  send: 'assets/images/send-muow.svg',
 },
 notificationSound: 'assets/audios/notification.mp3',
 playNotificationSound: true,
});
```

[View a demo :arrow_forward:](https://luan11.github.io/muow-example/)

[View more about the properties :arrow_up:](#Properties)

## License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
