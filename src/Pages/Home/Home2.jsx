import React, { Fragment, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Home.css"
import { Router, useNavigate } from 'react-router-dom';
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import slider1 from "../../images/slider1.jpg"
import slider2 from "../../images/slider2.jpg"
import slider3 from "../../images/back2.jpg"
import { Card } from 'antd';
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
const { Meta } = Card;





const Home = (props) => {


  const [productData, setProductData] = useState({});




  async function fetchOne(_id){
    const response = await fetch(`http://localhost:3000/Products/${_id}`);
    const data = await response.json();
    // console.log(data);
    setProductData(data);
    console.log(productData);   
  }




    return (
      
      <Fragment>
        
            {/* slider */}
            <div className="bacgroundflexability mt-5"></div>
            {/* <section className="slider"></section>
            <div className="bacgroundflexability mt-5"></div> */}
            <div
            id="carouselExampleCaptions"
            className="header carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
            >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slider1} className="d-block w-100" alt="Banner 1" />
          <div className="carousel-caption d-none d-md-block">
            <div className="card bg-transparent" style={{ width: '18rem' }}>
              <div className="card-body">
      
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slider2} className="d-block w-100" alt="Banner 2" />
          <div className="carousel-caption d-none d-md-block">
            <div className="card bg-transparent" style={{ width: '18rem' }}>
              <div className="card-body">
   
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slider3} className="d-block w-100" alt="Banner 3" />
          <div className="carousel-caption d-none d-md-block">
            <div className="card bg-transparent" style={{ width: '18rem' }}>
              <div className="card-body">
              
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
            
            
            {/* End of slider */}


            {/* banner section */}
            <div className="container text-center">
                <div className="row">
                    <div className="banner1 mt-5 col-12 col-lg-6 col-md-12">
                        <img src={banner1} alt="logo" />
                        <h1>SAVE <span>10%</span></h1>

                    </div>
                    <div className="banner2 mt-5 col-12 col-lg-6 col-md-12">
                        <img src={banner2} alt="logo" />
                        <h1>SAVE <span>10%</span></h1>
                    </div>
                </div>
            </div>
            {/* End of banner section */}


            {/* Top Collection section */}
            <div className="container mt-5">
                <h6 className="text-center"><span>Special Offer</span></h6>
                <h2 className="text-center">TOP COLLECTION</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit sapiente omnis error commodi optio, quod excepturi neque eos ducimus.</p>

            </div>
            {/* End of Top Collection section */}
            
            {/* Cards section */}

            {/* <i class="far fa-regular fa-star text-gold"></i> */}
            {/* <Card
                hoverable
                style={{
                width: 240,
                }}
                cover={<img alt="example" src="Images/1.jpg" />}
                >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card> */}
            <div className="container text-center ">

                {props.dataRef.map((item, index) => {
                        return (
                           
                          <Link key={item.id} to={'/ProductDetails'} onClick={() => {
                            fetchOne(item.id);   
                          }}>
                              <div  className=" row product-card d-inline-block justify-content-center mt-4 me-4  text-center" >
                                
                                
                                  <Card
                                      hoverable
                                      style={{
                                      width: 240,
                                      }}
                                      cover={<img alt="example" src={item.img}  />}
                          
                                      >
                                      <Meta title={item.title} description={item.price} />
                                  </Card> 
                                
                                
                                <div className="addtocart">
                                  <Link>Add to cart</Link>
                                </div>
                                <div className="logos">
                                   
                                   <a href="#"><i className="fa fa-heart logo"></i></a>
                                   <a href="#"><i className="fa fa-duotone fa-solid fa-cart-shopping logo logo2 mt-4"></i></a>
                                   {/* <i class="fa-duotone fa-solid fa-cart-shopping"></i> */}

                                </div>
                            </div>
                               
                           </Link>
                        );

                    })
                }

            </div>
                

                {/* <button className="btn btn-primary" onClick={()=>console.log(props.dataRef)}> get fetched</button> */}


            {/* End of Cards section */}



                
      </Fragment>

    
    );

}


export default Home;