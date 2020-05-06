var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
dotenv.config();


var indexRouter = require('./modules/routes/router');

var app = express(),bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: false
}));
app.use(bodyParser.json({limit: "50mb"}));
const expressSwagger = require('express-swagger-generator')(app);


//http://localhost:3000/api-docs
let options = {
  swaggerDefinition: {
      info: {
          description: 'Workforce API Documentation',
          title: 'Swagger',
          version: '1.0.0',
      },
      host: process.env.SERVER+':'+process.env.SERVER_PORT,
      basePath: '/',
      produces: [
          "application/json"
      ],
      schemes: ['http', 'https'],
      securityDefinitions: {
          JWT: {
              type: 'apiKey',
              in: 'header',
              name: 'access-token',
              description: "",
          }
      }
  },
  basedir: __dirname,
  files: ['./modules/**/*.js']
};
expressSwagger(options)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
