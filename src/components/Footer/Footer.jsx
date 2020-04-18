import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid bg-dark text-light py-4 mt-3">
            <div className="container w-100">
                <div className="row">
                    <div className="col-smoo-12 col-md-6 col-lg-4">
                        <form>
                            <input type="text" placeholder="Search..." className="form-control" />
                        </form>
                    </div>

                    <div className="col-smoo-12 col-md-6 col-lg-4">
                        
                    </div>

                    <div className="text-right col-smoo-12 col-md-6 col-lg-4">
                       <a href="">Help</a> |
                       <a href="">About Us</a> |
                       <a href="">Contact Us</a>
                    </div>
                </div>

                <hr className="bg-light"/>
                <div className="row">
                    <div className="col-smoo-12 col-md-6 col-lg-4">
                        &copy; Developed by Khalil.
                    </div>

                    <div className="col-smoo-12 col-md-6 col-lg-4">
                        
                    </div>

                    <div className="text-right col-smoo-12 col-md-6 col-lg-4">
                        Social media links
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
