import React from "react";
import {Link} from 'react-router-dom';

import doctorImg from "../../assets/images/doctor3.jpg";

const About=()=>{
    return(
        <>
            <section>
                <div className="container px-[80px]">
                    <div className="flex justify-between gap-[50px] lg:gap-[80px] xl:gap-[40px] flex-col lg:flex-row">
                        {/* ABOUT IMAGE */}
                        <div className="relative w-full lg:h-[420px] lg:w-1/2 xl:w-1/2 z-10 order-2 lg:order-1">
                            <img src={doctorImg} className="rounded w-[100%] h-[100%] lg:h-full"/>

                            <div className=" relative top-[-60px] left-[1px] lg:top-[-90px] lg:left-[1px] md:top-[-80px] xl:top-[-100px] bg-white w-max px-6 py-2">
                                    <div className="flex gap-3">
                                        <div className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10">
                                            <img src={doctorImg} className="w-full h-full rounded-full" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm lg:text-xl font-semibold leading-4 
                                            md:text-xl
                                            md:leading-8
                                            lg:leading-8">Dr. Harnaaz Sandhu</h3>
                                            <h4 className="text-textColor text-xs">Chief Doctor of Nursing</h4>
                                        </div>
                                </div>
                            </div>
                        </div>

                        {/*  ABOUT CONTENT  */}
                        <div className="w-full lg:w-1/2 lg:h-[420px] xl:w-1/2 order-1 lg:order:2 flex flex-col justify-center items-center">
                            <h2 className="heading md:text-center ">Shaping Tomorrow's Healthcare Today</h2>
                            <p className="text-[16px] lg:text-base text-textColor leading-7 mt-3 text-justify">Our hospital has consistently led the way in shaping modern healthcare, text-basesetting benchmarks and driving progress in patient care.
                             Our dedication to excellence fuels our continuous pursuit of cutting-edge technologies and innovative medical practices.
                            </p>
                            <p className="text-[16px] lg:text-base text-textColor leading-7 mt-3 text-justify">
                            We are committed to delivering exceptional healthcare solutions that anticipate and meet the needs of our patients, ensuring their well-being and satisfaction. Join us as we redefine healthcare standards and create a healthier tomorrow for all.
                            </p>
                            <Link to="/services">
                                <button className="bg-logoColor text-white rounded-full px-4 py-2 mt-3">Learn More</button>
                            </Link>
                        </div>
                    </div>
                       
                </div>
            </section>
        </>
    );
}
export default About;