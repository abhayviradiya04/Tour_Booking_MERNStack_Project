/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */

/* eslint-disable jsx-a11y/alt-text */
import React,{useRef,useEffect,useContext} from "react"
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link , useNavigate } from 'react-router-dom'

import logo from '../../assets/images/logo2.png'
import './Header.css'
import AuthContext from './../../context/AuthContext'


const nav__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
]

const Header = () => {
    useEffect(() => {
        const headerElement = document.getElementById('header');
        if (headerElement) {
            headerElement.classList.add('some-class');
        }
    }, []);

         
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const {user,dispatch} = useContext(AuthContext);

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        navigate('/')
    }
    useEffect(() => {
        // Ensure that headerRef is not null before accessing classList
        if (headerRef.current) {
            headerRef.current.classList.add('sticky__header');
        }
    }, []);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };
    
    useEffect(() => {
        stickyHeaderFunc();
        return window.removeEventListener("scroll", stickyHeaderFunc);
    }, []);

    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
    





    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        {/* {====Logo====} */}
                        <div className="logo">
                            {/* <img src={logo} alt="Logo" className=""></img> */}
                            <h2>Tour Book!ng</h2>
                        </div>

                        {/* {====Menu====} */}
                        <div className="navigation " ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu d-flex align-items-center gap-5">
                                {

                                    nav__links.map((item, index) => (
                                        <li className="nav__item" key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : " "}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>


                        <div className="nav__right d-flex align-items-center gap-4 nav__item">
                            <div className="nav__btns d-flex align-items-center gap-4 nav__item">
                                {
                                    user? (
                                         <>
                                    <h5 className="mb-0">{user.username}</h5>
                                    <Button className="btn btn-light" onClick={logout}><i class="ri-login-box-line"></i></Button>
                                    </>
                                    ) : (
                                        <>
                                          <Button className="btn secondary__btn ">
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                </Button>

                                <Button className="btn primary__btn">
                                    <Link to='/register'>
                                        Register
                                    </Link>
                                </Button>

                            
                                        
                                        </>
                                    )
                                }


                              
                            </div>

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i class="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;