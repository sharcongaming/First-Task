import React from 'react'

const Contact = () => {
  return (
    <div>
<header>
        <div id="logo">
            <a href="./index.html">
                <img src="./img/logo-white.png" alt=""/>
                </a>
        </div>
        <ul class="nav" id="nav">
            <ul class="navLogo">
                <a href="./index.html">
                    <img src="./img/logo-white.png" alt=""/>
                </a>
            </ul>
            <li class="nav-link"><a href="./index.html">Home</a></li>
            <li class="nav-link"><a href="./aboutus.html">About Us</a></li>
            <li class="nav-link"><a href="./contact.html">Contact</a></li>
            <li class="sociallinkContainer">
                <img class="sociallink" src="./img/fabook-icon-white.svg" alt=""/>
                <img class="sociallink" src="./img/twitter-icon-white.svg" alt=""/>
                <img class="sociallink" src="./img/inkedin-icon-white.svg" alt=""/>
                <img class="sociallink" src="./img/whatsapp-icon-white.svg" alt=""/>
            </li>
        </ul>
        <div id="barContainer">
            <i id="bar" class="fa-solid fa-bars"></i>
        </div>
    </header>

    {/* <!-- Contact form --> */}
  

    {/* <!-- footer --> */}
    <footer>
        <div class="joinSection">
            <div class="joinDesc">
                <h1 class="sectionHeader">Join with us</h1>
                <p class="sectionPara">
                    Once you have created your account, you can purchase coins from website
                </p>
            </div>
            <button class="btn primaryBtn">JOIN NOW</button>
        </div>

        <div class="footerlinksContainer">
            <div class="footerAboutus">
                <img src="./img/logo-white.png" alt=""/>
                <p class="darkPara">With no commissions and a simple user interface, 
                 Prouple is the most reliable way to trade for 
                 Cryptocurrency.
                </p>
                <div class="footersociallinkContainer">
                    <img class="sociallink" src="./img/fabook-icon-white.svg" alt=""/>
                    <img class="sociallink" src="./img/twitter-icon-white.svg" alt=""/>
                    <img class="sociallink" src="./img/inkedin-icon-white.svg" alt=""/>
                    <img class="sociallink" src="./img/whatsapp-icon-white.svg" alt=""/>
                </div>
            </div>

            <div class="footerlink">
                <h1 class="linkTitle">Explore</h1>
                <a href="#" class="eachLink">About us</a>
                <a href="#" class="eachLink">FAQ</a>
                <a href="#" class="eachLink">Blog</a>
                <a href="#" class="eachLink">Contact</a>
            </div>

            <div class="footerlink">
                <h1 class="linkTitle">Service</h1>
                <a href="#" class="eachLink">Mining</a>
                <a href="#" class="eachLink">Control Data</a>
                <a href="#" class="eachLink">Design</a>
                <a href="#" class="eachLink">Security</a>
            </div>

            <div class="footerlink">
                <h1 class="linkTitle">Resource</h1>
                <a href="#" class="eachLink">Style Guide</a>
                <a href="#" class="eachLink">Change Log</a>
                <a href="#" class="eachLink">License</a>
            </div>
        </div>

        <div class="footerCopyright">
             <p>&copy; 2024 design and developed by <a href="#" class="developedBy">BlackHole coding Crew</a>.</p>
        </div>
    </footer>


    </div>
  )
}

export default Contact