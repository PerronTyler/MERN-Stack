import React, { useState } from 'react'

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
}
const UserForm2 = () => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const [isValid, setIsValid] = useState(false)
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid){
        console.log(values)
        setValues(initialState)
    }
    }
    const handleValidation = (e) => {
        let isValidSubmission = true
        const fieldName = e.target.name
        const value = e.target.value
        if (fieldName === 'firstname'){
            if(value.length < 1) {
                setErrors({...errors, [fieldName]:"Firstname is required!"});
                isValidSubmission = false
            } else if(value.length < 3) {
                setErrors({...errors, [fieldName]:"Firstname must be 3 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        if (fieldName === 'lastname'){
            if(value.length < 1) {
                setErrors({...errors, [fieldName]:"lastname is required!"});
                isValidSubmission = false
            } else if(value.length < 3) {
                setErrors({...errors, [fieldName]:"lastname must be 3 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        if (fieldName === 'email'){
            if(value.length < 1) {
                setErrors({...errors, [fieldName]:"email is required!"});
                isValidSubmission = false
            } else if(value.length < 3) {
                setErrors({...errors, [fieldName]:"email must be 3 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        if (fieldName === 'password'){
            if(value.length < 1) {
                setErrors({...errors, [fieldName]:"password is required!"});
                isValidSubmission = false
            } else if(value.length < 8) {
                setErrors({...errors, [fieldName]:"password must be 8 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        if (fieldName === 'confirmpassword'){
            if(value.length < 1) {
                setErrors({...errors, [fieldName]:"confirmpassword is required!"});
                isValidSubmission = false
            } else if(value.length < 8) {
                setErrors({...errors, [fieldName]:"confirmpassword must be 8 characters or longer!"});
                isValidSubmission = false
            }else if(values.password !== value){
                setErrors({...errors, [fieldName]:"passwords must match!"});
                isValidSubmission = false
            }else {
                setErrors({...errors, [fieldName]:""});
            }
        }
        setIsValid(isValidSubmission)
    }
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor='firstname'>First Name: </label>
                    <input name='firstname' type="text" value={values.firstname}  onChange={handleChange} onBlur={handleValidation} />
                    {errors.firstname && <p style={{color:'red'}}>{ errors.firstname }</p>}
            </div>
            <div>
                    <label htmlFor='lastname'>last Name: </label>
                    <input name='lastname' type="text" value={values.lastname}  onChange={handleChange} onBlur={handleValidation} />
                    {errors.lastname && <p style={{color:'red'}}>{ errors.lastname }</p>}
            </div>
            <div>
                    <label htmlFor='email'>Email: </label>
                    <input name='email' type="text" value={values.email}  onChange={handleChange} onBlur={handleValidation} />
                    {errors.email && <p style={{color:'red'}}>{ errors.email }</p>}
            </div>
            <div>
                    <label htmlFor='password'>Password: </label>
                    <input name='password' type="text" value={values.password}  onChange={handleChange} onBlur={handleValidation} />
                    {errors.password && <p style={{color:'red'}}>{ errors.password }</p>}
            </div>
            <div>
                    <label htmlFor='confirmpassword'>Confirm Password: </label>
                    <input name='confirmpassword' type="text" value={values.confirmpassword}  onChange={handleChange} onBlur={handleValidation} />
                    {errors.confirmpassword && <p style={{color:'red'}}>{ errors.confirmpassword }</p>}
            </div>
            <button className='Submit'>Submit Form</button>
        </form>
    </div>
)
}

export default UserForm2