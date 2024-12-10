import { Container, Row, Col, Card } from "react-bootstrap";
import { productHome, testimonial } from "../data/index";

import Material1Img from "../assets/img/material-img.png";
import Material2Img from "../assets/img/material2-img.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const HomePages = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <Container>
          <Row>
            <Col
              lg="10"
              className="text-center mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="header-overlay">
                <h3>Bring Beauty & Comfort to Every Corner of our Home</h3>
                <p>
                  Discovering high-quality furniture designed to <br />
                  enhance and complete evry room.
                </p>
              </div>

              <div className="search-box">
                <input type="text" placeholder="Search here.." />
                <button>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="about">
        <Container>
          <Row>
            <Col>
              <h2
                className="fw-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Why Choose Us?
              </h2>
            </Col>
          </Row>

          <div className="row pt-4 about-section">
            <div
              className="col-lg-4 card-about"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h5 className="pb-2">High-Quality Materials</h5>
              <p>
                We take pride in sourcing only the finest, durable materials to
                ensure your furniture stands the test of time. From solid wood
                to premium upholstery, every piece is crafted with a commitment
                to sustainability and eco-friendliness, making it a perfect
                choice for those who value both quality and the environment.
              </p>
            </div>
            <div
              className="col-lg-4 card-about"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h5 className="pb-2">Exclusive Designs</h5>
              <p>
                Our collection features exclusive designs that seamlessly blend
                modern aesthetics with timeless elegance. Whether you are
                looking for minimalistic pieces to complement a contemporary
                home or intricate details that evoke a classic vibe, our
                furniture is crafted to suit diverse tastes and interior styles
                while standing out as statement pieces.
              </p>
            </div>
            <div
              className="col-lg-4 card-about"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h5 className="pb-2">Satisfaction Guarantee</h5>
              <p>
                We are committed to delivering not just quality furniture but
                also a seamless shopping experience. Enjoy hassle-free ordering,
                reliable support, fast delivery, and the added peace of mind
                with our comprehensive warranty program.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center justify-content-center">
              <h2 className="fw-bold">Premium Furniture for Every Style</h2>
              <p>
                No matter your homes style, we offer a wide range of sofas,
                tables, chairs, and cabinets crafted from the finest materials
                with meticulous design details.
              </p>
            </div>
          </div>

          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {productHome.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <Card className="shadow">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <p className="m-1">{product.category}</p>
                        <h5 className="m-1">{product.title}</h5>
                        <div className="star">
                          <i className={product.star1}></i>
                          <i className={product.star2}></i>
                          <i className={product.star3}></i>
                          <i className={product.star4}></i>
                          <i className={product.star5}></i>
                        </div>
                        <div className="pricing">
                          <p className=" m-0">{product.price}</p>
                          <button className="btn btn-dark m-0">
                            {product.plus}
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button
              onClick={() => navigate("/allproduct")}
              className="btn btn-cta"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              View Our Collection <i className="fa-solid fa-chevron-right"></i>
            </button>
          </Row>
        </div>
      </div>

      <div className="material1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <img src={Material1Img} alt="" />
            </div>

            <div className="col-lg-6 col-md-8 pt-4">
              <div className="title">
                <span className="mx-lg-5 m-2">PREMIUM MATERIALS</span>
                <h3 className="mx-lg-5 m-2">
                  Premium Craftsmanship for Timeless Quality
                </h3>
              </div>

              <div className="desc">
                <p className="mx-lg-5 m-2">
                  Exceptional furniture starts with the finest components, which
                  is why we craft every piece using carefully chosen,
                  high-quality elements for durability, style, and
                  sustainability.
                </p>
                <a
                  href=""
                  className="btn btn-cta mx-lg-5 m-2 mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  onClick={() => navigate("/LearnMore1")}
                >
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="material2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pt-5 col-md-8">
              <div className="title">
                <span className="mx-lg-5 m-2">PREMIUM MATERIALS</span>
                <h3 className="mx-lg-5 m-2">
                  Design Ideas to Inspire Your Space
                </h3>
              </div>

              <div className="desc">
                <p className="mx-lg-5 m-2">
                  Turn your home into a stylish sanctuary with our design ideas,
                  inspiring every room to achieve the perfect ambiance.
                </p>
                <a
                  href=""
                  className="btn btn-cta mx-lg-5 m-2 mt-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-md-8">
              <img src={Material2Img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="promo">
        <div className="container">
          <div className="row">
            <div className="col promo-bg">
              <h3 className="" data-aos="fade-up" data-aos-duration="1000">
                Up to 50% OFF! Shop now—limited <br />
                time!
              </h3>
              <a
                href=""
                className="btn btn-promo"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Explore Our Product Now{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="review">
        <div className="container">
          <div className="row">
            <div className="col justify-content-center mx-auto text-center">
              <h3 className="fw-bold">Our Reviews</h3>
            </div>
          </div>

          <Row data-aos="fade-up" data-aos-duration="1000">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonial.map((testi) => {
                return (
                  <SwiperSlide key={testi.id}>
                    <Card className="shadow">
                      <Card.Body>
                        <h6 className=" m-0 pb-2">{testi.user}</h6>
                        <div className="star m-0 pb-3">
                          <i className={testi.star1}></i>
                          <i className={testi.star2}></i>
                          <i className={testi.star3}></i>
                          <i className={testi.star4}></i>
                          <i className={testi.star5}></i>
                        </div>
                        <p>{testi.quote}</p>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
