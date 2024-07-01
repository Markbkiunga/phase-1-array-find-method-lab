const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];
function superbowlWin(array = record) {
  for (const object in array) {
    if (array[object].result === "W") {
      console.log(array[object].year);
      return array[object].year;
    }
  }
}
superbowlWin();
