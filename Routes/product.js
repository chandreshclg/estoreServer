const express = require('express');
const product = express.Router();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Harfordclg9!",
    database:"estore",
    port:"3306",
    multipleStatements:true
});

product.get("/producCategories",(req,res)=>{
    let categorydata;

    pool.execute("select * from categories", (error, categories) => {
        if(error){
            categorydata = error;
            res.status(500).send(categorydata);
        } else{
            categorydata = categories;
            res.status(200).send(categorydata);
        }
    });
})

product.get("/getProducts",(req,res)=>{
    let productdata;

    pool.execute("select * from products", (error, rows) => {
        if(error){
            productdata = error;
            res.status(500).send(productdata);
        } else{
            productdata = rows;
            res.status(200).send(productdata);
        }
    });
})

module.exports = product;

    