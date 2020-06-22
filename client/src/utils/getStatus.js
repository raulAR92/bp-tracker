import categories from "../constants/categories";

export const getSystolicStatus = (value) => {
  if (value <= 89) {
    return {
      value: categories.LOW,
      numberValue: 0,
    };
  }
  if (value > 89 && value <= 120) {
    return {
      value: categories.NORMAL,
      numberValue: 1,
    };
  }
  if (value > 120 && value <= 129) {
    return {
      value: categories.ELEVATED,
      numberValue: 2,
    };
  }
  if (value > 129 && value <= 139) {
    return {
      value: categories.HSTAGE1,
      numberValue: 3,
    };
  }
  if (value > 139 && value <= 179) {
    return {
      value: categories.HSTAGE2,
      numberValue: 4,
    };
  }
  return {
    value: categories.HYPERTENSIVE_CRISIS,
    numberValue: 0,
  };
};

export const getDiastolicStatus = (value) => {
  if (value <= 59) {
    return {
      value: categories.LOW,
      numberValue: 0,
    };
  }
  if (value > 60 && value <= 80) {
    return {
      value: categories.NORMAL,
      numberValue: 1,
    };
  }
  if (value > 80 && value <= 89) {
    return {
      value: categories.HSTAGE1,
      numberValue: 2,
    };
  }
  if (value > 89 && value <= 119) {
    return {
      value: categories.HSTAGE2,
      numberValue: 3,
    };
  }
  return {
    value: categories.HYPERTENSIVE_CRISIS,
    numberValue: 4,
  };
};
