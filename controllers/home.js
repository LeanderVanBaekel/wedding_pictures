var sharp = require('sharp');


module.exports = {
  get : function(req, res){
    var data = {
      images: []
    };

    var getFile = new Promise((resolve, reject) => {
      fs.readdir('public/uploads/crops/', (err, files) => {
        files.forEach(file => {
          data.images.push(file);
        });
        if (data.images) {
          resolve()
        } else {
          reject('Geen projecten gevonden.')
        }
      })
    }).then((succes) => {
        console.log('clients succes');
      return succes;
    }).catch((err) => {
      res.send(err);
    });

    Promise.all([getFile]).then(values => {
      console.log(data);
      res.render('home', {data:data});
      // res.render('projects/createProject', {req: req, title: 'nieuw project', clients: clients, accounts: accounts});
    });

  }
}
