module.exports.calcReviewsAverageStars = (averageStarsArray) => {
  let accuracyTot = 0;
  let communicationTot = 0;
  let cleanlinessTot = 0;
  let locationTot = 0;
  let checkinTot = 0;
  let valueTot = 0;
  const numReviews = averageStarsArray.length;

  averageStarsArray.forEach((reviewsStarsObj) => {
    accuracyTot += reviewsStarsObj.rank_accuracy;
    communicationTot += reviewsStarsObj.rank_communication;
    cleanlinessTot += reviewsStarsObj.rank_cleanliness;
    locationTot += reviewsStarsObj.rank_location;
    checkinTot += reviewsStarsObj.rank_checkin;
    valueTot += reviewsStarsObj.rank_value;
  });

  const accuracyAvg = +(accuracyTot / numReviews).toFixed(2);
  const communicationAvg = +(communicationTot / numReviews).toFixed(2);
  const cleanlinessAvg = +(cleanlinessTot / numReviews).toFixed(2);
  const locationAvg = +(locationTot / numReviews).toFixed(2);
  const checkinAvg = +(checkinTot / numReviews).toFixed(2);
  const valueAvg = +(valueTot / numReviews).toFixed(2);
  const overallAvg = +((accuracyAvg + communicationAvg + cleanlinessAvg + locationAvg + checkinAvg + valueAvg) / 6).toFixed(2);

  return {
    overallAvg,
    accuracyAvg,
    communicationAvg,
    cleanlinessAvg,
    locationAvg,
    checkinAvg,
    valueAvg,
    numReviews,
  };
};