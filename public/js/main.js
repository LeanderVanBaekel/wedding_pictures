var input = document.querySelector('.file');
// input.addEventListener('change', function(el) {
//   console.log(el.srcElement);
//
// });

function previewFiles() {

  var preview = document.querySelector('.preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 500;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}

input.addEventListener('change', function(el) {
  previewFiles();
});


var popup = document.querySelector('.popup-container');
var uploadButton = document.querySelector('.upload-button');
var closeButtons = document.querySelectorAll('.close-button');

uploadButton.addEventListener('click', function() {
  popup.classList.toggle('hidden');
});

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function() {
    popup.classList.toggle('hidden');
  });
}
