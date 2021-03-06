import React, {   useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { listProductDetails} from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'





const Productscreen = ({ match, location}) => {
    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const productDetails = useSelector(state => state.productDetails)
    const {loading , error , product} = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    
    
    console.log(userInfo)

   

    

    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
        
      }, [dispatch, match ])
    
        
    return (
    <>
    <Link className='btn btn-light my-3' to='/'>
        Go Back
    </Link>
    {loading ? <Loader/> : error? <Message variant='danger'>{error}</Message> : (
        <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
            <ListGroup  variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ₹{product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                 Description: {product.description}
                </ListGroup.Item>
                
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                             Price:
                            </Col>
                            <Col>
                            <strong> ₹{product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                             Category:
                            </Col>
                            <Col>
                            <strong> {product.category}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                             Status:
                            </Col>
                            <Col>
                            {product.countInStock > 0 ? 'Available' : 'Sold'}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        { userInfo ? <Button className='btn-block' >{'Contact:'} {userInfo.phoneNumber}</Button> : 
                        <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>
                        <Button  className='btn-block' type='button' >
                             Login to Contact Seller 
                        </Button> </Link>}
                        

                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>

    )} 
    
</>
    )
}


export default Productscreen
