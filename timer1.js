const timers = process.argv.slice(2);
const beep = function () {
  process.stdout.write('\x07');
};
const simpleTimer = function (seconds) {
  const filterdSecond = seconds.filter(
    (second) => Number(second) >= 0 && Number(second) !== NaN
  );
  filterdSecond.forEach((second) =>
    setTimeout(() => {
      beep();
    }, second * 1000)
  );
};
simpleTimer(timers);
