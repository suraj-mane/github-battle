import React from "react";
import { NavLink } from "react-router-dom";


function Battle(props){
    return(
        <div className="container text-center">
            <h1 className="fs-2">Instructions</h1>
            <div className="d-flex justify-content-between mt-5">
                <div>
                    <h2>Enter two Github users</h2>
                    <div className="p-3 bg-secondary d-flex align-items-center justify-content-center ms-5 mt-5" style={{width:"200px", height:"200px"}}>
                        <i className="fa-solid fa-user-group" style={{fontSize:"80px", color:"bisque"}}></i>
                    </div>
                </div>
                <div className="ms-5">
                    <h2>Battle</h2>
                    <div className="p-3 bg-secondary d-flex align-items-center justify-content-center mt-5" style={{width:"200px", height:"200px"}}>
                        <i className="fa-solid fa-jet-fighter" style={{fontSize:"80px", color:"lightcoral"}}></i>
                    </div>
                </div>
                <div className="ms-5">
                    <h2>See the winner</h2>
                    <div className="p-3 bg-secondary d-flex align-items-center justify-content-center mt-5" style={{width:"200px", height:"200px"}}>
                        <i className="fa-solid fa-trophy" style={{fontSize:"80px", color:"#fada5e"}}></i>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="d-flex justify-content-between">
                    <form onSubmit={props.handelSubmitOne}>
                        <div>
                            <input type="text" onChange={props.handelfame} className="p-1" />
                            <button className="btn btn-primary ms-4" onSubmit={props.handelSubmitOne}>Submit</button>
                            {
                                props.fdata === null ? " " : <div className="bg-secondary mt-3 p-2">
                                    <div className="d-flex justify-content-between ">
                                        <img className="rounded-circle" src={props.fdata.avatar_url} alt="author" style={{width:"50px", height:"50px"}} />
                                        <h4 className="mt-2">{props.fdata.login}</h4>
                                        <p className="px-2 py-1 bg-danger rounded-circle mt-1" onClick={props.handelrenderone}>X</p>
                                    </div> 
                               </div>
                            }
                        </div>
                    </form>
                    <form onSubmit={props.handelSubmitSecound}>
                        <div>
                            <input type="text" className="p-1" onChange={props.handelSame} />
                            <button className="btn btn-primary ms-4" onSubmit={props.handelSubmitSecound}>Submit</button>
                            {
                                props.sdata === null ? " " : <div className="bg-secondary mt-3 p-2">
                                    <div className="d-flex justify-content-between ">
                                        <img className="rounded-circle" src={props.sdata.avatar_url} alt="author" style={{width:"50px", height:"50px"}} />
                                        <h4 className="mt-2">{props.sdata.login}</h4>
                                        <p className="px-2 py-1 bg-danger rounded-circle mt-1" onClick={props.handelrendersec}>X</p>
                                    </div> 
                               </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div>
                {
                    props.sdata === null ? " " : <button className="btn btn-warning"><NavLink to="/fight">Battle</NavLink></button>
                }
            </div>
        </div>
    )
}


export default Battle;