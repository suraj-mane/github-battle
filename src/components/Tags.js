import React from "react";
import{NavLink} from "react-router-dom";
 let allTags = [
    'all',
    'Javascript',
    'Ruby',
    'Java',
    'CSS',
    'Python'
]

class Tags extends React.Component {
    constructor(){
        super();
        this.state = {
            data:null,
            tag:"all",
        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tag}=stars&order=desc&type=Repositories`).then((res) => res.json()).then((data) => this.setState({data:data}));
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.tag !== this.state.tag){
            fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.tag}=stars&order=desc&type=Repositories`).then((res) => res.json()).then((data) => this.setState({data:data}));
        }
    }
    handelTag = (tag) => {
        this.setState({tag});
        console.log(tag);
    }
    render(){
       return(
        <div>
            <div>
                <ul className="d-flex justify-content-center container">
                   {
                    allTags.map((ele,i) => (
                        <li key={i} className="list-group-item me-2 fs-5 fw-bold" onClick={() => this.handelTag(ele)}>
                            <NavLink to="/" >{ele}</NavLink>
                        </li>
                    ))
                   }
                </ul>
            </div>
                {
                    this.state.data ? <Card data={this.state.data} /> : <Loader />
                }
        </div>
       )
    }
}

export default Tags;


function Loader(){
    return(
        <div className="text-center fs-2">        
            <h1>
              <span className="let1">l</span>  
              <span className="let2">o</span>  
              <span className="let3">a</span>  
              <span className="let4">d</span>  
              <span className="let5">i</span>  
              <span className="let6">n</span>  
              <span className="let7">g</span>  
            </h1>
        </div>
    )
}


function Card(props) {
    if(props.data.items){
        return(
            <div className="d-flex flex-wrap container">
                {
                    props.data.items.map((ele,i) => (
                        <div key={i} className="card p-3 text-center my-2 bg-secondary" style={{width:"273px"}}>
                            <h1 className="text-light fs-4">#{i+1}</h1>
                            <img src={ele.owner.avatar_url} className="card-img-top mx-auto p-1" alt="owner" style={{width:"100px"}}/>
                            <div className="card-body text-center">
                                <h1 className="text">{ele.name}</h1>
                                <div className="d-flex ms-2">
                                    <i className="fa-solid fa-user me-3" style={{color:"bisque"}}></i>
                                    <h6>{ele.name}</h6>
                                </div>
                                <div className="d-flex ms-2">
                                    <i className="fa-solid fa-star me-3" style={{color:"yellow"}}></i>
                                    <h6>{ele.stargazers_count}</h6>
                                </div>
                                <div className="d-flex ms-2">
                                    <i className="fa-brands fa-git-alt me-3" style={{color:"lightblue"}}></i>
                                    <h6>{ele.forks_count}</h6>
                                </div>
                                <div className="d-flex  ms-2">
                                    <i className="fa-solid fa-triangle-exclamation me-3" style={{color:"red"}}></i>
                                    <h6>{ele.open_issues}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}