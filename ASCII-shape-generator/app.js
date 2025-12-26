let inputSize = document.getElementById('size');
let inputSign = document.getElementById('token');
let selectBox = document.getElementById('mode');
let textareaResult = document.getElementById('out');
let buttonBuild = document.getElementById('build');
let buttonCopy = document.getElementById('copy');
let buttonClear = document.getElementById('clear');


inputSign.addEventListener('input', function () {
  console.log(inputSign);
});

buttonBuild.addEventListener('click', function () {
  let height = inputSize.value;
  let icon = inputSign.value;
  let type = selectBox.value;
  let shape = "";

  if (type == "square") {
    shape = createSquare(height, icon);
  } else if (type == "square-border") {
    shape = createSquareBorder(height, icon);
  } else if (type == "pyramid") {
    shape = createPyramid(height, icon);
  }
  textareaResult.innerHTML = shape;
});

function createSquare(height, icon) {
  let lineSquare = "";
  let shape = "";

  for (let i = 1; i <= height; i++) {
    lineSquare = icon.repeat(height);
    shape = shape + lineSquare + "\n";
  }
  return shape;
}

function createSquareBorder(height, icon) {
  let lineSquare = "";
  let shape = "";

  for (let i = 1; i <= height; i++) {
    if (i == 1 || i == height) {
      lineSquare = icon.repeat(height);
    } else {
      lineSquare = icon + " ".repeat(height - 2) + icon;
    }
    shape = shape + lineSquare + "\n";
  }
  return shape;
}

function createPyramid(height, icon) {
  let lineSquare = "";
  let shape = "";

  for (let i = 1; i <= height; i++) {
    if (i == 1) {
      lineSquare = " ".repeat(height - i) + icon + " ".repeat(height - i);
    } else if (i > 1) {
      lineSquare = " ".repeat(height - i) + icon + " ".repeat((2 * i) - 3) + icon + " ".repeat(height - i);
    }
    shape = shape + lineSquare + "\n";
  }

  return shape;
}

console.log(createPyramid(5, "="));



//              i     ?     ??
// xxxx=xxxx    1     4
// xxx=x=xxx    2     3     1       2h - 1 = h-i+1+?+1+h-i = 2h-2i+2+? = 2i - 3
// xx=xxx=xx    3     2     3
// x=xxxxx=x    4     1     5
// =xxxxxxx=    5     0     7

buttonClear.addEventListener('click', function () {
  textareaResult.innerHTML = "";
})

buttonCopy.addEventListener('click', function () {
  navigator.clipboard.writeText(textareaResult.innerHTML);
  alert("Copied the text: " + textareaResult.innerHTML);
});

