const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// const itemsList = [{ name: 'as11', desc: 'aban1' }, { name: 'as2', desc: '2' },
// { name: '3', desc: '3' }, { name: '4', desc: '4aban' }]

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'node_modules')));
// app.use(express.static(path.join(__dirname,'assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.use( require('./main'));
// app.use('/api', require('./main'));
app.use('/db', require('./pgsql'));
// app.get('/', (req, res) =>
//     // res.send('Hello World!');
//     res.render('index', {
//         items: itemsList
//     })
// );

// app.post('/add', (req, res) => {
//     let data = req.body.newT
//     itemsList.push({
//         id: itemsList + 1,
//         name: data,
//         desc: data + '' + data
//     });
//     res.redirect('/');
// });

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);