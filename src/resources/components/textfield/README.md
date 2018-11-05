# TextField

## Usage
```html
<mdc-text-field label="Title" value.bind="_Name" disabled.bind="IsReadonly"></mdc-text-field>
```

## Parameters
Parameters that can be given to the message are:

| Option | Description | Required | Default |
|--|--|:--:|:--:|
| label		| The label of the textfield.	|	X	| |
| value			|	The value of the textfield. Can be set on init. |	X	|	|
| disabled | Option to disable the textfield.	| |	false |
| required | Option to require the textfield. | | false |
| type | Option to set the type of the textfield. | | 'text' |
| modifier | Option to set the modifier of the textfield. | | null |
| secondarylabel | Used for showing a helpertext under the textfield.	| | null |
| step | Used for steps in type = 'number'	| | |
| min | Used for min in number, and minlength in text	| | |
| max | Used for max in number, and maxlength in text	| | |
| leading | Leading icon prefix (material-icons) |	 | 	|
| trailing | Trailing icon prefix (material-icons) |	 | 	|