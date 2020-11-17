export const getNameInitials = (fName, lName) => {
  if (fName && lName) {
    if (typeof fName === "string" && typeof lName === "string") {
      return fName[0].toLocaleUpperCase() + lName[0].toLocaleUpperCase();
    } else {
      return "";
    }
  } else {
    return "";
  }
};
