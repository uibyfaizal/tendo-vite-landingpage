import {Row, Card, Col} from 'react-bootstrap'
import { allProduct } from '../data'


const AllProductPages = () => {
  return (
    <div className="allProduct">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center justify-content-center">
             <h2 className='fw-bold'>Premium Furniture for Every Style</h2>
              <p>No matter your homes style, we offer a wide range of sofas, tables, chairs, and cabinets crafted from the finest materials with meticulous design details.</p>
          </div>
        </div>

        <Row>
        {allProduct.map((product) => {
            return  (
                <Col key={product.id} className='col-lg-3'  data-aos='fade-up' data-aos-duration='2000'>
                    <Card className='shadow mt-4' >
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body className='card-content'>
                            <p className='m-1'>{product.category}</p>
                            <h5 className='m-1'>{product.title}</h5>
                            <div className="star">
                                <i className={product.star1}></i>
                                <i className={product.star2}></i>
                                <i className={product.star3}></i>
                                <i className={product.star4}></i>
                                <i className={product.star5}></i>
                            </div>
                            <div className="pricing">
                            <p className=' m-0'>{product.price}</p>
                            <button className='btn btn-dark m-0'>{product.plus}</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })}
        </Row>
      </div>
    </div>
  )
}

export default AllProductPages