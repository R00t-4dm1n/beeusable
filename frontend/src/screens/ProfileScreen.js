import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile} from '../actions/userActions'  

const ProfileScreen = ({location, history})  => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    
    const dispatch = useDispatch()
    
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo} = userLogin


    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        } else{ 
            if(!user.name){
                dispatch(getUserDetails('profile'))
            } else{
                setName(user.name)
                setEmail(user.email)
                setPhoneNumber(user.phoneNumber)
            }

        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => { 
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        } else{
            dispatch(updateUserProfile({id: user._id, name, email, phoneNumber, password}))
        }
    }
    
    return <Row>

        <Col md={3}>
        <h2>User Profile</h2> 
           {message && <Message variant='danger'>{message}</Message>}
           {error && <Message variant='danger'>{error}</Message>}
           {success && <Message variant='success'>Profile Updated</Message>}
           {loading && <Loader />}
           <Form onSubmit = {submitHandler}>
           
           <Form.Group className='py-2' controlId = 'name'>
                   <Form.Label>Name</Form.Label>
                   <Form.Control
                     type='name'
                     placeholder='Enter name'
                     value={name}
                     onChange={(e) => setName(e.target.value)}>

                     </Form.Control>
               </Form.Group>



               <Form.Group className='py-2' controlId = 'email'>
                   <Form.Label>Email Address</Form.Label>
                   <Form.Control
                     type='email'
                     placeholder='Enter email'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}>

                     </Form.Control>
               </Form.Group>

               <Form.Group className='py-2' controlId = 'phoneNumber'>
                   <Form.Label>Phone Number</Form.Label>
                   <Form.Control
                     type='phonenumber'
                     placeholder='Enter phone number'
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}>

                     </Form.Control>
               </Form.Group>

               
               
               <Form.Group className='py-2' controlId = 'password'>
                   <Form.Label>Password</Form.Label>
                   <Form.Control
                     type='password'
                     placeholder='Enter password'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}>

                     </Form.Control>
               </Form.Group>

               <Form.Group className='py-2' controlId = 'confirmpassword'>
                   <Form.Label>Confirm Password</Form.Label>
                   <Form.Control
                     type='password'
                     placeholder='Confirm password'
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}>

                     </Form.Control>
               </Form.Group>

                
                
                <Button type='submit' variant='primary'>
                    Update
                </Button>

           </Form>
 </Col>
    
    </Row>
    
}

export default ProfileScreen
