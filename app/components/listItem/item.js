import React ,{Component,PropTypes} from 'react'
import c from './style.css'

export default class Item extends Component{
    constructor(props){
        super(props)
        // this.state = {value:''}
        // this.temp = this.temp.bind(this)
    }
    // temp(e) {
    //     this.setState({value:e.target.value})
    //     console.log(this.state)
    // }
    render(){
        return <div><input type="checkbox" name="item" value={this.props.name} onChange={this.props.handleCheck} />
        {this.props.name}</div>  
    }
}