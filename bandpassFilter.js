const bandpassFilter = (freq, lower, upper) => {
  if (freq.length === 0) {
    throw new Error("input track is empty");
  }
  if (freq.includes(null)) {
    throw new Error("input is corrupted");
  }
  if (lower >= upper) {
    throw new Error("lower limit must be less than or equal to the upper value");
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] <= lower) {
      freq[i] = lower;
    }
    if (freq[i] >= upper) {
      freq[i] = upper;
    }
  }
  return freq;
};

module.exports = bandpassFilter;
