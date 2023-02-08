import React from 'react';
import { Row, Col } from "reactstrap";
import media from '../img/media.png'
  
function Login (){
 return <div>
            {/* Login
            <div class="row">
                <div class="col font-w700 font-s60">
                    Login
                </div>
                <div class="text-gray font-s14">
                    Sign in with your data that you entered during your registration.
                </div>
                <div class="col bg-blue">a</div>
            </div> */}
            <Row className='margin-0'>
                <Col className='vertical-align'>
                    <div className='auto col-6'>
                        <div class="col font-w700 font-s60 text-black">
                            Login
                        </div>
                        <div class="text-gray font-s14">
                            Sign in with your data that you entered during your registration.
                        </div>
                        <div className='font-s12'>
                            <div className='font-w600' style={{ marginTop: "30px", marginBottom: "5px" }}>Email</div>
                            <input className='form-control' placeholder='name@example.com' />
                            <div className='font-w600' style={{ marginTop: "30px", marginBottom: "5px" }}>Password</div>
                            <input className='form-control' placeholder='min. 8 characters' />
                            <div className='vertical-align font-s14' style={{ margin: "30px 0" }}>
                                <input type={'checkbox'} style={{ marginRight: "10px" }} />
                                Keep me logged in
                            </div>
                            <div className='btn-blue'>
                                Login
                            </div>
                            <div className='text-center text-blue font-w700 font-s14'>
                                Forgot password
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='padding-0'>
                    {/* <div class="col bg-blue">b</div> */}
                    <img src={media} />
                </Col>
            </Row>
        </div>
}
  
export default Login;