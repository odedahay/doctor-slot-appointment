import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { CreateUser } from '../../apicalls/user';

export default function Register() {
    const navigate = useNavigate();

    const onSubmit = async (value) => {

        try {
           
            const response = await CreateUser(value);
           
            if (response.success) {
                message.success(response.message);
            } else {
                throw new Error(response.message)
            }

            navigate('/login');

        } catch (error) {
            message.error("Oops! Please check your submission");
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <Form
                layout='vertical' className='w-400 bg-white p-2'
                onFinish={onSubmit}
            >
                <h1>Register</h1>
                <hr className='mb-2' />
                <Form.Item label="Name" name="name">
                    <Input type="text" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input.Password type="password" />
                </Form.Item>
                <Button block type='primary' className='mb-1' htmlType='submit'>Register</Button>
                <Button block onClick={() => navigate('/')} className='mb-2'>Cancel</Button>
                <Link to="/login">Already have an account? <strong>Sign In</strong></Link>
            </Form>
        </div>
    )
}
