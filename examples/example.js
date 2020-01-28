const subtotal = require('../src/subtotal');

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

const output = subtotal(masterData, 'name', ['value_0', 'value_1']);

console.log(output);
