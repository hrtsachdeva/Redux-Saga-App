import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <center>
        Hi : <span>{this.props.a}</span>
        <br/>
        <button onClick={this.props.onAdd}>Increase</button>
        <button onClick={this.props.onSub}>Decrease</button>
        </center>
      </div>
    )
  }
}

 const mapDispatchToProps=(dispatch)=>{
   return {
     onAdd:()=>dispatch({type:"ADD"}),
     onSub:()=>dispatch({type:"SUB"})
   }

 }

 const mapStateToProps=(store)=>{
    return { a:store.a}
 }


export default connect(mapStateToProps,mapDispatchToProps)(App);