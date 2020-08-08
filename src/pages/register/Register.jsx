import React from 'react'

import { Header } from '../../Components/Header/Header'
import { BodyDiv, RegDiv, Form, Info, FormBody } from './style';

export function Register() {
    console.log("js running")
    return (
        <BodyDiv>
            <Header />
            <RegDiv>
                <h1>Register Your Bus</h1>
            </RegDiv>
            <Form>
                <Info>
                    <h3>Information</h3>
                </Info>
                <FormBody>
                    <h3>Registration Form</h3>
                    <div>
                        <div>
                            <label>Brand</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Color</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Seats</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Plate Number</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Membership</label>
                            <input type="text"/>

                            <button>Submit</button>
                        </div>
                    </div>
                </FormBody>
            </Form>
        </BodyDiv>
    )
}

 
