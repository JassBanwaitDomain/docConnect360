import React from "react";

import {Link, useNavigate} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

import doctorApp6 from "../assets/images/doctorApp6.jpg";
import doctorApp3 from "../assets/images/DoctorApp3.jpg";
import doctorApp5 from "../assets/images/DoctorApp5.webp";
import doctorImg from "../assets/images/doctor5.jpg";
import videoIcon from "../assets/images/videoIcon3.png";
import faqImg from "../assets/images/dimg1.jpg";

import header1 from "../assets/images/headerImg2.png";
import header2 from "../assets/images/headerImg4.png";



import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";


const Home = () => {

  const navigate=useNavigate();

  const handleBtn=()=>{
    navigate('/doctors');
  }


  return(
    <>
        <section className="bg-gradient-to-r from-neutralColor via-neutral-200/80 to-greenColor pt-[15px] 2xl:h-[700px]">
                <div className="container ">
                    <div className="flex flex-col lg:flex-row gap-[25px] items-center justify-between">
                        <div className="hero_content">
                              
                            
                                <div className="lg:w-[570px] text-center mb-12">
                                    <h1 className="text-[36px] font-[800] leading-[46px] mb-12 md:text-[50px] sm:leading-[50px] md:leading-[50px]">
                                        We help patients live a healthy, longer life.
                                    </h1>
                                    <p className="text-[16px] mt-[10px] leading-6">Your Complete Healthcare Solution! Whether you're scheduling appointments, tracking medications, or staying informed about your health, we've got you covered. With user-friendly navigation and powerful features, managing your healthcare has never been more convenient. Take charge of your well-being and experience the future of healthcare management with DocConnect360 today!"</p>
                                    <button onClick={handleBtn}
                                    className="bg-logoColor text-[17px] w-[270px] h-[50px] rounded-full px-4 py-2 text-white font-semibold mt-6">Request an Appointment</button>
                                </div>
                        
                            
                          
                            
                            <div className="hero_counter  mt-[30px] lg:mt-[35px] ml-10 flex flex-col gap-5 mt-7 lg:flex-row lg:items-center lg:gap-[30px]">
                                <div>
                                    <h1 className="text-[26px] leading-[56px] font-bold lg:text-[36px] lg:leading-[54px] font-600 mr-2">30+</h1>
                                    <span className="bg-yellowColor w-[70px] h-1.5 rounded-full block mt-[-10px]"></span>
                                    <p className="text-[16px] mt-[10px] leading-6">Years of Experience</p>
                                </div>
                                <div>
                                    <h1 className="text-[26px] font-bold leading-[56px] lg:text-[36px] lg:text-[44px] lg:leading-[54px] font-[700]">15+</h1>
                                    <span className="bg-purpleColor w-[70px] h-1.5 rounded-full block mt-[-10px]"></span>
                                    <p className="text-[16px] mt-[10px] leading-6">Clinic Location</p>
                                </div>
                                <div>
                                    <h1 className="text-[26px] font-bold lg:text-[36px] lg:leading-[54px] font-[700]">100%</h1>
                                    <span className="bg-irisBlueColor w-[70px] h-1.5 rounded-full block mt-[-10px]"></span>
                                    <p className="text-[16px] mt-[10px] leading-6">Customer Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[30px] justify-end "> 
                            <div>
                              <img src={header2} 
                              // className="xl:top-[80px] absolute xl:w-[300px] xl:h-[200px] xl:right-[50px] lg:right-[0px] lg:bottom-[80px] lg:w-[100px] lg:h-[100px]" 
                              className="w-[280px] h-[280px] mb-[30px] "
                              alt="" />
                            </div>
                            <div>
                              <img src={header1} 
                              // className="xl:bottom-[10px] xl:right-[150px] xl:w-[500px] absolute"
                              className="w-[480px] h-[590px] "
                               />
                            </div>
                        
                      </div>
                    </div>
                </div>
            </section> 


            {/* HERO SECTION END */}
            <section>
              <div className="container">
                <div className="lg:w-[470px] mx-auto">
                  <h2 className="heading text-center">Providing the best medical services</h2>
                  <p className="text-center leading-[30px] mt-3 font-[400] text-textColor">World-class care for everyone. Our health System offers unmatched, expert health care.</p>
                </div>
              

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                      <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center w-40 mx-auto">
                          <img  src={doctorApp6} className="w-full"></img>
                        </div>

                        <div className=" mt-[30px]">
                          <h2 className="text-[22px] leading-9 text-headingColor font-bold text-center">Find a Doctor</h2>
                          <p className="text-[16px]leading-7 text-textColor font-[400] mt-4 text-center"> Whether you need a specialist or a general practitioner, our comprehensive database connects you with trusted professionals in your area.  </p>

                          <Link to="/doctors" className="w-[44px] h-[44px] border border-solid border-[#181A1E] rounded-full mt-[30px] mx-auto flex items-center justify-center group hover:bg-logoColor hover:border-none">
                              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                          </Link>
                        </div>
                      </div>

                      <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center w-72 mx-auto">
                          <img src={doctorApp5} className="w-full"></img>
                        </div>

                        <div className=" mt-[30px]">
                          <h2 className="text-[22px] leading-9 text-headingColor font-bold text-center">Find a Location</h2>
                          <p className="text-[16px]leading-7 text-textColor font-[400] mt-4 text-center">With detailed information on each facility's services, hours, and contact details, finding the right place for your healthcare needs is effortless</p>

                          <Link to="/doctors" className="w-[44px] h-[44px] border border-solid border-[#181A1E] rounded-full mt-[30px] mx-auto flex items-center justify-center group hover:bg-logoColor hover:border-none">
                              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                          </Link>
                        </div>
                      </div>
                      

                      <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center w-56 mx-auto">
                          <img src={doctorApp3} className="w-full"></img>
                        </div>

                        <div className=" mt-[30px]">
                          <h2 className="text-[22px] leading-9 text-headingColor font-bold text-center">Book Appointment</h2>
                          <p className="text-[16px]leading-7 text-textColor font-[400] mt-4 text-center">No more waiting on hold or playing phone tag – with just a few taps, you can secure your preferred appointment slot directly through our app.</p>

                          <Link to="/doctors" className="w-[44px] h-[44px] border border-solid border-[#181A1E] rounded-full mt-[30px] mx-auto flex items-center justify-center group hover:bg-logoColor hover:border-none">
                              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                          </Link>
                        </div>
                      </div>
                </div>
                
              </div>


              {/* ABOUT SECTION */}

              <About/>
            </section>

            {/* Services Section */}
            <section>
              <div className="container">
                  <div className="xl:w-[470px] mx-auto">
                      <h2 className="heading text-center font-[700]">Our Medical Services</h2>
                      <p className="text__para text-center">World-class care for everyone. Our health System offers unmatched, expert health care.
                      </p>
                  </div>

                <ServiceList/>
              </div>
            </section>


            {/* FEATURE SECTION*/}
            <section>
              <div className="container">
                  <div className="flex items-center justify-between flex-col lg:flex-row">
                      {/* FEATURE CONTENT */}
                      <div className="xl:w-[600px]">
                          <h2 className="heading text-center">Get Virtual treatment <br/> anytime</h2>
                          <ul className="pl-4">
                            <li className="text__para">
                                1. Schedule the appointment directly.
                            </li>
                            <li className="text__para">
                              2. Search for your physician here, and contact their office.
                            </li>
                            <li className="text__para">
                              3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                            </li>
                          </ul>
                          <Link to="/doctors" className="flex justify-center lg:justify-start">
                          <button className="bg-logoColor rounded-full px-4 py-2 text-white mt-4" >Learn More</button>
                          </Link>
                      </div>

                      {/* FEATURE  imAGE*/}
                      <div className="relative z-10 xl:w-[700px] flex justify-center mt-[50px] lg:mt-0 ">
                          <img src={doctorImg} className="w-3/4 rounded" alt="doctor_Image"/>
                          <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[30px] left-0 md:bottom-[40px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-md">
                                        
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-[6px] lg:gap-3">
                              <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                  Tue, 24
                              </p>
                              <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                                  10:00AM
                              </p>
                            </div>
                              < span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center  ">
                                  <img src={videoIcon} alt="videoIcon"  className="w-10 h-5 md:w-12 md:h-8" />
                              </span>

                          </div>
                          <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:heading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                            Consultation
                          </div>
                          <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                            <img src={doctorImg} className="rounded-full w-12 h-12" />
                            <h4 className="text-[10px] leading-3 lg:text-[16px] lg:heading-[22px] font-[700] text-headingColor">
                            Rohit Verma
                            </h4>
                          </div>
                        </div>
                      </div>
                  </div>

              </div>
            </section>


            {/* Doctor's Section */}
            <section>
              <div className="container">
                  <div className="xl:w-[470px] text-center mx-auto">
                    <h2 className="heading text-center ">Our great doctors</h2>
                    <p className="text__para text-center">World-class care for everyone. Our health System offers unmatched, expert health care.</p>
                  </div>

                  <DoctorList />
              </div>
            </section>

            {/* FAQ SECTION*/}
            <section>
              <div className="container">
                  <div className="flex justify-between gap-[50px] lg:gap-0">
                      <div className="w-3/4 hidden md:block">
                          <img src={faqImg}/>
                      </div>

                      <div className="w-full md:w-1/2">
                          <h2 className="heading">Most questions by our beloved patients </h2>
                          <FaqList/>
                      </div>
                  </div>
              </div>
            </section>

            {/*TESTIMONIAL */}
            <section>
              <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">What our patient say</h2>
                    <p className="text__para">World-class care for everyone. Our health System offers unmatched, expert health care</p>
                </div>
                <Testimonial/>
              </div>
            </section>
    </>
  )  

};

export default Home;
