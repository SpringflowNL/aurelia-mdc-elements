# Select

## Usage
```html
<mdc-select label="selectName" key="ID" value="Name" data.bind="Set" selected.bind="selectedKey"></mdc-select>
```

## Parameters
Paramters that can be given to the message are:

| Option | Description | Required | Default |
|--|--|:--:|:--:|
| label		        | The label of the selectbox.					                | X	|	    |
| key			    |	The key of the list item (listitem id)                      | X	|	    |
| value             | The value which is visible (listitem text)	                | X |	    |
| data              | The key/value array which contains the list of the select	    | X |	    |
| selected          | The chosen key of the list.	                                | X |	    |
| disabled          | Option to disable the component	                            |   | false	|
| required          | Option to require the component	                            |   | false	|
| modifier          | Option to set the modifier of the select                      |   | null  |
| secondarylabel    | Used for showing a helpertext under the select	            |   | null  |
| leading           | Leading icon prefix (material-icons)                          |   | 	    |
| outlined          | sets the styles to the outlined variant                       |   | false |
| emptyOption    | Boolean if empty option is visible                            |   | true  |
