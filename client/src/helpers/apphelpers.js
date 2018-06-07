const trimDateToYYYYMMDD = date => date.slice(0, 11);

const convertDateToMonthYYYY = (trimmedDate) => {
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
  const month = +trimmedDate.slice(5, 7);
  const year = trimmedDate.slice(0, 4);
  return `${months[month]} ${year}`;
};

const addUniqIdToReviews = (reviewsArray) => {
  let counter = 0;
  const reviewsArrayCopy = reviewsArray.slice();
  reviewsArrayCopy.forEach((reviewObj) => {
    reviewObj.id = counter;
    counter += 1;
  });
  return reviewsArrayCopy;
};


module.exports.trimDateToYYYYMMDD = trimDateToYYYYMMDD;
module.exports.convertDateToMonthYYYY = convertDateToMonthYYYY;
module.exports.addUniqIdToReviews = addUniqIdToReviews;
