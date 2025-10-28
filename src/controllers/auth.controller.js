export const register = (req, res) => {
  res.send('Register Controller');
};

export const login = (req, res, next) => {
  return next(new Error('This is error'));
  res.json({
    msg: 'Login Controller',
    body: req.body,
  });
};

export const getMe = (req, res) => {
  res.json({ msg: 'GetMe controller' });
};
