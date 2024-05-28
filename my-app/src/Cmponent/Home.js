import React from 'react';
// import "./Style/navbar.css"



import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Home = () => {

    // header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

// bar.onclick = (e) => {
//     const icon = e.target.getAttribute("class")
//     if(icon == "fa-solid fa-bars"){
//         e.target.setAttribute("class","fa-solid fa-xmark")

//     }else{
//         e.target.setAttribute("class","fa-solid fa-bars")
//     }
//     nav.classList.toggle("showNav")
// }


// carousel
// const carouselContainer = document.querySelector(".carouselContainer");
// const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
// const allEachCarousel = document.querySelectorAll(".eachCarousel");
// const allIndicator = document.querySelectorAll(".indicator");

// const slideCarousel = (index) => {
//     for(let x = 0; x<allEachCarousel.length;x++){
//         if(x === index){
//             allEachCarousel[x].classList.add("eachCarouselBorder")
//             allIndicator[x].classList.add("activeIndicator")
//         }else{
//             allEachCarousel[x].classList.remove("eachCarouselBorder")
//             allIndicator[x].classList.remove("activeIndicator")
//         }
//     }
//    carouselContainer.scrollLeft = (index * (eachCarousel + 10))
//    console.log(carouselContainer.scrollLeft)
// }
  return (

         <div>
        <div id="logo">
            <a href="./index.html">
            <img src="./img/logo-white.png" alt=""/>
            </a>
        </div>
        {/* <ul className="nav" id="nav">
            <ul className="navLogo">
                <a href="./index.html">
                     <img src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg" alt=""/>
               </a>
            </ul>

            <li className="nav-link"><a href="/">Home</a></li>
            <li class="nav-link"><a href="./aboutus.html">About Us</a></li>
            <li class="nav-link"><a href="./contact.html">Contact</a></li>
            <li class="nav-link"><a href="./contact.html">SignUp</a></li>

            
            <li className="sociallinkContainer">
                <img className="sociallink" src="./img/fabook-icon-white.svg" alt=""/>
                <p>jhdsgkljfsdfoiedsjkfldshakdsj</p>
                //<i class="fa-brands fa-facebook"></i>
                   

                <img className="sociallink" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt=""/>
                <img className="sociallink" src="./img/inkedin-icon-white.svg" alt=""/>
                <img className="sociallink" src="./img/whatsapp-icon-white.svg" alt=""/>
            </li>
        </ul>
        <div id="barContainer">
            <i id="bar" className="fa-solid fa-bars"></i>
        </div> */}

        {/* <!-- Home page --> */}

        <section class="hero gridSection">
        <div class="sectionDesc">
            <h1 class="headline">
                Most popular way to trade <span class="cryptoText">CRYPTO</span>.
            </h1>
            <p class="sub-headline">
                You can see a record of all your transactions 
                anytime you want and never have to worry about 
                someone erasing or stealing your money!
            </p>
            <div class="btnContainer">
                <button class="btn btn1">Contact Now</button>
                <button class="btn btn2">play video <i class="fa-solid fa-play"></i></button>
            </div>
        </div>
        <div class="sectionPic bouncepic" id="sectionPic">
            <img src="https://www.ezloyalty.io/wp-content/themes/ezloyalty/assets/images/industry-detail/on-demand/introduce/image-mobile.svg" alt=""/>
        </div>
    </section>

    {/* carousel */}

    <section>
        <div class="carouselContainer">
            <div class="eachCarousel eachCarouselBorder">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJvPOOPiI9gJi5ymL8KiK7UhyHzgX-YVrF-BlXEfUxDyCU0wx" alt=""/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Bitcoin</h1>
                    <p class="carouselPara">Bitcoin is an innovative payment network</p>
                    <div class="carouselPrice">
                        <h3>$34,000</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">15%</h3>
                    </div>
                    <button class="btn carouselBtn">Buy & Trade</button>
                </article>
            </div>
    
            <div class="eachCarousel">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrOK06TTYdJ5p9e-LFDllmgRPnnUrbmXgsIXwnV1V0leEsFZHS" alt=""/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Ethereum</h1>
                    <p class="carouselPara">Ethereum is open-source blockchain currency</p>
                    <div class="carouselPrice">
                        <h3>$25,600</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">9%</h3>
                    </div>
                    <button class="btn carouselBtn">Buy & Trade</button>
                </article>
            </div>
    
            <div class="eachCarousel">
                <img src="./img/tether-icon.png" alt=""/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Tether</h1>
                    <p class="carouselPara">Tether is a stable coin cryptocurrency</p>
                    <div class="carouselPrice">
                        <h3>$7,000</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">4%</h3>
                    </div>
                    <button class="btn carouselBtn">Buy & Trade</button>
                </article>
            </div>
    
            <div class="eachCarousel">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJvPOOPiI9gJi5ymL8KiK7UhyHzgX-YVrF-BlXEfUxDyCU0wx" alt=""/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Bitcoin</h1>
                    <p class="carouselPara">Bitcoin is an innovative payment network</p>
                    <div class="carouselPrice">
                        <h3>$34,000</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">15%</h3>
                    </div>
                    <button class="btn carouselBtn">Buy & Trade</button>
                </article>
            </div>
    
            <div class="eachCarousel">
                <img src="./img/ethereum-icon.png" alt=""/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Ethereum</h1>
                    <p class="carouselPara">Ethereum is open-source blockchain currency</p>
                    <div class="carouselPrice">
                        <h3>$25,600</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">9%</h3>
                    </div>
                    <button class="btn carouselBtn">Buy & Trade</button>
                </article>
            </div>
    
            <div class="eachCarousel">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rn4YAJx1EpE1b7Xi2lklsA6xUSN7D3Xxk-7DeSugkhuiU880'/>
                <article class="carouselDesc">
                    <h1 class="carouselTitle">Tether</h1>
                    <p class="carouselPara">Tether is a stable coin cryptocurrency</p>
                    <div class="carouselPrice">
                        <h3>$7,000</h3>
                        <span class="rect"></span>
                        <h3 class="carouselDiscount">4%</h3>
                    </div>
                    <button class="btn carouselBtn">Buy & Trade</button>
                </article>
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

{/* 
//process */}

{/* <!-- Processes --> */}
    <section class="gridSection">
        <div class="sectionDesc processessDesc">
            <h1 class="sectionHeader">Chain Process</h1>
            <p class="sectionPara">We do not charge any fees and we do not require 
              any registration. You keep your privacy and your 
              coins.
            </p>
            <div class="eachProcesses">
                <img   src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRHOMs-zyBEC7pDXMu8O8L8L1YdE0RwrW0mcsux2F6Rg5cn1-V" alt="handshake"/>
                <div class="eachprocessesPara">
                    <h1 class="processTitle">Trading</h1>
                    <p>
                        The act of speculating on cryptocurrency price movements 
                        via a CFD trading account, or buying and selling.
                    </p>
                </div>
            </div>
            <div class="eachProcesses">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_G1zce-sKFR1a313nG1PuJwMFF9BgsuKxhMBwgVPZnTRL5Azw" alt="handshake"/>
                <div class="eachprocessesPara">
                    <h1 class="processTitle">Buying</h1>
                    <p>
                        Best cryptocurrency exchanges currently purchase Bitcoin, 
                        Ethereum, and Litecoin other coins and tokens on the platform.
                    </p>
                </div>
            </div>
        </div>
        <div class="sectionPic bouncepic processesPic" id="sectionPic">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnBTj0UlPEG_V0n5kFCtBxXwqvk4ECp_Gz7nyDeP22yBqSeR13" alt=""/>
        </div>
    </section>

    {/* market */}
    <section class="gridSection">
        <div class="sectionDesc marketDesc">
            <h1 class="sectionHeader">Markets at finger</h1>
            <p class="sectionPara">The Blockchain is a decentralized, 
                digital ledger of transactions that are recorded 
                confirmed
            </p>
            <div class="eachMarket">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQRHOMs-zyBEC7pDXMu8O8L8L1YdE0RwrW0mcsux2F6Rg5cn1-V" alt="handshake"/>
                <div>
                    <h1 class="marketTitle">Buying</h1>
                    <p class="darkPara">
                        Best cryptocurrency exchanges currently purchase 
                        Bitcoin, Ethereum, and Litecoin other coins and tokens 
                        on the platform.
                    </p>
                </div>
            </div>
            <div class="eachMarket">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwgFVQN3chz1IHfW2-ozVx4CPkjttfHA9DgVqc36HlOcyNucH" alt="handshake"/>
                <div>
                    <h1 class="marketTitle">Trading</h1>
                    <p class="darkPara">
                        The act of speculating on cryptocurrency price movements 
                        via a CFD trading account, or buying and selling.
                    </p>
                </div>
            </div>
            <div class="eachMarket">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCyybbde9un4-AP2FQ_anGAZ1L8DbnxPq5af4UlRj2NvBJN61" alt="handshake"/>
                <div>
                    <h1 class="marketTitle">Supporting</h1>
                    <p class="darkPara">
                        Don’t worry if you’re new to crypto and digital 
                        currencies – Skrill makes setting up a cryptocurrency 
                        wallet easy.
                    </p>
                </div>
            </div>
            <div class="eachMarket">
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKtlpOMrG8qTmDGVP0BVrEJO-lgOK9hhaCUOC6Vyjrf8lDGN_5" alt="handshake"/>
                <div>
                    <h1 class="marketTitle">Online</h1>
                    <p class="darkPara">
                        Cryptocurrency, especially Bitcoin, 
                        has proven to be a popular trading 
                        vehicle, even if legendary investors 
                        as good.
                    </p>
                </div>
            </div>
        </div>
        <div class="sectionPic marketspicSection" id="sectionPic">
           <h1 class="marketspicHeader">CRYPTOCURRENCY</h1>
            <div class="marketsPicContainer">
                <div class="marketPic marketPic1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFAeyfnnS3DmcZ-P0raAhfouuM1BPitSP1Po0gk_tZJN1KP4v" alt=""/>
                    <article class="marketTitle">Hot Sale</article>
                </div>
    
                <div class="marketPic marketPic2">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkzAAu5ZjnI7LOnPjvXQ2rEJQV7vRHOpRQNCeSDwVD0MmvQuuU" alt=""/>
                    <article class="marketTitle">Bit coin</article>
                </div>
    
                <div class="marketPic marketPic3">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkzAAu5ZjnI7LOnPjvXQ2rEJQV7vRHOpRQNCeSDwVD0MmvQuuU" alt=""/>
                    <article class="marketTitle">ETHEREUM</article>
                </div>
    
                <div class="marketPic marketPic4">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIFtto6U5cnuSIjaMtXcRGCJYRP6bTCYtR850ntBSpzfmMeiTW" alt=""/>
                    <article class="marketTitle">CONNECTING</article>
                </div>
            </div>
            </div>
    </section>


    <section class="gridSection">
        <div class="sectionDesc dashboardDesc">
            <h1 class="sectionHeader">Trade crypto in seconds</h1>
            <p class="sectionPara">
                But with prouple, you can mine bitcoin from your own phone! 
                You no longer have to worry about costly transactions.
            </p>
            <button class="btn">Explore Now</button>
        </div>

        <div class="sectionPic dashboardPic">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSAXGaIMQxveN9JKzEdBfuvW8bOvV7she7wSzoGAwJC6eFQ5WK9" alt=""/>
        </div>

    </section>

    <div class="fundSection">
        <div class="sectionDesc">
            <h1 class="sectionHeader">Control your funds</h1>
            <p class="sectionPara">
                Our mining pool offers some of the most competitive contracts in the market.
            </p>
            <div class="fundsContainer">
                <div class="fund">
                    <img src="https://www.altassets.net/wp-content/uploads/2024/04/money-860128_1280-324x160.jpg" alt="cryptocurrency"/>
                    <h1 class="fundType">Support All Currency</h1>
                    <p class="darkPara">
                        Accept and process payments from all types of currencies.
                    </p>
                </div>

                <div class="fund">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRX52uFc0q2cZ364EoWn5kaTTH1YRDcYONp60D3GC7RxjWcBGLg" alt="cryptocurrency"/>
                    <h1 class="fundType">Block Chain System</h1>
                    <p class="darkPara">
                        How it Works, Benefits and its Deployment in Financial
                    </p>
                </div>

                <div class="fund">
                    <img src="data:image/jpeg;base64,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" alt="cryptocurrency"/>
                    <h1 class="fundType">Fund Selling</h1>
                    <p class="darkPara">
                        How to Profit in the Crypto Markets through Investing
                    </p>
                </div>

                <div class="fund">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nCUkv12AA5m0lLceOuoDFNihuj7IalG1YozqhKU0s6_DyIxY" alt="cryptocurrency"/>
                    <h1 class="fundType">Crypto Card</h1>
                    <p class="darkPara">
                        Crypto Cards and Why Cryptocurrency are the Future
                    </p>
                </div>
            </div>
        </div>
    </div>

    <section class="gridSection">
        <div class="sectionDesc newsletterDesc">
            <h1 style={{color:"red"}}  class="sectionHeader">Subscribe news!</h1>
            <p class="sectionPara">
                This is where crypto news websites come in handy and stay up-to-date this sphere.
            </p>
            <form action="#" class="newsletter" style={{marginTop:"4%"}}>
                <input type="email" name="" id="newsletter" placeholder="enter your email"/>
                <button type="submit" class="btn primaryBtn">Subscribe</button>
            </form>
        </div>
        <div class="sectionPic bouncepic newsletterPic">
            <img style={{marginTop:"4%"}} src="https://cdn.dribbble.com/userupload/11798370/file/original-058dfb895c299355c5b46c42c36d72bd.jpg?crop=158x31-794x509&resize=400x300&vertical=center" alt=""/>
        </div>
    </section>

    <footer>
        <div class="joinSection">
            <div class="joinDesc">
                <h1   class="sectionHeader">Join with us</h1>
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
                <FaFacebook />
                <FaXTwitter />
                <MdWhatsapp />
                <CiLinkedin />

                    {/* <img class="sociallink" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt=""/>
                    <img class="sociallink" src="https://cdn-icons-png.freepik.com/256/5968/5968958.png?semt=ais_hybrid" alt=""/>
                    <img class="sociallink" src="./img/inkedin-icon-white.svg" alt=""/>
                    <img class="sociallink" src="./img/whatsapp-icon-white.svg" alt=""/> */}
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
             <p>&copy; 2024 design and developed by <a href="#" class="developedBy">BlackHole Coding Crew</a>.</p>
        </div>
    </footer>
    
    </div>
    
  )
}

export default Home