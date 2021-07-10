window.onload = function () {
  var list = document.getElementById("shuffleAndSort"),
    shuffleButton = document.getElementById("shuffle"),
    sortButton = document.getElementById("sort");

  function shuffle(items) {
    var cached = items.slice(0),
      temp,
      i = cached.length,
      rand;
    while (--i) {
      rand = Math.floor(i * Math.random());
      temp = cached[rand];
      cached[rand] = cached[i];
      cached[i] = temp;
    }
    return cached;
  }

  function shuffleNodes() {
    var nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }

  function sort(items) {
    var cached = items.slice(0);

    cached.sort((a, b) => {
      if (a.textContent > b.textContent) {
        return 1;
      } else if (a.textContent < b.textContent) {
        return -1;
      } else {
        return 0;
      }
    });
    return cached;
  }

  function sortNodes() {
    var nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = sort(nodes);
    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }

  sortButton.addEventListener("click", sortNodes);
  shuffleButton.addEventListener("click", shuffleNodes);
};
