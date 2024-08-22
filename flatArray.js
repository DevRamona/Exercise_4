const arrayDepth = (array) => {
  if (!Array.isArray(array)) return 0;
  return 1 + Math.max(...array.map(arrayDepth));
};

const flattenArray = (array) => {
  return array.reduce((accumulator, value) => {
    return accumulator.concat(
      Array.isArray(value) ? flattenArray(value) : value
    );
  }, []);
};
