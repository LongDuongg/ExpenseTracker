const {setKey} = require("../utils/objects");

const setStateKey = (state, setState, key, value) => {
  setState(setKey(state, key, value));
};
exports.setStateKey = setStateKey;
