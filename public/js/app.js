var Cms = require('./components/Cms.react');


var React = require('react');
window.React = React; // export for http://fb.me/react-devtools


React.render(
    <Cms />,
    document.body
);
