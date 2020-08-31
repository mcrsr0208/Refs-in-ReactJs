import React,{ Component } from "react";
import "./style.css";

class App extends Component{

  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  handleClick = () =>{
    alert(this.inputRef.current.value);
    
  }

  render(){
    return(
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={ this.handleClick }>Submit</button>
      </div>
    );
  }
}

export default App;