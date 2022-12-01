import React, { useState } from 'react'
import "../App.css"
import logo from "../photos/istockphoto-1216798128-170667.jpg"
import "./StyleSheet.css"
import { NavHashLink as Link } from 'react-router-hash-link'

export default function Navbar() {





    return (

        <nav className=" nav navbar navbar-expand-lg fixed-top bg-white links">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" className='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 myDIV" >

                        <Link className='remove_underline ' smooth to="/path#home" activeClassName="selected"
                            activeStyle={{ color: 'red' }} >
                            

                                <a className="nav-link " aria-current="page" id="NavParText" >home</a>

                            
                        </Link>


                        <Link className='remove_underline ' smooth to="/path#aboutCorona" activeClassName="selected"
                            activeStyle={{ color: 'red' }} >
                            

                                <a className="nav-link " aria-current="page" id="NavParText" >about Corona</a>

                           
                        </Link>

                        <Link className='remove_underline' smooth to="/path#symptoms" activeClassName="selected"
                            activeStyle={{ color: 'red' }} >
                            

                                <a className="nav-link " aria-current="page" id="NavParText" >symptoms</a>

                           
                        </Link>

                        <Link className='remove_underline ' smooth to="/path#Prevention" activeClassName="selected"
                            activeStyle={{ color: 'red' }} >
                        
                                <a className="nav-link " aria-current="page" id="NavParText" href="#">Prevention</a>

                        </Link>

                        <Link className='remove_underline' smooth to="/path#treatment" activeClassName="selected"
                            activeStyle={{ color: 'red' }} >
                            

                                <a className="nav-link " aria-current="page" id="NavParText" href="#">Treatment</a>

                         
                        </Link>

                        <Link className='remove_underline ' smooth to="/path#faq" activeClassName="selected"
                            activeStyle={{ color: 'red' }}   >
                           
                                <a className="nav-link " aria-current="page" id="NavParText" href="#">FAQ</a>

                           
                        </Link>

                        <Link className='remove_underline ' activeClassName="selected" smooth to="/path#News"
                            activeStyle={{ color: 'red' }} >
                           

                                <a className="nav-link" aria-current="page" id="NavParText" >News</a>

                         
                        </Link>

                        <li className="">
                            <button className="btn btn-primary btn-floating reduis" type="submit">Do & Dont</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )




    // function customLink( {href ,children,...props}){
    //     const path=window.location.pathname
    //     if (path==href)
    //     return(
    //         <div className={path==href?"active":""}>
    //     <Link activeClass="active" className='remove_underline' smooth to={href} >
    //     <li className="nav-item active">
    //         <a className="nav-link "{...props}aria-current="page" id="NavParText">{children}</a>
    //     </li>
    //     </Link></div>)
    // }




}


