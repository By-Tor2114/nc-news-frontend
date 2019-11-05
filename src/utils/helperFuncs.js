exports.dateFormat = date => {
  if (date === undefined) {
  } else {
    const months = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec"
    };
    const dateSplit = date
      .slice(0, 10)
      .split("-")
      .reverse();
    return `${dateSplit[0]} ${months[+dateSplit[1]]} ${dateSplit[2]}`;
  }
};
