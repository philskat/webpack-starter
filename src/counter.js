const counter = (() => {
  const $counter = document.getElementById('counter');
  const $counterDisplay = document.getElementById('counterDisplay');

  let count = 0;

  $counter.addEventListener('click', increment);

  update();

  function update() {
    $counterDisplay.textContent = count.toString();
  }

  function increment() {
    count++;
    update();
  }

  function decrement() {
    count--;
    update();
  }

  return {
    increment,
    decrement,
  };
})();

module.exports = counter;
