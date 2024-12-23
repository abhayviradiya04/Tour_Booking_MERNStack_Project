import React, { useState, useContext } from "react"
import '../style/register.css'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user2.png'
import AuthContext from '../context/AuthContext.js'
import { BASE_URL } from './../utils/config.js'
import Swal from 'sweetalert2'; 

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
        role: "user"
    });

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const result = await res.json();

            if (!res.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: result.message
                });
                return;
            }

            dispatch({ type: 'REGISTER_SUCCESS' });
            
            // Display success message using SweetAlert
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Registered successfully. You can now login.'
            }).then(() => {
                navigate('/login');
            });
            
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.message
            });
        }
    }

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8' className="m-auto">
                            <div className="register__contain d-flex justify-content-between">
                                <div className="register__img">
                                    <img src={registerImg} alt="Register"></img>
                                </div>

                                <div className="register__form">
                                    <div className="user">
                                        <img src={userIcon} alt="User"></img>
                                    </div>
                                    <h2>Register</h2>

                                    <Form onSubmit={handleClick}>
                                        <FormGroup>
                                            <input type="text" placeholder="Enter UserName" required id="username" onChange={handleChange}></input>
                                        </FormGroup>
                                        <FormGroup>
                                            <input type="email" placeholder="Enter E-mail" required id="email" onChange={handleChange}></input>
                                        </FormGroup>
                                        <FormGroup>
                                            <input type="password" placeholder="Enter Password" required id="password" onChange={handleChange}></input>
                                        </FormGroup>
                                        <Button className="btn secondary__btn auth__btn" type="submit">
                                            Create Account
                                        </Button>
                                    </Form>
                                    <p>Already have an Account? <Link to='/login'>Login</Link></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Register;
