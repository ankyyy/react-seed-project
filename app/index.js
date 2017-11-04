import debug from 'debug'
import React from 'react'
import { render } from 'react-dom'
import Main from './components/Main'
import Item from './components/listItem'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const log = debug('application:bootstrap')

log('creating application dwdsade')
const applicationNode = document.createElement('div')
applicationNode.className = 'container'
applicationNode.id = 'application'

log('adding application node to body')
document.body.appendChild(applicationNode)
const add = function(e){
items.push(e.target.value)
}
render(<div><Main /></div>, applicationNode, () => {
    log('finished mounting application')
})
