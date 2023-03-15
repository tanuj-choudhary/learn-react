import React,{Component} from 'react'
import HomePageCC from './classComponents/HomePageCC'
import HomePageFC from './functionalComponents/HomePageFC'

export default class App extends Component {
  render() {
    return (
      <>
      <div style={{
        display: 'flex', justifyContent: "center",alignItems:'center',height:'100vh',flexDirection:'column',gap:'400px'}}>
      <HomePageCC />
      </div>
      <div style={{
        display: 'flex', justifyContent: "center",alignItems:'center',height:'100vh',flexDirection:'column',gap:'400px'}}>
      <HomePageFC />
        </div>
      </>
    )
  }
}

