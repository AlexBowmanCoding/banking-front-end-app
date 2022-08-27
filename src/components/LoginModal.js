import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from '../features/userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button,
    Container
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUserLoginForm } from '../features/validateUserLoginForm';

const LoginModal = () => {

    const [loginModalOpen , setLoginModalOpen] = useState(false);

    const currentUser = useSelector(selectCurrentUser);

    const dispatch = useDispatch();

    const handleLogin= (values) => {
        const currentUser = {
            id: Date.now(),
            username: values.username,
            password: values.password
        }
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
    }
    return(
        <>
            <span className='navbar-text ml-auto'>
                    {currentUser ? (
                            <div >
                               Logged In
                            </div>
                        ) : (
                            <Container
                                onClick={() => setLoginModalOpen(true)}
                            >
                                <i /> Login
                            </Container>
                        )}
            </span>
            <Modal 
            isOpen={loginModalOpen}
            id='loginModal'
            >
                <ModalHeader
                className='modal-header'
                toggle={() => setLoginModalOpen(false)}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik
                    initialValues={{username: "", password: ""}}
                    onSubmit = {handleLogin}
                    validate = {validateUserLoginForm}
                    >
                        <Form>
                        <FormGroup>
                                <Label htmlFor='username'>
                                    Username
                                </Label>
                                <Field
                                    id='username'
                                    name= 'username'
                                    placeholder= 'Username'
                                    className= 'form-control'
                                    
                                >

                                </Field>
                                <ErrorMessage name='username'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor='password'>
                                    Password
                                </Label>
                                <Field 
                                    id='password'
                                    name= 'password'
                                    placeholder= 'Password'
                                    className= 'form-control'
                                >

                                </Field>
                                <ErrorMessage name='password'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary' className='login-button'>
                                Sign in
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default LoginModal

{/* <div id="loginModal" class="modal fade" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Login</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label class="sr-only" for="loginEmail">Email address</label>
                                    <input type="email" class="form-control form-control-sm" id="loginEmail" placeholder="Enter email"/>
                                </div>
                                <div class="form-group col-12">
                                    <label class="sr-only" for="loginPassword">Password</label>
                                    <input type="password" class="form-control form-control-sm" id="loginPassword" placeholder="Password"/>
                                </div>
                                <div class="col">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox"/>
                                        <label class="form-check-label"> Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <button type="button" class="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> */}