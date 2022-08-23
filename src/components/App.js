import React from 'react';
import '../stylesheet/Index.css';
import Header from './Header';
import Tags from './Tags';
import Battle from './Battle';
import Fight from './Fight';
import {Routes, Route} from "react-router-dom"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isDark:false,
      fname:"",
      secoundName:"",
      fdata:null,
      sdata:null,
      isOpen:false
    }
  }
  handelfame = (e) => {
  this.setState({fname:e.target.value});
  }
  handelSame = (e) => {
    this.setState({secoundName:e.target.value});
  }
  handelSubmitOne = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.fname}`).then((res) => res.json()).then((data) => this.setState({fdata:data}));
  }
  handelSubmitSecound = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.secoundName}`).then((res) => res.json()).then((data) => this.setState({sdata:data}));
  }
  handelrenderone = () => {
    this.setState({fdata:null})
  }
  handelrendersec = () => {
    this.setState({sdata:null})
  }
  handeldark = () => {
    this.setState({isDark:!this.state.isDark})
  }
  render(){
    return (
      <div className={!this.state.isDark ? 'bg-dark' : 'bg-light'}>
        <div className='container pt-5 pb-3'>
          <Header dark={this.state.isDark} handeldark={this.handeldark}  />
          <Routes>
              <Route path="/" element={<Tags/>} />
              <Route path="battle" element={<Battle handelSame={this.handelSame} handelSubmitOne={this.handelSubmitOne} handelfame={this.handelfame} handelSubmitSecound={this.handelSubmitSecound} fdata={this.state.fdata} sdata={this.state.sdata} />} />
              <Route path='fight' element={<Fight fdata={this.state.fdata} sdata={this.state.sdata} />}/>
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;
