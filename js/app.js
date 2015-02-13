var Hello = React.createClass({
  render: function () {
    var output;
    
    output = React.DOM.div({
      children: 'Hello world'
    });
    
    return output;
  }
});

React.renderComponent(Hello(), document.body);