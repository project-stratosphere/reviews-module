const db = require('../../database/index.js');
const mysql = require('mysql');
const Promise = require('bluebird');

module.exports.listingAverageStars.get = (listingID) => {
  return new Promise((resolve, reject) => {
    // Using prepared statements to protect against SQL Injection Attacks
    // See here: https://dev.mysql.com/doc/refman/5.7/en/sql-syntax-prepared-statements.html
    // And here: https://github.com/mysqljs/mysql#preparing-queries
    let starsQuery = 'SELECT rank_accuracy, rank_communication, rank_cleanliness, rank_location, rank_checkin, rank_value FROM ?? WHERE ?? = ?';
    const inserts = ['review', 'listing_id', listingID];
    starsQuery = mysql.format(starsQuery, inserts);

    db.dbConnection.query(starsQuery, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
