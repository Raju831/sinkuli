var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var config = require('./config/DB')
var cors = require('cors')

mongoose.Promise = global.Promise
mongoose.connect(config.DB).then(()=>
{console.log('Database connected')},
err => {console.log(err, 'cannot connect')}
)

var indexRouter = require('./routes/index');


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())

app.use('/api', indexRouter);

if (process.env.NODE_ENV === 'production') {
          // Static folder
          app.use(express.static(__dirname + '/public/'));
        
          // Handle SPA
          app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
        }

var port = process.env.PORT || 3000

app.listen(port, function(req, res){
          console.log('App is running on port', `${port}`);
          
})
