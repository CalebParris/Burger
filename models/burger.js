const orm = require('../config/orm.js');

const burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insertOne: function(col, val, callback){
        orm.insertOne("burgers", col, val, function(res){
            callback(res);
        });
    },
    updateOne: function(colOne, valOne, colTwo, valTwo, callback){
        orm.updateOne("burgers", colOne, valOne, colTwo, valTwo, function(res){
            callback(res);
        });
    }
}

module.exports = burger;