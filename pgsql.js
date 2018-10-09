// const mysql = require('mysql');
const express = require('express');
const router = express.Router();
// const app = express();
// const bodyParser = require('body-parser');
// const port = process.env.PORT || 3000;

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect((err) => {
    if (err) {
        console.log("err" + JSON.stringify(err, undefined, 2));

    } else {
        console.log("connected db");

    });



router.get('/', (req, res) => {
    client.query('create table employees (id int,name varchar(255),salery varchar(255),address varchar(255));', (err, res) => {
        console.log("inside");
        if (err) throw err;
        for (let row of res.rows) {
            res.send(rows);
          console.log(JSON.stringify(row));
        }
        client.end();
      });
      res.send('Hello World!');
});

router.get('/employee', (req, res) => {

    client.query('select * from employees;', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            res.send(rows);
          console.log(JSON.stringify(row));
        }
        client.end();
      });
    
    // mysqlConn.query('select * from employees', (err, rows, fields) => {
    //     if (!err) {
    //         res.send(rows);
    //         console.log(rows[0].name);
    //     } else {
    //         console.log(err);
    //         // res.redirect('/');
    //     }
    // });
    res.send('Hello World emps!');
});

router.get('/employee/:id', (req, res) => {
    // mysqlConn.query('select * from employees where id = ?',[req.params.id], (err, rows, fields) => {
    //     if (!err) {
    //         res.send(rows);
    //         // console.log(rows[0].name);
    //     } else {
    //         console.log(err);
    //         // res.redirect('/');
    //     }
    // });
});

router.delete('/employee/:id', (req, res) => {
    // mysqlConn.query('delete from employees where id = ?',[req.params.id], (err, rows, fields) => {
    //     if (!err) {
    //         // res.send(rows);
    //         console.log('deleted');
    //         // console.log(rows[0].name);
    //     } else {
    //         console.log(err);
    //         // res.redirect('/');
    //     }
    // });
});

router.post('/employee', (req, res) => {
    // let emp=req.body;
    // let sql="set @id = ?;set @name = ?;set @salery = ?;set @address = ?;call EmpAddEdit(@id,@name,@salery,@address);";
    // mysqlConn.query(sql,[emp.id,emp.name,emp.salery,emp.address], (err, rows, fields) => {
    //     if (!err) {
    //         res.send(rows);
    //         // console.log(rows[0].name);
    //     } else {
    //         console.log(err);
    //         // res.redirect('/');
    //     }
    // });
});

router.put('/employee', (req, res) => {
    // let emp=req.body;
    // let sql="set @id = ?;set @name = ?;set @salery = ?;set @address = ?;call EmpAddEdit(@id,@name,@salery,@address);";
    // mysqlConn.query(sql,[emp.id,emp.name,emp.salery,emp.address], (err, rows, fields) => {
    //     if (!err) {
    //         res.send(rows);
    //         // console.log(rows[0].name);
    //     } else {
    //         console.log(err);
    //         // res.redirect('/');
    //     }
    // });
});

router.post('/newEmployee', (req, res) => {
    // let emp=req.body;
    // let sql="insert into employees values(?,?,?,?);";
    // mysqlConn.query(sql,[emp.id,emp.name,emp.salery,emp.address], (err, rows, fields) => {
    //     if (!err) {
    //         res.send(rows);
    //         // console.log(rows[0].name);
    //     } else {
    //         console.log(err);
    //         // res.redirect('/');
    //     }
    // });
});

// app.listen('3000', () => console.log('server started'));

module.exports = router;