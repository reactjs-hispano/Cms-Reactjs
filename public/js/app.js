var React = require('react'),
    ReactDOM = require('react-dom'),
    Cms = require('./components/Cms.react');

// export for http://fb.me/react-devtools, only in development mode
if (process.env.NODE_ENV === 'development') {
  window.React = React;
}

ReactDOM.render(<Cms />, document.getElementById('main'));
