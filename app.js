var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine = require('ejs-mate')
const expressLayouts = require('express-ejs-layouts')


// var indexRouter = require('./app_server/routes/index');
// var usersRouter = require('./app_server/routes/users');

//start app
var app = express();
app.engine('ejs', engine);

// view engine setup
app.use(expressLayouts)
app.set('layout', './layouts/boilerplate')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//static files
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//Get Home 
app.get('/', (req, res)=>{
    res.render('home', {title: 'Home'})
});
//Get Pitch 
app.get('/pitch', (req, res)=>{
    res.render('pitch', {title: 'Pitch'})
});


// module.exports = app;
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})
// app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));