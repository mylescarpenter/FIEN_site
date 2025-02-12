var more = document.querySelectorAll(".show-more");
var less = document.querySelectorAll(".show-less");
var hidden =  document.querySelectorAll(".hidden-text");
var ellipses = document.querySelectorAll(".ellipses")


function getIndex(arr, item) {
  for (let i = 0; i < arr.length; i+=1) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

more.forEach( (item) => {
  item.addEventListener("click", function(evt) {
    const idx = getIndex(more, this);
    more[idx].style.display = "none";
    less[idx].style.display = "block";
    hidden[idx].style.display = "inline";
    ellipses[idx].style.display ="none";
  });
});

less.forEach( (item) => {
  item.addEventListener("click", function(evt) {
    const idx = getIndex(less, this);
    more[idx].style.display = "block";
    less[idx].style.display = "none";
    hidden[idx].style.display = "none";
    // ellipses[idx].style.display = "inline";
  });
});

