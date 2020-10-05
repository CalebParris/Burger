const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableName, callback){
        let query = "SELECT * FROM ??";
        connection.query(query, [tableName], function(err, result){
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function(tableName, colOne, colTwo, valOne, valTwo, callback){
        let query = "INSERT INTO ?? ( ??, ?? ) VALUES ( ?, ? )";
        connection.query(query, [tableName, colOne, colTwo, valOne, valTwo], function(err, result){
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(tableName, colOne, valOne, colTwo, valTwo, callback){
        let query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(query, [tableName, colOne, valOne, colTwo, valTwo], function(err, result){
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;