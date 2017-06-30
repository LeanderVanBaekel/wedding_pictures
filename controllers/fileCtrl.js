var sharp = require('sharp');

module.exports = {
  postCreate : function(req, res){

    var upload = req.files[0];
    var date = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '');
    var orgDir = "public/uploads/originals/";
    var cropDir = "public/uploads/crops/";
    var orgFileName = date + "_" + upload.originalname;
    var cropFileName = date + "_small_" + upload.originalname;

    var p = new Promise((resolve, reject) => {
      fs.rename(upload.path, orgDir + orgFileName, function(err) {
        if(err){
          console.log(err);
          reject('Geen projecten gevonden.')
        }
        console.log('rename ready');
        resolve()
      })
    })
    p.then(() => {
      fs.readFile(orgDir + orgFileName, function(err, rawData) {
        if(err){
          console.log(err);
        }
        console.log(rawData);
        sharp(rawData)
          .resize(400)
          .toBuffer()
          .then( data =>
            fs.writeFile(cropDir + cropFileName, data, function(err) {
              if(err) {
                  return console.log(err);
              }
            })
          )
          .catch( err => console.log(err));
      });
    }).catch( err => console.log(err));

    res.redirect('/');
  }
}
