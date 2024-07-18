function calculatePawtyDate(dogDate, humanDate) {
  const ageDifference = dogDate - humanDate;
  const sameAgeDate = new Date(humanDate.getTime() + (7 * ageDifference) / 6);

  const age = (sameAgeDate - humanDate) / (365.25 * 24 * 60 * 60 * 1000);

  return { sameAgeDate: sameAgeDate.toISOString().split("T")[0], age };
}

export { calculatePawtyDate };
