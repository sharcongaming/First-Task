import React from 'react'

const About = () => {
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
            <li class="nav-link"><a href="./about">About Us</a></li>
            <li class="nav-link"><a href="./contact">Contact</a></li>
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

    {/* <!-- aboutus hero  --> */}
    <section class="gridSection">
        <div class="sectionDesc aboutusDesc">
            <h1 class="headline">
                The Company History
            </h1>
            <p class="sub-headline">
                It is the perfect spot get started with your company. 
                It can be the first thing that people see and it will set 
                the tone for their experience with your company.
            </p>
        </div>
        <div class="sectionPic bouncepic aboutusPic" id="sectionPic">
            <img src="./img/about-hero.png" alt=""/>
        </div>
    </section>

    {/* <!-- About us status --> */}
    <div class="statusContainer">
        <div class="status">
            <h1><b>360</b> Client</h1>
            <p>An about page is a key component of every website.</p>
        </div>

        <div class="status">
            <h1><b>150+</b> Projects</h1>
            <p>Page is the first page a visitor sees when they visit your website.</p>
        </div>

        <div class="status">
            <h1><b>20+</b> Countries</h1>
            <p>It is the perfect spot to get started with your company.</p>
        </div>
    </div>

    <div class="services">
        <div class="aboutusimgContainer">
            <img src="./img/about-image-1.jpg" alt=""/>
            <img src="./img/about-image-2.jpg" alt=""/>
        </div>

        <div class="offers">
            <div class="eachOffer">
                <img src="./img/fast-forward-icon-white.svg" alt=""/>
                <div class="offerDesc">
                    <h1>Fast Management</h1>
                    <p>The Complete Guide to Management and How to Implement it Quickly and Effectively</p>
                </div>
            </div>

            <div class="eachOffer">
                <img src="./img/support-agent-icon-white.svg" alt=""/>
                <div class="offerDesc">
                    <h1>Best Support</h1>
                    <p>The Best Support for Online crypto & How to Craft a Compelling Description</p>
                </div>
            </div>

            <div class="eachOffer">
                <img src="./img/progress-warning-icon-white.svg" alt=""/>
                <div class="offerDesc">
                    <h1>Best Progress</h1>
                    <p>What is a Crypto-Mining Malware and Why You MUST Protect Against Them</p>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Play Video --> */}
       <section class="videoSection">
            <h1 class="videoSectionHeader">Play The Video.</h1>
           <div class="videoContainer">
            <div class="video">
                <img src="./img/about-video.jpg" class="thumbnail" alt=""/>
                <img src="./img/video-play-icon-white.svg" class="playIcon" alt=""/>
            </div>
            <p>
            Crypto mining has become more popular with people
            from all walks of life and across the world.
            This article will teach you how to mine crypto
            without having to buy expensive hardware or pay
            exorbitant electricity bills.
            </p>
           </div>
       </section>

       {/* <!-- Carousel --> */}
    <section class="teamSection">
        <h1 class="sectionHeader">Our Strong & Creative Team</h1>
        <div class="carouselContainer">
            <div class="eachCarousel eachTeam">
                <div class="teamPic">
                    <img src="./img/team-image-1.jpg" alt=""/>
                    <div class="teamSocialLink">
                        <img src="./img/Facebook_black.svg" alt=""/>
                        <img src="./img/Vimeo_black.svg" alt=""/>
                        <img src="./img/Twitter_black.svg" alt=""/>
                        <img src="./img/Instagram_black.svg" alt=""/>
                    </div>
                </div>
                <div class="teamDesc">
                    <h1 class="teamName">Rebecca Walters</h1>
                    <p class="position">UI UX Designer</p>
                </div>

            </div>
    
            <div class="eachCarousel eachTeam">
                <div class="teamPic">
                    <img src="./img/team-image-2.jpg" alt=""/>
                    <div class="teamSocialLink">
                        <img src="./img/Facebook_black.svg" alt=""/>
                        <img src="./img/Vimeo_black.svg" alt=""/>
                        <img src="./img/Twitter_black.svg" alt=""/>
                        <img src="./img/Instagram_black.svg" alt=""/>
                    </div>
                </div>
                <div class="teamDesc">
                    <h1 class="teamName">Richard Taylor</h1>
                    <p class="position">Developer</p>
                </div>
            </div>
    
            <div class="eachCarousel eachTeam">
                <div class="teamPic">
                    <img src="./img/team-image-3.jpg" alt=""/>
                    <div class="teamSocialLink">
                        <img src="./img/Facebook_black.svg" alt=""/>
                        <img src="./img/Vimeo_black.svg" alt=""/>
                        <img src="./img/Twitter_black.svg" alt=""/>
                        <img src="./img/Instagram_black.svg" alt=""/>
                    </div>
                </div>
                <div class="teamDesc">
                    <h1 class="teamName">Bertha Earley</h1>
                    <p class="position">Content writer</p>
                </div>
            </div>
    
            <div class="eachCarousel eachTeam">
                <div class="teamPic">
                    <img src="./img/team-image-1.jpg" alt=""/>
                    <div class="teamSocialLink">
                        <img src="./img/Facebook_black.svg" alt=""/>
                        <img src="./img/Vimeo_black.svg" alt=""/>
                        <img src="./img/Twitter_black.svg" alt=""/>
                        <img src="./img/Instagram_black.svg" alt=""/>
                    </div>
                </div>
                <div class="teamDesc">
                    <h1 class="teamName">Rebecca Walters</h1>
                    <p class="position">UI UX Designer</p>
                </div>

            </div>
    
            <div class="eachCarousel eachTeam">
                <div class="teamPic">
                    <img src="./img/team-image-2.jpg" alt=""/>
                    <div class="teamSocialLink">
                        <img src="./img/Facebook_black.svg" alt=""/>
                        <img src="./img/Vimeo_black.svg" alt=""/>
                        <img src="./img/Twitter_black.svg" alt=""/>
                        <img src="./img/Instagram_black.svg" alt=""/>
                    </div>
                </div>
                <div class="teamDesc">
                    <h1 class="teamName">Richard Taylor</h1>
                    <p class="position">Developer</p>
                </div>
            </div>
    
            <div class="eachCarousel eachTeam">
                <div class="teamPic">
                    <img src="./img/team-image-3.jpg" alt=""/>
                    <div class="teamSocialLink">
                        <img src="./img/Facebook_black.svg" alt=""/>
                        <img src="./img/Vimeo_black.svg" alt=""/>
                        <img src="./img/Twitter_black.svg" alt=""/>
                        <img src="./img/Instagram_black.svg" alt=""/>
                    </div>
                </div>
                <div class="teamDesc">
                    <h1 class="teamName">Bertha Earley</h1>
                    <p class="position">Content writer</p>
                </div>
            </div>
        </div>
        <div class="carouselIndicator">
            <div class="indicator activeIndicator" onclick="slideCarousel(0)"></div>
            <div class="indicator" onclick="slideCarousel(1)"></div>
            <div class="indicator" onclick="slideCarousel(2)"></div>
            <div class="indicator" onclick="slideCarousel(3)"></div>
            <div class="indicator" onclick="slideCarousel(4)"></div>
            <div class="indicator" onclick="slideCarousel(5)"></div>
        </div>
    </section>

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
             <p>&copy; 2023 design and developed by <a href="#" class="developedBy">Programming Insider</a>.</p>
        </div>
    </footer>

    </div>
  )
}

export default About