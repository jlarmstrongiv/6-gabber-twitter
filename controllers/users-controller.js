module.exports = {
  getLogin: (req, res) => {
    res.render('login');
  },
  getSignup: (req, res) => {
    res.render('signup');
  },
  postSignout: (req, res) => {
    res.send('postSignout');
  },
  postLogin: (req, res) => {
    console.log(req.body);

    res.sendStatus('200');
  }
};
