import {useEffect, useRef,useContext} from "react";
import logo from "../../assets/images/projectLogo.png";
import {NavLink, Link} from "react-router-dom";
import {BiMenu} from "react-icons/bi";
import { authContext } from "../../context/AuthContext.jsx";


const navLinks=[
    {path:"/home",
     display:"Home"
    },
    {path:"/doctors",
     display:"Find a Doctor"
    },
    {path:"/services",
    display:"Services"
    },
    {path:"/contact",
    display:"Contact Us"
    },
] 

const Header=()=>{
    const headerRef=useRef(null);
    const menuRef=useRef(null);
    const {user,role,token}=useContext(authContext);    

    const handleStickyHeader=()=>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add("sticky__header");
            }
            else{
                headerRef.current.classList.remove("sticky__header");
            }
        })
    }

    useEffect(()=>{
        handleStickyHeader();
        return ()=>window.removeEventListener("scroll",handleStickyHeader);
    });

    const toggleMenu=()=>{
        menuRef.current.classList.toggle("show__menu");
    }

    return(
        <>       
            <header className="bg-gradient-to-r from-neutralColor via-neutral-200/80 to-greenColor shadow-md" ref={headerRef} >
                <div className="container w-full h-[60px]">
                    <div className="flex justify-between items-center">
                        <div className="logo flex items-center gap-1">
                            <img  className="w-16 bg-clip-padding" src={logo} alt="Logo_Image" />
                            <h1 className=" font-semibold">DocConnect360</h1>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu flex items-center justify-center gap-x-5 lg:text-base md:text-sm" >
                                {navLinks.map((item,index)=>
                                    <li key={index}>
                                        <NavLink to={item.path} className={ navClass=>navClass.isActive? "text-logoColor font-semibold hover:border-b-2 border-black":"text-textColor font-semibold hover:border-b-2 border-gray-600"}>{item.display}</NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="nav-right flex items-center gap-3.5">

                            {
                                token && user?  (<div className="profile w-14 ">
                                <Link to={`${role==='doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                                    <figure className="w-[45px] h-[45px] mt-2 rounded-full cursor-pointer">
                                        <img className="w-full rounded-full" src={user?.photo}  />
                                    </figure>
                                    
                                </Link>
                            </div>) : <Link to="/login">
                                <button className="bg-logoColor rounded py-1.5 px-5 text-white flex justify-center font-medium">
                                    Login
                                </button>
                            </Link>
                            }
                            
                           
                            
                            
                            <span className="dropdown-menu flex items-center md:hidden" onClick={toggleMenu}>
                                <BiMenu className="w-6 h-6 cursor-pointer"/>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;