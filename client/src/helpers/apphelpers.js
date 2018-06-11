export const filterReviews = (searchString, processedReviewsArray) => {
  const compareString = searchString.toLowerCase();
  return processedReviewsArray.filter((reviewObj) => {
    return reviewObj.review_text.toLowerCase().includes(compareString);
  });
};

// -----------------
// -----------------
// -----------------

// Note:
// I used the below formulas/objects when I was handling data reformatting on the client side
// But I then decided to do formatting on the server side.
// However, I'm leaving this here just in case I revisit that decision in the future.

/*
const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const trimDateToYYYYMMDD = date => date.slice(0, 11);

const convertDateToMonthYYYY = (trimmedDate) => {
  const month = +trimmedDate.slice(5, 7);
  const year = trimmedDate.slice(0, 4);
  return `${months[month]} ${year}`;
};

export const processReviewsArray = (reviewsArray) => {
  const reviewsArrayCopy = reviewsArray.slice();
  let counter = 0;
  reviewsArrayCopy.forEach((review) => {
    review.review_date = convertDateToMonthYYYY(trimDateToYYYYMMDD(review.review_date));
    review.key = counter;
    counter += 1;
  });
  return reviewsArrayCopy;
};
*/
