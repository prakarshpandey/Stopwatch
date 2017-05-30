var Stopwatch = React.createClass({
  getInitialState: function(){
    return {
      milliSecondsElapsed: 0,
      timerStarted: false,
      laps: [],
    }
  },

  handleStartClick: function(){
   var _this = this;
   if(! _this.state.timerStarted){
     _this.state.timerStarted = true;
     this.incrementer = setInterval(function(){
       _this.setState({
         milliSecondsElapsed: (_this.state.milliSecondsElapsed + 1)
       });
     }, 10);
   }
  },

  handleStopClick: function(){
      clearInterval(this.incrementer);
      this.state.timerStarted = false;
  },

  handleReset: function(){
    clearInterval(this.incrementer);
    this.setState(this.getInitialState);
  },

  handleLaps: function(){
    if(this.state.timerStarted){
      this.setState({
        laps: this.state.laps.concat([this.timeString()])
      });
    }
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

  timeString: function(){
    var mins = this.getMinutes();
    var seconds = this.getSeconds();
    var millis = this.getMilliSeconds();
    return mins + ':' + seconds + ':' + millis;
  },

  render: function(){
    return(
      <div>
        <h1>{this.timeString()}</h1>
        <button type="button" onClick = {this.handleStartClick}>Start</button>
        <button type="button" onClick={this.handleStopClick}>Stop</button>
        <button type="button" onClick={this.handleReset}>Reset</button>
        <button type="button" onClick={this.handleLaps}>Lap</button>
        <h1>{this.state.laps}</h1>
      </div>
    );
  },
});

ReactDOM.render(<Stopwatch />, document.body);
