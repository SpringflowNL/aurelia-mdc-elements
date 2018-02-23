# Snackbar

## Usage
To use the snackbar, you have to create the custom element below on the highest level in your application.
For example, you can put it beneath the router-view inside the app.html.
```html
<mdc-snackbar></mdc-snackbar>
```

Then you have to use the eventmessages to trigger this snackbar as shown below.

```js
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class MyClass {
    constructor(EventAggregator) {
        this.ea = EventAggregator;
    }

    myFunction() {
      this.ea.publish('PostMessage.Snackbar', { 'label': 'TitleTesting' });
    }
}
```

## Parameters
Paramters that can be given to the message are:

| Option | Description | Required | Default |
|--|--|:--:|:--:|
| label		| The text inside the snackbar.					|	X	|				|
| buttonlabel			|	The text inside the button of the snackbar. |		|		'Cancel'		|
| dismissonaction | Should the snackbar close on click.	| |	true		|
