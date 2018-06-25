const db = require('../../database/index.js');
const mysql = require('mysql');
const Promise = require('bluebird');

module.exports.listingAverageStars = {
  get: (listingId) => {
    return new Promise((resolve, reject) => {
      // Using prepared statements to protect against SQL Injection Attacks
      // See here: https://dev.mysql.com/doc/refman/5.7/en/sql-syntax-prepared-statements.html
      // And here: https://github.com/mysqljs/mysql#preparing-queries
      const sql = `SELECT AVG(rank_accuracy) as rank_accuracy, AVG(rank_communication) as rank_communication, 
                 AVG(rank_cleanliness) as rank_cleanliness, AVG(rank_location) as rank_location, 
                 AVG(rank_checkin) as rank_checkin, AVG(rank_value) as rank_value 
                 FROM tbl_reviews WHERE listing_id = $1`;
      db.pgConnection.query(sql, [listingId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports.listingReviews = {
  get: (listingId) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT r.review_date, r.review_text, r.first_name 
                   FROM tbl_reviews as r 
                  WHERE listing_id = $1`;
      db.pgConnection.query(sql, [listingId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  post: (review) => {
    return new Promise((resolve, reject) => {
      let sql = 'INSERT INTO tbl_reviews (listing_id, user_id, review_date, review_text, rank_accuracy, rank_communication, rank_cleanliness, rank_location, rank_checkin, rank_value) VALES (??, ??, ??, ??, ??, ??, ??, ??, ??, ??)';
      const listingId = review.listingId;
      const userId = review.userId;
      const reviewDate = review.reviewDate || new Date();
      const reviewText = review.reviewText || '';
      const rankAccuracy = review.rankAccuracy || 0;
      const rankCommunication = review.rankCommunication || 0;
      const rankCleanliness = review.rankCleanliness || 0;
      const rankLocation = review.rankLocation || 0;
      const rankCheckin = review.rankCheckin || 0;
      const rankValue = review.rankValue || 0;
      const inserts = [listingId, userId, reviewDate, reviewText, rankAccuracy, rankCommunication, rankCleanliness, rankLocation, rankCheckin, rankValue];
      sql = mysql.format(sql, inserts);

      db.dbConnection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  put: (review) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT "UPDATE STATEMENT RAN";'; // Just putting in a dummy query in place of an update

      db.dbConnection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  delete: (review) => {
    return new Promise((resolve, reject) => {
      let sql = 'DELETE FROM tbl_review WHERE id = ??;';
      const reviewId = review.reviewId || null;
      const inserts = [reviewId];
      sql = mysql.format(sql, inserts);

      db.dbConnection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};


module.exports.listings = {
  getTotal: () => {
    // Hard-coded to 100 because I don't have actual listings in my database, just references to listings.

    return 100;

    // However, see below for a theoretical representation of how the query might look
    // (assuming I had listing records in a table called 'listing').
    /*
    return new Promise((resolve, reject) => {
      let numReviewsQuery = 'SELECT COUNT(*) FROM ??';
      const inserts = ['listing'];
      numReviewsQuery = mysql.format(starsQuery, inserts);

      db.dbConnection.query(numReviewsQuery, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    */
  },
};
