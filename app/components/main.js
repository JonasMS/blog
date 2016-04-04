var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <History/>
    );
  }
});

var History = React.createClass({
  render: function(){
    return(
      <div className="historyBox">
        <ul>
          <li>2010: Studied at Tel Aviv University</li>
          <li>2011: Developed the operations of a grocery delivery service at STRATAM Consulting Latin America</li>
          <li>2012/13: Researched the sharing economy at Mesh Labs</li>
          <li>2014: Recruited talent at silicon valley tech companies with Binc</li>
          <li>2015: Raised venture capital and made the world a better place with Enrou, began bringing people together with Tea with Strangers, finished studying Philosophy and Business at UCLA</li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));