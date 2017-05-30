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
    var totSeconds = Math.floor(this.state.milliSecondsElapsed / 100);
    var seconds = '0' + (totSeconds % 60)
    return seconds.slice(-2);
  },

  getMinutes: function(){
     var totSeconds = Math.floor(this.state.milliSecondsElapsed / 100);
     return Math.floor(totSeconds / 60)
  },


  render: function(){
    return(
      <div>
        <h2>{this.getMinutes()}:{this.getSeconds()}:{this.getMilliSeconds()}</h2>
        <button type="button" onClick = {this.handleStartClick}>Start</button>
        <button type="button" onClick={this.handleStopClick}>Stop</button>
        <button type="button" onClick={this.handleReset}>Reset</button>
      </div>
    );
  },

});

ReactDOM.render(<Stopwatch />, document.body);
