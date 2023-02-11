import NavBar from '../NavBar/NavBar'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"
import Card from 'react-bootstrap/Card';
import React from "react";
function Home(){
    return(
        <div className='hm'>
            <h2>About us!!</h2>
            <h1>Insurance management</h1>
            <b>
            The Bank Insurance Fund is the federal fund used to insure bank deposits of national and state banks that are members of the federal reserve system. Bank insurance helps protect individuals who deposit their savings in banks against commercial bank insolvency.
            </b>
            
        <div className='cls'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bl-i.thgim.com/public/portfolio/ad1cvz/article30381993.ece/alternates/FREE_1200/BL24Lifeinsurance"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.paisabazaar.com/wp-content/uploads/2018/11/01-3-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://etimg.etb2bimg.com/photo/61020165.cms"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <Card body style={{color:'black'}}>
    Life can throw up any kind of unforeseen risk, arising from a medical emergency, an accident, a natural calamity or the loss of a loved one. So now you can protect yourself and your family against all risks with our Online Insurance Plans and get the policy instantly here with just a few clicks. High medical bills, expensive repairs to your vehicle or medical emergencies while travelling need not be a worry if you have the right insurance policy in place.
As a certified corporate agent of LIC of India, Max Life Insurance, Bajaj Allianz Life Insurance, Tata AIG General Insurance, ICICI Lombard General Insurance, Aditya Birla Health Insurance and Niva Bupa Health Insurance, Axis Bank has solutions to cater to your various needs. Enjoy freedom from financial worries by purchasing the insurance plan most suited to your requirements.
</Card>
<div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">
                                Contact us
                            </h3>
                            <h1 className="display-6 text-center mb-4"> Have Some <b>Querys</b>

                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://i.pinimg.com/originals/18/4d/ae/184daedf4696f8b63c1ea3980904ba3e.jpg" alt="Contact"
                                className="w-50" />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                            <div class="mb-3">
                                    <label for="name" class="form-label">Your name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Akanksha Mary" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" className ="btn btn-primary">Send Message 
                                <i className="fa fa-paper-plane ms-2">
                                    </i></button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
}
export default Home;