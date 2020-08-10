import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/index'
import { useForm } from 'react-hook-form'

import { BodyDiv, RegDiv, Form, Info, FormBody } from './style'

export function Register() {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        console.log(data, "Yeah")
        document.getElementById("successMessage").innerHTML =  "loading..."

        const opts = {
            brand: data.Brand,
            color: data.Color,
            seats: data.Seats,
            plate: data.PlateNumber,
            model: data.Model,
            membership: data.Membership
        }

        fetch('https://bus-registration-test.herokuapp.com/buses/register', {
            method: 'post',
            body: JSON.stringify(opts)
        }).then(function(response) {
            return response.json()
        }).then(function(data) {
            document.getElementById("successMessage").innerHTML =  "Registration sucessfully..."
            document.getElementById("Brand").value = ""
            document.getElementById("Color").value = ""
            document.getElementById("Seats").value = ""
            document.getElementById("PlateNumber").value = ""
            document.getElementById("Model").value = ""
            document.getElementById("Membership").value = ""
            setTimeout(() => {
                  document.getElementById("successMessage").innerHTML =  "Send message"
            }, 4000)
            console.log(data)
        }).catch(err => {
            console.log(err)
            document.getElementById("successMessage").innerHTML =  "Error sending message..."
        }) 
    }

    console.log(errors)

    return (
        <BodyDiv>
            <Header />
            <RegDiv>
                <h1>Register Your Bus</h1>
            </RegDiv>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Info>
                    <div className="info-main">
                        <img src={require("../../assets/bus.png")} />
                        <div>
                            <p>The purpose of registering, is to ensure your safety...</p>
                        </div>
                    </div>
                </Info>
                <FormBody>
                    <h3>Registration Form</h3>
                    <div>
                        <div>
                            <label>Brand</label>
                            <input type="text" name="Brand" id="Brand" ref={register({required: true, maxLength: 80})} />
                        </div>
                        <div>
                            <label htmlFor="">Color</label>
                            <input type="text" name="Color" id="Color" ref={register({required: true, maxLength: 80})} />
                        </div>
                        <div>
                            <label htmlFor="">Seats</label>
                            <input type="text" name="Seats" id="Seats" ref={register({required: true, maxLength: 80})} />
                        </div>
                        <div>
                            <label htmlFor="">Plate Number</label>
                            <input type="text" name="PlateNumber" id="PlateNumber" ref={register({required: true, maxLength: 80})} />
                        </div>
                        <div>
                            <label htmlFor="">Model</label>
                            <input type="text" name="Model" id="Model" ref={register({required: true, maxLength: 80})} />
                        </div>
                        <div>
                            <label htmlFor="">Membership</label>
                            <input type="text" name="Membership" id="Membership" ref={register({required: true, maxLength: 80})} />
                        </div>
                        <div>
                            <button type="submit" id="successMessage">Submit</button>
                        </div>
                    </div>
                </FormBody>
            </Form>
            <Footer />
        </BodyDiv>
    )
}

 
