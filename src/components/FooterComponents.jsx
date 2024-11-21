import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom' 
import Logo from '../assets/img/logo-tendo-white.png'

const FooterComponents = () => {
  return (
    <div>
      <div className='footer py-5'>
      <Container>
        <Row className=''>
          <Col className='d col-md-12 col-sm-12' lg='5'>
            <img src={Logo} alt="" className='pb-3' />
            <p className='desc'>We create timeless furniture that combines quality, functionality, and elegance, helping you turn your house into a beautiful, comfortable home.</p>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col-md-12 col-sm-12 col mt-lg-0 mt-5 links'>
            <h5 className='fw-bold'>Services</h5>
            <Link to='/' className='mt-2 text-decoration-none'>Email Marketing</Link>
            <Link to='kelas' className='mt-2 text-decoration-none'>Campaign</Link>
            <Link to='testimonial' className='mt-2 text-decoration-none'>Branding</Link>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col-md-12 col-sm-12 col mt-lg-0 mt-5 links'>
            <h5 className='fw-bold'>Furnitures</h5>
            <Link to='/' className='mt-2 text-decoration-none'>Beds</Link>
            <Link to='kelas' className='mt-2 text-decoration-none'>Chair</Link>
            <Link to='testimonial' className='mt-2 text-decoration-none'>All</Link>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col-md-12 col-sm-12 col mt-lg-0 mt-5 links'>
            <h5 className='fw-bold'>Follow Us</h5>
            <Link to='/' className='mt-2 text-decoration-none'><i className="fa-brands fa-facebook-f mx-1"></i> Facebook</Link>
            <Link to='kelas' className='mt-2 text-decoration-none'><i className="fa-brands fa-twitter mx-1"></i> Twitter</Link>
            <Link to='testimonial' className='mt-2 text-decoration-none'><i className="fa-brands fa-instagram mx-1"></i> Instagram</Link>
          </Col>
        </Row>

        <Row className='footer-bottom'>
          <Col>
            <p className='text-center px-md-0 px-3 pt-5 pb-0'>&copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'>UIBYFAIZAl</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default FooterComponents