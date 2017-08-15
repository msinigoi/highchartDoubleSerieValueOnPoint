function applyDeltaSign(number) {
  if (number > 0) {
    return "+" + number;
  } else if (number == 0) {
    return "\xB1" + number;
  } else {
    return number;
  }
}
