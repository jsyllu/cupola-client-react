import React from 'react'
import './footer.style.client.css'

const Footer = () =>
    <footer className="footer">
        <div className="container">
            <span className="text-muted">
                Design by &nbsp;
                <a href="https://github.com/jsyllu"
                   target="_blank"
                   rel="noopener noreferrer" >
                    <i className="fab fa-github">&nbsp;</i>
                    @jsyllu
                </a>
            </span>
            <span className="text-muted">
                Develop by &nbsp;
                <a href="https://github.com/jsyllu"
                   target="_blank"
                   rel="noopener noreferrer" >
                    <i className="fab fa-github">&nbsp;</i>
                    @jsyllu &&nbsp;
                </a>
                <a href="https://github.com/saryn-equinox"
                   target="_blank"
                   rel="noopener noreferrer" >
                    <i className="fab fa-github">&nbsp;</i>
                    @saryn-equinox
                </a>
            </span>
        </div>
    </footer>

export default Footer