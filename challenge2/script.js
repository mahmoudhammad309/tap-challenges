const countItems = (arr) => {
  const count = {};
  const limit = Math.round(arr.length / 2);
  arr.forEach((e) => {
    count[e] ? count[e]++ : (count[e] = 1);
  });
  const maxNum = Math.max(...Object.values(count));
  const result = Object.entries(count).reduce((acc, [key, value]) => {
    if (value === maxNum && value >= limit) {
      acc = key;
    }
    return acc;
  }, '');
  return result;
}
