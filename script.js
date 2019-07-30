//creates grid
var createGrid;
var makeGrid = document
  .getElementById('createGrid')
  .addEventListener('click', function() {
    resizeGrid();
    var createGrid = prompt('How many rows do you want?');

    let number = parseInt(createGrid);

    for (i = 0; i < number; i++) {
      var row = document.createElement('div');
      row.className = 'row';
      row.id = 'row' + i;

      for (k = 0; k < number; k++) {
        var box = document.createElement('div');
        box.className = 'box';
        box.id = 'box';
        row.appendChild(box);
      }
      container.appendChild(row);
    }
    //adds black when you mouse over a square.
    document.addEventListener('mouseover', e => {
      if (!e.target.classList.contains('box')) {
        return;
      }
      e.target.style.background = '#3d3d3d';
    });

    //adds a random color when you mouse over a square.
    document.getElementById('rainbowColor').addEventListener('click', () => {
      document.addEventListener('mouseover', e => {
        if (!e.target.classList.contains('box')) {
          return;
        }
        e.target.style.background = getRandomColor();
      });
    });
    //removes drawing from grid when you click the clear button.
    document.getElementById('clearBtn').addEventListener('click', () => {
      const colors = document.querySelectorAll('#box[style*= "background"]');
      colors.forEach(color => color.removeAttribute('style'));
    });

    return container;
  });

//allows you to remake the grid
function resizeGrid() {
  let divContainer = document.getElementById('container');
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
