const bandpassFilter = require("./bandpassFilter");

describe("bandpassFilter", () => {
  it("filters between 30 and 40 hz", () => {
    expect(bandpassFilter([20], 30, 40)).toEqual([30]);
  });

  it("filters between 20 and 60 hz", () => {
    expect(bandpassFilter([10, 50], 20, 60)).toEqual([20, 50]);
  });

  it("filters between 150 and 180 hz", () => {
    expect(bandpassFilter([100, 200, 100], 150, 180)).toEqual([150, 180, 150]);
  });

  it("filters between 25 and 45 hz", () => {
    expect(bandpassFilter([20, 30, 40, 50, 60], 25, 45)).toEqual([
      25, 30, 40, 45, 45,
    ]);
  });

  it("filters between 500 and 700 hz", () => {
    expect(bandpassFilter([400, 900, 600], 500, 700)).toEqual([500, 700, 600]);
  });

  it("filters between 400 and 1100", () => {
    expect(bandpassFilter([1000, 500, 1200], 400, 1100)).toEqual([
      1000, 500, 1100,
    ]);
  });

  it("throws an error when passed an empty array", () => {
    expect(() => {
      bandpassFilter([], 10, 20);
    }).toThrow("input track is empty");
  });

  it("throws an error when passed null", () => {
    expect(() => {
      bandpassFilter([null], 10, 20).toThrow("input is corrupted");
    });
  });

  it("throws an error when the lower limit is greater or equal to the upper limit", () => {
    expect(() => {
      bandpassFilter([10], 40, 20).toThrow(
        "lower limit must be less than or equal to the upper value"
      );
    });
  });
});
