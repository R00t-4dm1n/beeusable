import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';

const App = () => {
  return (
    <Router>
    <Header />
    <main className = 'py-3'>
      <Container>
        <Route path ='/login' component={LoginScreen} />
        <Route path ='/register' component={RegisterScreen} />
        <Route path ='/profile' component={ProfileScreen} />
        <Route path='/product/:id' component={Productscreen}  />
        <Route path='/admin/userlist' component={UserListScreen}  />
        <Route path='/admin/user/:id/edit' component={UserEditScreen}  />
        <Route path='/user/productlist' component={ProductListScreen}  />
        <Route path='/user/product/:id/edit' component={ProductEditScreen}  />
        <Route path='/' component={Homescreen} exact />
     </Container>
     </main>
     <Footer/> 
     </Router>
  )
}

export default App
