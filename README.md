# Subtotal JavaScript Object Array
Subtotal JavaScript object array by change in a specified key. Originally made for an AngularJS subtotals HTML table.

### Example Usage

The following code:
```javascript
const masterData = [
    {
        name: 'Jake',
        value_0: 1,
        value_1: 2
    }, {
        name: 'John',
        value_0: 4,
        value_1: 2
    }, {
        name: 'John',
        value_0: 4,
        value_1: 1
    }, {
        name: 'Sally',
        value_0: 8,
        value_1: 2
    }
];

let subTotals = subTotal(masterData, 'name', ['value_0', 'value_1']);
```

will produce the following JavaScript object:
```javascript
{
  "John":{
    data: [{name: "John", value_0: 4, value_1: 2}, {name: "John", value_0: 4, value_1: 1}],
    totals:{
      value_0: 8,
      value_1: 3
    }
  },
  ...
}
```
