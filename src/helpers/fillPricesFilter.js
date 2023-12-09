const fillPricesFilter = (min, max, step) => {
  const result = [];
  const steps = Math.floor((max - min) / step);

  for (let i = 0; i <= steps; i++) {
    const price = min + i * step;
    result.push({ value: price, label: `$ ${price}` });
  }

  return result;
};

export default fillPricesFilter;
