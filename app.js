const express = require('express')
  , path = require('path')
  , mustacheExpress = require('mustache-express')
  // , morgan = require('morgan')
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , expressValidator = require('express-validator')
  , parseurl = require('parseurl')
  , router = require('./routers/router')
  , usersRouter = require('./routers/users-router');
// module is the table, its just a stupid word for it

// , jsonfile = require('jsonfile')
// , usersFile = './users.json';

// let context = jsonfile.readFileSync(usersFile);

// jsonfile.writeFileSync(usersFile, context, {spaces: 2});
// res.sendStatus(200);

const app = express();
const models = require('./models');

app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator({
  additionalValidators: 'equals'
}));

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.set('layout', 'layout');

app.use(session({
  secret: 'oP7C1kCe/kEy/Z24NtiJBRTuW57Ivz8+p8MJzDIynHs=',
  resave: false,
  saveUninitialized: false // changed from true https://stackoverflow.com/questions/40381401/when-use-saveuninitialized-and-resave-in-express-session
}));

app.use(function(req, res, next){
  next();
});

usersRouter(app);

app.get('/', function (req, res) {
  return res.render('index');
  // res.sendStatus(200);
});
app.get('/:var', function (req, res) {
  return res.send('Enter a url dummy, not: ' + req.params.var);
});

// router(app);
// /variable/:variableId // post or get URL
// console.log(req.params.variableId); // /variable/myVariable
// console.log(req.query.queryId); // /variable/myVariable?queryId=myQuery
// console.log(req.session.key); // cookie value
// return res.sendStatus(200);
// return res.render('index', context);
// return res.redirect('index');

app.listen(3000, function () {
  console.log('Express is listening for connections');
});
