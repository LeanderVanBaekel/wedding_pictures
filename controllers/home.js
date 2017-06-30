var sharp = require('sharp');


module.exports = {
  get : function(req, res){

    // var file = fs.readFile('public/uploads/originals/concept.png', function(err, data) {
    //   console.log(data);
    //   sharp(data)
    //     .resize(400)
    //     .toBuffer()
    //     .then( data =>
    //       fs.writeFile('public/uploads/crops/concept.png', data, function(err) {
    //         if(err) {
    //             return console.log(err);
    //         }})
    //       )
    //     .catch( err => console.log(err));
    // });


    res.render('home');
  }
}
