import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Signin = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const token = useSelector((store) => store.user.token)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            navigate('/feed')
        }
    }, [token])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.email || !user.password) {
            return;
        }
        dispatch(signInUser(user));
        setUser({
            username: "",
            email: "",
            password: ""
        })
    };
    return (<>
        <Form className='mx-auto'>
            <h1 className='display-5 mb-4'>Sign in</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={user.email} onInput={(e) => setUser({ ...user, email: e.target.value })} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={user.password} onInput={(e) => setUser({ ...user, password: e.target.value })} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Sign in
            </Button>
        </Form>
    </>)
}