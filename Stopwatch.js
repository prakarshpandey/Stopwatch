var Stopwatch = React.createClass({
  getInitialState: function(){
    return {
      milliSecondsElapsed: 0
    }
  },

  handleStartClick: function(){
   var _this = this;
   this.incrementer = setInterval(function(){
     _this.setState({
       milliSecondsElapsed: (_this.state.milliSecondsElapsed + 1)
     });
   }, 10);
  },

  handleStopClick: function(){
      clearInterval(this.incrementer);
  },

  handleReset: function(){
    clearInterval(this.incrementer);
    this.setState({
      milliSecondsElapsed: 0
    })
  },

  getMilliSeconds: function(){
    var milliSeconds = '00'+ (this.state.milliSecondsElapsed % 100);
    return milliSeconds.slice(-2);
  },

  getSeconds: function(){
    var seconds = '0' + Math.floor(this.state.milliSecondsElapsed / 100);
    return seconds.slice(-2);
  },

  getMinutes: function(){
    return Math.floor(this.getSeconds() / 60);
  },


  render: function(){
    return(
      <div>
        <h1>{this.getMinutes()}:{this.getSeconds()}:{this.getMilliSeconds()}</h1>
        <button type="button" onClick = {this.handleStartClick}>Start</button>
        <button type="button" onClick={this.handleStopClick}>Stop</button>
        <button type="button" onClick={this.handleReset}>Reset</button>
      </div>
    );
  },

});

ReactDOM.render(<Stopwatch />, document.body);
