import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../../apicalls/user';


export default function Login() {
    const navigate = useNavigate();

    const onSubmit = async (value) => {

        try {

            const response = await LoginUser(value);

            if (response.success) {
                const authUser = response.data.user;
                const userToStore = {
                    name: authUser.displayName || "",
                    email: authUser.email,
                    uid: authUser.uid,
                }

                console.log("userToStore",userToStore)

                localStorage.setItem('user', JSON.stringify(userToStore));
                message.success(response.message);

                navigate('/');
                
            } else {
                throw new Error(response.message)
            }
        } catch (error) {
            message.error("Crap! Something wrong to Email or Password");
        }
    }

    useEffect( ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
         if(user) navigate("/");
    }, []);

    return (
        <div className='flex justify-center items-center h-screen'>
            <Form
                layout='vertical' className='w-400 bg-white p-2'
                onFinish={onSubmit}
            >
                <h1>Login</h1>
                <hr className='mb-2' />
                <Form.Item label="Email" name="email">
                    <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password type="password" />
                </Form.Item>
                <p className='mb-2 small-font'><Link to="/forgot-password" >Forgot Password</Link></p>
                <Button block type='primary' className='mb-1' htmlType='submit'>Sign In</Button>
                <Link to="/register">Don't have an account? <strong>Sign Up</strong></Link>
            </Form>
        </div>
    )
}
