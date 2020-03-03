# Message us on WhatsApp (muo-whatsapp) - [Demo](https://luan11.github.io/muow-example/)

> Easy way to insert the floating button for Message us on Whatsapp.

## Getting Started

### Environment

To use, you'll need to include the Muow JavaScript and CSS (optional, but recommended) files into your HTML.

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

#### showChat

- Type: `boolean`
- Default: `true`

Show the chat to user input a customized message.

#### phone

- Type: `string`
- Default: `+55 (11) 90000-0000`

The phone number to receive the messages.

#### defaultMessage

- Type: `string`
- Default: `Hello, how are you?`

The default message to receive if [chat](#chat): `false`.

#### profile

- Type: `object`
- Properties:
  - picture:
    - Type: `string`
    - Default: `https://picsum.photos/32`
  - name:
    - Type: `string`
    - Default: `Message us on WhatsApp`

The profile data.

#### messageFieldPlaceholder

- Type: `string`
- Default: `Type your message...`

The placeholder of message field.

#### playNotificationSound

- Type: `boolean`
- Default: `false`

Play a notification sound on chat opening.

#### date

- Type: `object`
- Properties:
  - translations:
    - Type: `object`
    - Default: `{ 'en-US': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 'pt-BR': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'] }`
  - lang:
    - Type: `string`
    - Default: `en-US`

The language of date displayed in chat.

### Usage

After setting up the [environment](#Environment), just instantiate the Muow class.

**Code example:**

```js
new Muow({
 phone: '+55 (11) 91111-1111',
 defaultMessage: 'Hello, have a time to talk to me?',
 profile: {
  picture: 'https://avatars1.githubusercontent.com/u/36796413?s=28&v=4',
  name: 'Luan Novais'
 },
 messageFieldPlaceholder: 'Write what you need...',
});
```

[View a demo :arrow_forward:](https://luan11.github.io/muow-example/)

[View more about the properties :arrow_up:](#Properties)

## License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
