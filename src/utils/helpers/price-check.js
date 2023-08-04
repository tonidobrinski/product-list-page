const priceCompare = ([lowPrice, highPrice], value) => {
  console.log(lowPrice, highPrice, value);
  return highPrice
    ? value >= lowPrice && value <= highPrice
    : value >= lowPrice;
};

export default priceCompare;
