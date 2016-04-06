require('../../public/main.css');
var React = require('react');
var ReactDOM = require('react-dom');
var componentHandler = require('exports?componentHandler!../../node_modules/material-design-lite/material.js');

var Main = React.createClass({
  render: function(){
    return (
      <History/>
    );
  }
});

var Navigation = React.createClass({
  render: function(){
    return(
      <div className="navigation">

      </div>
    );
  }
});

var History = React.createClass({
  render: function(){
    return(
      <div id="mainContainer">
        <div className="header mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Me</a>
                <a className="mdl-navigation__link" href="">Projects</a>
                <a className="mdl-navigation__link" href="">Blog</a>
                <a className="mdl-navigation__link" href="">Adventures</a>
              </nav>
            </div>
          </header>
        </div>
        <div className="historyContainer mdl-card mdl-shadow--2dp">
          <ul id="highlightsList">
            <HistoryEvent year="2010" highlight="Studied at Tel Aviv University"/>
            <HistoryEvent year="2011" highlight="Developed the operations of a grocery delivery service at STRATAM Consulting Latin America"/>
            <HistoryEvent year="2012/13" highlight="Researched the sharing economy at Mesh Labs"/>
            <HistoryEvent year="2014" highlight="Recruited talent at silicon valley tech companies with Binc"/>
            <HistoryEvent year="2015" highlight="Raised venture capital and made the world a better place with Enrou, began bringing people together with Tea with Strangers, finished studying Philosophy and Business at UCLA"/>
            <HistoryEvent year="Current" highlight="Learning web development"/>
          </ul>
        </div>
        <RaisedButton id="emailBtn" text="Email Me"/>
      </div>

    );
  }
});

var HistoryEvent = React.createClass ({
  render: function() {
    return (
      <li>
        <span className="year">{this.props.year}:</span>
        <span className="yearHighlight">{this.props.highlight}</span>
      </li>
    );
  }
});

var RaisedButton = React.createClass ({
  render: function() {
    return(
        <button id={this.props.id} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          {this.props.text}
        </button>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));