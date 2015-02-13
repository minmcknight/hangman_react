var ExampleApplication = React.createClass({
  render: function() {
    var message =
      'React is running successfully';

    return <p>{message}</p>;
  }
});

React.render(<ExampleApplication/>, document.getElementById('container'));