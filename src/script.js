function move() {
  let num = 0;
  let target = document.querySelector('#sec01>ul>li').clientWidth;
  console.log(target)
  const Pre = document.querySelector('#sec01>p.prev');
  const Next = document.querySelector('#sec01>p.next');

  Pre.addEventListener('click', prev);
  Next.addEventListener('click', next);

  function prev() {
    num += target;
    if (num === target) {
      num = (target * -2);
    }
    setTimeout(move, 10)
  }

  function next() {
    num -= target;
    if (num < (target * -2)) {
      num = 0;
    }
    setTimeout(move, 10)
  }

  function move() {
    document.querySelector('#sec01>ul').style.left = num + 'px';
  }
}
move();