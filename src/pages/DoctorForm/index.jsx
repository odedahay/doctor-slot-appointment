import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';

function DoctorForm() {
    const [days, setDays] = useState([]);

    const onSubmit = (values) => {
        values.days = days;
        console.log("Successful", values)
    }
    return (
        <div className='bg-white p-2 mt-2'>
            <h2>Apply for a Doctor Account</h2>

            {/* Professional information */}
            <Row>
                <Col span={16}>
                    <h3 className='my-1 pt-2'>Personal Information</h3>
                    <hr />
                </Col>
            </Row>
            <Form layout="vertical"
                autoComplete="off"
                className='my-1'
                onFinish={onSubmit}
            >
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Form.Item label="First Name" name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Last Name" name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={8}>

                        <Form.Item label="Email" name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='email' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>

                        <Form.Item label="Phone" name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={16}>
                        <Form.Item label="Address" name="address"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <textarea></textarea>
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={8}>

                        <Form.Item label="Website" name="website">
                            <input type='text' />
                        </Form.Item>
                    </Col>
                </Row>
                {/* Professional information */}
                <Row>
                    <Col span={16}>
                        <h3 className='my-1 pt-2'>Professional Information</h3>
                        <hr />
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>

                    <Col span={8}>

                        <Form.Item label="Specialty" name="specialty"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <select>
                                <option value="default">Please select</option>
                                <option value="dermatologist">Dermatologist</option>
                                <option value="gynecology">Gynecology</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="orthopedic">Orthopedic</option>
                                <option value="pediatrician">Pediatrician</option>
                                <option value="psychiatrist">Psychiatrist</option>
                                <option value="surgeon">Surgeon</option>
                                <option value="urologist">Urologist</option>
                            </select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>

                        <Form.Item label="Qualification" name="qualification"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <select>
                                <option value="default">Please select</option>
                                <option value="mbbs">MBBS</option>
                                <option value="md">MD</option>
                                <option value="ms">MS</option>
                                <option value="mds">MDS</option>
                            </select>
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={8}>

                        <Form.Item label="Experience" name="experience"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='number' />
                        </Form.Item>
                    </Col>
                </Row>
                {/* Work Hours */}
                <Row>
                    <Col span={16}>
                        <h3 className='my-1 pt-2'>Work Hours</h3>
                        <hr />
                    </Col>
                </Row>


                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Form.Item label="Start Time" name="startTime"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='time' />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="End Time" name="endTime"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='time' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Form.Item label="Fee" name="fee"
                            rules={[
                                {
                                    required: true,
                                    message: "Required"
                                },
                            ]}>
                            <input type='text' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={8}>

                        <div className='flex gap-1 mt-2'>
                            {[
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                                ,].map((day) => (
                                    <div key={day} className='flex gap-1 items-center pe-1'>
                                        <input type='checkbox' value={day}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setDays([...days, e.target.value])
                                                } else {
                                                    setDays(days.filter((item) => item !== e.target.value))
                                                }
                                            }}
                                        />
                                        <label>{day}</label>

                                    </div>
                                ))}
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row gutter={[16, 16]}>
                      
                     <Col span={8}>
                   
                        <div className='flex gap-1 mt-2'>
                            <Button type="primary" htmlType='submit'>Submit</Button>
                            <Button onClick={()=> navigate("/")}>Cancel</Button>
                        </div>
                     </Col>
                </Row>
            </Form>
        </div>
    )
}

export default DoctorForm
