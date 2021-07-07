import React from 'react';
import './App.css';


class Names extends React.Component{

  constructor(props){
    super();
    this.state={counter:0};
    
this.counterPlus=this.counterPlus.bind(this);
this.counterMinus=this.counterMinus.bind(this);

  }
counterPlus(){
  this.setState(state=> ({
    counter: this.state.counter+1
  
  }))
}

counterMinus(){
this.setState(state=>({
counter:this.state.counter-1
}))
}


render(){
  return(
    <header> 
<div className="counter"> 

  <h1>{this.state.counter}</h1>
  <div className="buttons"> 
<div>
<button onClick={this.counterPlus}>+</button>
</div>

<div> 
<button onClick={this.counterMinus}>-</button>
</div>
</div>
</div>
</header>
    );
  }}


  export default Names;




