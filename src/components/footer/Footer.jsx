import './footer.css'
import "bootstrap-icons/font/bootstrap-icons.css"

export default function Footer() {

    return (
        <footer className="footer text-white">
            <div className="container-xl">
                <div className="row gy-4">
                    {/* Logo and Description*/}
                    <div className="col-md-3">
                        <div className="d-flex align-items-center mb-2">

                            <div>
                                <div className="logo-text">Your</div>
                                <div className="logo-subtext">Logo</div>
                            </div>
                        </div>
                        <p className="small text-light">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quas labore, minus non expedita pariatur accusamus sint dicta nisi. Odit.
                        </p>
                    </div>

                    {/*Services*/}
                    <div className="col-md-3 footerServices ">
                        <h6>Servicios</h6>
                        <ul className="">
                            <li><a href="#"> Lorem, ipsum.</a></li>
                            <li><a href="#"> Lorem, ipsum dolor.</a></li>
                            <li><a href="#">Lorem ipsum dolor sit.</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3 footerServices">
                        <h6>Nosotros</h6>
                        <ul className="">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">contact</a></li>
                            <li><a href="#">Lorem, ipsum dolor.</a></li>
                        </ul>
                    </div>


                    <div className="col-md-3 footerInfo">
                        <h6>Contact</h6>
                        <ul className="list-unstyled info" >
                            <li><i className="bi bi-envelope"></i> example@gmail.es</li>
                            <li><i className="bi bi-telephone"></i> 999 89 99 67</li>
                            <li><i className="bi bi-geo-alt"></i> Company location</li>
                        </ul>
                        <div className="social-icons mt-3">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}