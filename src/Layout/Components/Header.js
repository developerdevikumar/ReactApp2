import React from 'react'

function Header() {
    return (

  <div className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">LightingLogistics</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="feature.html" className="nav-item nav-link">Feature</a>
                        <a href="advisor.html" className="nav-item nav-link">Advisor</a>
                        <a href="review.html" className="nav-item nav-link">Review</a>

                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header
