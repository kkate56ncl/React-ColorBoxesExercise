function genColor(max) {
  const randNum = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };
  const r = randNum(max);
  const g = randNum(max);
  const b = randNum(max);

  return `rgb(${r}, ${g}, ${b})`;
}

export { genColor };
