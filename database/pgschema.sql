CREATE TABLE IF NOT EXISTS tbl_users (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL, 
  last_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_listings (
  id SERIAL PRIMARY KEY,
  listing_name VARCHAR(250) NULL
);

CREATE TABLE IF NOT EXISTS tbl_reviews (
  id SERIAL PRIMARY KEY,
  listing_id INT NOT NULL,
  user_id INT NOT NULL,
  review_date DATE,
  review_text VARCHAR(1500) NOT NULL,
  rank_accuracy INT NOT NULL,
  rank_communication INT NOT NULL,
  rank_cleanliness INT NOT NULL,
  rank_location INT NOT NULL,
  rank_checkin INT NOT NULL,
  rank_value INT NOT NULL
);

CREATE TABLE IF NOT EXISTS temp_test (
a_name varchar(50) null,
a_number int null
);