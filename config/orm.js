const connection = require("../config/connection.js");

var orm = {
    selectAll: function()  {
        return new Promise((resolve,reject) =>  {
            connection.query("SELECT * FROM burgers", (err,res) =>  {
                if(err) reject(err);
                console.log(res);
                resolve(res);
            })
        })
    },
    insertOne: function(name)  {
        console.log(name);
        return new Promise((resolve,reject) =>  {
            connection.query("INSERT INTO burgers SET ?",
            {
                burger_name: name
            }, function(err,res)  {
                if(err) reject(err);
                resolve(res);
                console.log(res);
            })
        })
    },
    updateOne: function(name)  {
        return new Promise((resolve,reject) =>  {
            connection.query("UPDATE burgers SET ? WHERE ?",
            [{
                devoured: true
            },  {
                burger_name: name
            }], function(err,res)  {
                if(err) reject(err);
                resolve(res);
                console.log(res);
            })
        })
    }
}

module.exports = orm;


