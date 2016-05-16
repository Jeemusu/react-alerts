# React-Alerts

> An alerts component for reactjs

## Usage

```
<Alert type="danger" message="Validation Failed!" />
```

## Options

###message (required)
The message to display.

type: `string`

###type (optional)
Define the type message you want to define, this assaigns a class to the element.

type: `string`
default: `info`

###important (optional)
Important messages do no auto dismiss.

type: `boolean`
default: `false`

###hidden (optional)
Set the alert to hidden.

type: `boolean`
default: `false`

###link (optional)
Wrap the message in an anchor tag that links to this url

type: `string`

###timeout (optional)
Set duration (ms) to auto dismiss non-important alerts.

type: `number`
default: `3000` ms

###dismissAnimation (optional)
The animation type to execute when dismissing an alert. This will be added as a class to the element.

type: `string`
default: `fadeOut`