

let html = "";

html += `
<div class="col">
<div class="title">
  <h1>About Us</h1>
</div>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
  modi, excepturi voluptatum eligendi officiis rerum quas possimus
  ad ducimus distinctio maxime totam dicta deleniti esse minus
  cumque placeat alias accusamus magnam omnis a illum nihil
  inventore. Illum molestiae animi quasi fugiat quia, blanditiis,
  vero officiis laboriosam ad possimus est? Quod?
</p>
<a href="" class="btn">Know more</a>
</div>
<div class="col">
  <div class="swiper-container slider-2">
      <div class="swiper-wrapper">
         <div class="swiper-slide">
              <img src="images/pic-5.jpg" alt="">
          </div>
         <div class="swiper-slide">
         <img src="images/pic-2.jpg" alt="">
          </div>
          <div class="swiper-slide">
              <img src="images/hero-3.jpg" alt="">
          </div>
      </div>
      <div class="arrows d-flex">
          <div class="swiper-button-prev d-flex">
              <i class="bx bx-chevron-left swiper-icon"></i>
          </div>
          <div class="swiper-button-next d-flex">
              <i class="bx bx-chevron-right swiper-icon"></i>
          </div>
      </div>
  </div>
</div>
`;

document.getElementById("about-container").innerHTML = html;


let services = "";

services += `

<img src="images/pic-1.jpg" alt="">
<div class="col">
   <div class="title">
       <h1>How to Spend a Weekend</h1>
   </div>
   <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea molestias quod voluptatum delectus nam consectetur, tempore maxime cupiditate animi, porro modi laboriosam fugiat? Ipsa veniam similique explicabo ad ratione sit molestiae, repudiandae dolores doloribus necessitatibus quisquam laudantium velit ab culpa!
   </p>
   <div class="d-flex">
       <h2>15 Days tour</h2>
       <div class="raiting">
           <span><i class="bx bxs-star"></i></span>
           <span><i class="bx bxs-star"></i></span>
           <span><i class="bx bxs-star"></i></span>
           <span><i class="bx bxs-star"></i></span>
           <span><i class="bx bxs-star"></i></span>
       </div>
   </div>

   <div class="d-flex">
      <h3>$ 1199.99</h3>
      <a href="" class="btn">Book Now</a>
   </div>
</div>
`;

document.getElementById("service-container").innerHTML = services;






let trips = "";

trips += `
<div class="swiper-container slider-3">
<div class="swiper-wrapper">
  <div class="swiper-slide">
    <img src="./images/vert-1.jpg" alt="hero image" />
  </div>
  <div class="swiper-slide">
    <img src="./images/vert-2.jpg" alt="" />
  </div>
  <div class="swiper-slide">
    <img src="./images/vert-3.jpg" alt="" />
  </div>
  <div class="swiper-slide">
    <img src="./images/vert-4.jpg" alt="" />
  </div>
  <div class="swiper-slide">
    <img src="./images/vert-5.jpg" alt="" />
  </div>
  <div class="swiper-slide">
    <img src="./images/vert-6.jpg" alt="" />
  </div>
  <div class="swiper-slide">
    <img src="./images/vert-7.jpg" alt="" />
  </div>
</div>
</div>


<div class="custom-next d-flex">
<i class="bx bx-chevron-right swiper-icon"></i>
</div>
<div class="custom-prev d-flex">
<i class="bx bx-chevron-left swiper-icon"></i>
</div>
<div class="custom-pagination d-flex"></div>
`;


document.getElementById("trips-container").innerHTML = trips;



let more  = "";


more += `
<div class="col">
<div class="title">
    <h1>More Place for <br> Your Next Travel</h1>
    <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, dolore laborum quidem reprehenderit voluptate numquam totam labore quam ea quae!
    </p>
</div>
<div class="tours">
    <div class="box">
        <img src="images/pic-2.jpg" alt="">
        <h3>Visit to Bali</h3>
        <h4>$ 1400</h4>
    </div>
    <div class="box">
        <img src="images/pic-3.jpg" alt="">
        <h3>Visit to Greece</h3>
        <h4>$ 1700</h4>
    </div>
</div>
<a href="" class="btn">Explore more tours now</a>
</div>
<div class="col">
    <img src="images/pic-4.jpg" alt="">
</div>
`;

document.getElementById("more").innerHTML = more;






let newsletter = "";

newsletter += `
<div class="col">
<h2>Subscribe to our newletter</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate assumenda, nisi saepe tenetur suscipit.</p>
</div>
<form action="" class="form">
 <div>
     <input type="email" placeholder="Enter your email">
     <button>Submit</button>
 </div>
</form>
`;

document.getElementById("newsletter").innerHTML = newsletter;



let contact = "";

contact += `
<div class="title">
        <h1>Contact Us</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni totam eius 
            atque porro consequuntur perferendis quam ex doloribus, est laudantium.
        </p>
    </div>
    <div class="location container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2977.9676828286947!2d44.7964742!3d41.7212162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d331ec6d1e9%3A0xe3dde2b6b7273cbf!2sTbilisi%20Central%20Railway%20Station!5e0!3m2!1sen!2sge!4v1707479890103!5m2!1sen!2sge" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
`;

document.getElementById("contact").innerHTML = contact;



let foot = "";

foot += `
<div class="col">
<h3>Company</h3>
<a href="">Contact Us</a>
<a href="">Executive</a>
<a href="">Contact Us</a>
<a href="">Executive</a>
</div>
<div class="col">
<h3>Learning Center</h3>
<a href="">Contact Us</a>
<a href="">Executive</a>
<a href="">Contact Us</a>
<a href="">Executive</a>
</div>
<div class="col">
<h3>Partner With</h3>
<a href="">Contact Us</a>
<a href="">Executive</a>
<a href="">Contact Us</a>
<a href="">Executive</a>
</div>
<div class="col">
<img src="images/pic-1.jpg" alt="">
<img src="images/pic-2.jpg" alt="">
<img src="images/pic-3.jpg" alt="">
<img src="images/pic-4.jpg" alt="">
</div>
`;

document.getElementById("footer").innerHTML = foot;