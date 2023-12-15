const db = require('../../db');

module.exports = {
    tableusers: () => {
        return new Promise((success, reject) => {
            db.query('SELECT * FROM Users', (error, results) => {
                if (error) {
                    throw error;
                    reject(error);
                    return;
                } else {
                    console.log('Resultados da consulta:', results);
                    success(results);
                }
            });
        });
    },   

    tableuserid: (Id) => {
        return new Promise((success, reject) => {
            db.query('SELECT * FROM Users WHERE Id = ?', [Id], (error, results) => {
                if (error) { reject(error); return; }
                if (results.length > 0) {
                    success(results[0]);
                } else {
                    success(false);
                };
            });
        });
    }

};
