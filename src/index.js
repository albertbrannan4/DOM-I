const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//--------------------------Header---------------------------------------------

function NavLinks(){
  let linkNum =1;
  for(const navlink in siteContent['nav']){
    let navValue = siteContent['nav'][navlink]
    let link =document.querySelector(`nav a:nth-of-type(${linkNum})`)
    link.classList.add('italic')
    link.textContent = navValue
    linkNum++
  }
}
NavLinks();

const h1 = document.querySelector('.cta-text h1');
const logo = document.querySelector('#logo-img');
const ctabtn = document.querySelector('.cta-text button');
const ctaimg=document.querySelector('#cta-img');

h1.textContent = siteContent['cta']['h1'];
ctabtn.textContent = siteContent['cta']['button'];
ctaimg.src = siteContent['images']['cta-img']
logo.src = siteContent['images']['logo-img'];


//--------------------------Top-Section---------------------------------

const featureH4 = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const AboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const ServicesH4 =  document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const ProductH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const VisionH4 =document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');

featureH4.textContent = siteContent['main-content']['features-h4'];
AboutH4.textContent =siteContent['main-content']['about-h4'];
ServicesH4.textContent = siteContent['main-content']['services-h4'];
ProductH4.textContent = siteContent['main-content']['product-h4'];
VisionH4.textContent = siteContent['main-content']['vision-h4'];

//-----------------------------------------------------------------------------

const midIMG = document.querySelector('.middle-img');
midIMG.src = siteContent['images']['accent-img'];


//--------------------------Bottom-Section---------------------------------

const featureP = document.querySelector('.top-content .text-content:nth-of-type(1) p');
const AboutP = document.querySelector('.top-content .text-content:nth-of-type(2) p');
const ServicesP =  document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const ProductP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const VisionP =document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

featureP.textContent = siteContent['main-content']['features-content'];
AboutP.textContent =siteContent['main-content']['about-content'];
ServicesP.textContent = siteContent['main-content']['services-content'];
ProductP.textContent = siteContent['main-content']['product-content'];
VisionP.textContent = siteContent['main-content']['vision-content'];


//-----------------------Contact-Section--------------------------------------------

const ContactH4 = document.querySelector('.contact h4')
const Address = document.querySelector('.contact p:nth-of-type(1)');
const Phone = document.querySelector('.contact p:nth-of-type(2)');
const Email = document.querySelector('.contact p:nth-of-type(3)');
const copyright = document.querySelector('footer a')

ContactH4.textContent = siteContent['contact']['contact-h4'];
Address.textContent = siteContent['contact']['address'];
Phone.textContent = siteContent['contact']['phone'];
Email.textContent = siteContent['contact']['email'];

copyright.textContent = siteContent['footer']['copyright']
copyright.classList.add('bold')
