import React from "react";
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom";
import icon from '../src/images/blog-icon.png'
import AddContact from "./views/addcontactpage";
import { Homepage } from "./views/homepage";
import './AppRouter.css'
class AppRouter extends React.Component{
    render(): React.ReactNode {
        if(sessionStorage.getItem('addbook')==null){
            sessionStorage.setItem('addbook',JSON.stringify([]))
        }
        if(sessionStorage.getItem('id')==null){
            sessionStorage.setItem('id',JSON.stringify([0]))
        }
        return(
            <Router>
            <div className="margin">
				    <div className="navigation">
					    <div className="logo">
						    <img src={icon} alt="blog-icon"></img>
					    </div>
                    <nav>
					    <ul className="navigationBar">
					        <li>
                                <NavLink to='/'>HOME</NavLink>
                            </li>
					        <li>
                                <NavLink to='/Add'>+ADD</NavLink>
                            </li>
					    </ul>
                    </nav>
				    </div>
	            </div>
                <Routes>
                    <Route path='/' element={<Homepage/>}></Route>
                    <Route path="/Add" element={<AddContact/>}></Route>
                </Routes>
            </Router>
        )
    }
}
export default AppRouter