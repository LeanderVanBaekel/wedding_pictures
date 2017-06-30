var sharp = require('sharp');

module.exports = {
  postCreate : function(req, res){

    var upload = req.files;

    var crop = function(image) {
      // console.log('dezez');
      fs.readFile(image), function(err, rawData) {
        console.log(rawData)
        sharp(rawData)
          .resize(200)
          .toBuffer()
          .then( data =>
            fs.writeFile('public/uploads/crops/concept2.png', data, function(err) {
              if(err) {
                  return console.log(err);
              }
            })
          )
          .catch( err => console.log(err));
      };
    };

    var file;

    var date = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '');
    var dir = "public/uploads/originals/";
    var dirCrop = "public/uploads/crops/";
    var name = dir + date + "_" + upload[i].originalname;
    var nameCrop = dirCrop + date + "_small_" + upload[i].originalname;
    file = name;

    var p = new Promise((resolve, reject) => {
      fs.rename(upload[i].path, name, function(err) {
        if(err){
          console.log(err);
          reject('Geen projecten gevonden.')
        }
        console.log('rename ready');
        resolve(nameCrop)
        })
    })
    p.then((nameCrop2) => {
      fs.readFile(file, function(err, rawData) {
        if(err){
          console.log(err);
        }
        console.log(rawData);
        sharp(rawData)
          .resize(200)
          .toBuffer()
          .then( data =>
            fs.writeFile(nameCrop2, data, function(err) {
              if(err) {
                  return console.log(err);
              }
            })
          )
          .catch( err => console.log(err));
      });
    });;
    //
    // for (var i = 0; i < files.length; i++) {
    //   // console.log(files[i]);
    //   fs.readFile(files[i], function(err, data) {
    //     if(err){
    //       console.log(err);
    //     }
    //     console.log(data);
    //   });
    // }

    res.redirect('/');
  }
}
