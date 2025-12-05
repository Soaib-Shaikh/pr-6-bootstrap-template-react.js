import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [loading, setLoading] = useState(true);
    const [sticky, setSticky] = useState(false);
    const location = useLocation();
    const heroRef = useRef(null);

    // Initial spinner
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Scroll listener for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const heroHeight = heroRef.current.offsetHeight;
                setSticky(window.scrollY > heroHeight - 80); // navbar height offset
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) {
        return (<div className="bg-white position-fixed w-100 vh-100 top-0 start-0 d-flex align-items-center justify-content-center">
            <div
                className="spinner-border text-primary"
                style={{ width: '3rem', height: '3rem' }}
                role="status"
            > <span className="sr-only">Loading...</span> </div> </div>
        );
    }

    return (
        <> <div className="container-xxl position-relative p-0">
            {/* NAVBAR */}
            <nav
                className={`navbar  navbar-expand-lg px-4 px-lg-5 py-3 py-lg-0 ${sticky ? 'navbar-dark sticky bg-dark' : 'navbar-light bg-transparent'
                    }`}
            > <Link to="/" className="navbar-brand p-0">
                    <h1 className={`m-0 ${sticky ? 'text-primary' : 'text-primary'}`}> <i className="fa fa-utensils me-3" />
                        Restoran </h1> </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars" />
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <Link to="/service" className={`nav-item nav-link ${location.pathname === '/service' ? 'active' : ''}`}>Service</Link>
                        <Link to="/menu" className={`nav-item nav-link ${location.pathname === '/menu' ? 'active' : ''}`}>Menu</Link>

                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/booking" className={`dropdown-item ${location.pathname === '/booking' ? 'active' : ''}`}>Booking</Link>
                                <Link to="/team" className={`dropdown-item ${location.pathname === '/team' ? 'active' : ''}`}>Our Team</Link>
                                <Link to="/testimonial" className={`dropdown-item ${location.pathname === '/testimonial' ? 'active' : ''}`}>Testimonial</Link>
                            </div>
                        </div>

                        <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </div>

                    <Link to="/booking" className="btn btn-primary py-2 px-4">Book A Table</Link>
                </div>
            </nav>

            {/* HERO SECTION */}
            <div ref={heroRef} className="container-xxl py-5 hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                            <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Link to="/booking" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Link>
                        </div>

                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="/assets/img/hero.png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>


    );
}

export default Header;
