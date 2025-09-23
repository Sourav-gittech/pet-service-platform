import React from 'react'
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom'
import Home from '../pages/cms/Home'
import NavbarSection from '../layout/header/NavbarSection'
import Error404 from '../pages/cms/Error404'
import FooterSection from '../layout/footer/FooterSection'
import UserLoginRegister from '../pages/cms/UserLoginRegister'
import About from '../pages/cms/About'
import Service from '../pages/cms/Service'
import Contact from '../pages/cms/Contact'
import Product from '../pages/cms/Product'
import Cart from '../pages/auth/Cart'
import UserDashboard from '../pages/auth/UserDashboard'
import AdminDashboard from '../pages/auth/AdminDashboard'
import TermsOfService from '../pages/cms/TermsOfService'
import VeterinarianDashboard from '../pages/auth/VeterinarianDashboard'

const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayoutRoutes = ['/user-register-login'];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <NavbarSection />}
      {children}
      {!hideLayout && <FooterSection />}
    </>
  )
}

const Routing = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/user-register-login' element={<UserLoginRegister />} />
          <Route path='/service' element={<Service />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/veterinarian-dashboard' element={<VeterinarianDashboard />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/terms' element={<TermsOfService />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default Routing
