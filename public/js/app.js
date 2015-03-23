var React = require('react'),
    Cms = require('./components/Cms.react');

// export for http://fb.me/react-devtools, only in development mode
if (process.env.NODE_ENV === 'development') {
  window.React = React;
}

React.render(<Cms />, document.body);
