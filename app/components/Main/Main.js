import React, { Component, PropTypes } from 'react'
// import img from './image3.jpeg'
// import styles from './style.css'
import Item from '../listItem'

export default class Main extends Component {
  // static get displayName () {
  //   return 'Main'
  // }

  // static get propTypes () {
  //   return {}
  // }

  // static get defaultProps () {
  //   return {}
  // }

  constructor (props) {
    super(props)
    this.state={items:[],value:'',doneItems:[]}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleCheckForDone = this.handleCheckForDone.bind(this)
    
  }
   handleChange(e){
    this.setState({value:e.target.value,items:this.state.items})
  }
   handleClick(e){
     if(this.state.value){
    this.state.items.push(this.state.value)
    this.setState({value:'',items:this.state.items})}
  }
  handleCheck(e){
    if(e.target.checked){
      const items =  this.state.items
      const doneItems = this.state.doneItems
      const index = items.findIndex((item)=>item===e.target.value)
      const [doneItem] = items.splice(index,1)
      console.log(this.state)
      doneItems.push(doneItem)
      this.setState({value:'',items,doneItems})
      e.target.checked = false      
    }
  }
  handleCheckForDone(e){
    if(e.target.checked){
      const items =  this.state.items
      const doneItems = this.state.doneItems
      const index = doneItems.findIndex((item)=>item===e.target.value)
      const [item] = doneItems.splice(index,1)
      console.log(this.state)
      
      items.push(item)
      this.setState({value:'',items,doneItems})
      e.target.checked = false      
    }
  }

  render () {
    // const imgSrc = require('./image3.jpeg')
    const items=this.state.items
    const doneItems = this.state.doneItems
    const ctx =  this
    return (
      <div><table width="400px" height="100px">
        <tbody>
          <tr>
            <td>
        <input type="text" value={this.state.value} onChange={this.handleChange} /> 
        </td>
        <td>
        <button onClick={this.handleClick}>Add</button>
        </td>
          </tr>
        <tr>
          <td>
           Todo Items
          </td>
          <td>
          Done Items
          </td>
          </tr>
          <tr>
            <td>
            {items.map(function(item,index){
          return <Item name={item} key={index} handleCheck={ctx.handleCheck}/>})
          }
            </td>
            <td>
            {doneItems.map(function(item,index){
          return <Item name={item} key={'done'+index} handleCheck={ctx.handleCheckForDone}/>})
          } 
            </td>
            </tr>
          </tbody>
          </table>
      </div>
    );
  }
}
