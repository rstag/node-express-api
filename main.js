const express = require('express');
const router = express.Router();
const itemsList = [{ name: 'as11', desc: 'aban1' }, { name: 'as2', desc: '2' },
{ name: '3', desc: '3' }, { name: '4', desc: '4aban' }]

router.get('/', (req, res) =>
    // res.send('Hello World!');
    res.render('index', {
        items: itemsList
    })
);

router.post('/add', (req, res) => {
    let data = req.body.newT
    itemsList.push({
        id: itemsList + 1,
        name: data,
        desc: data + '' + data
    });
    res.redirect('/api');
});

module.exports = router;