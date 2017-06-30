module.exports = {
  pageOne: (req, res) => {
    res.send('pageOne');
  },
  pageTwo: (req, res) => {
    res.send('pageTwo');
  },
  pageThree: (req, res) => {
    res.send('pageThree');
  },
  detail: (req, res) => {
    res.send(req.params.page);
  }
};
