if (document.querySelectorAll('a').length) {
  require.ensure([], () => {
    const Button = require('./Components/Button.js');
    const button = new Button('google.com');

    button.render('a')
  });
}