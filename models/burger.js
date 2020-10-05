const orm = require('../config/orm.js');

const burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insertOne: function(colOne, colTwo, valOne, valTwo, callback){
        orm.insertOne("burgers", colOne, colTwo, valOne, valTwo, function(res){
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