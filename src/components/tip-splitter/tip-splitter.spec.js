import test from 'ava';

let tps = function(){}

test.failing('Tip splitter', t => {

    let partners = [
        {
            name: 'partner0',
            hours: 44,
        },
        {
            name: 'partner1',
            hours: 33,
        },
    ]

    let tipTotal = 123


    let test = tps(partners, tipTotal)
    let result


    t.equal(test, result);
});
