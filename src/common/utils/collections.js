
const sum = (col) => {
  return col.reduce((pre, next) => {return pre += next}, 0);
};
exports.sum = sum;
