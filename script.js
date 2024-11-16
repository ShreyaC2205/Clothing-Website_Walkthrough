document.addEventListener('DOMContentLoaded', function () {
  const slideLeftBtn = document.querySelector('.slideLeft'); 
  const slideRightBtn = document.querySelector('.slideRight'); 
  const QandAItems = document.querySelectorAll('.QandA1'); 
  let currentIndex = 0;

  const images = [
    { src: "public/IMG/ss1.png", alt: "Landing page", title: "Landing Page" },
    { src: "public/IMG/ss2.png", alt: "Navigation Bar", title: "Navigation Bar" },
    { src: "public/IMG/ss3.png", alt: "SignUp page", title: "SignUp page" },
    { src: "public/IMG/ss4.png", alt: "Login page", title: "Login page" },
    { src: "public/IMG/ss5.png", alt: "Coupon section", title: "Coupon section" },
    { src: "public/IMG/ss6.png", alt: "Coupon section", title: "Coupon section" },
    { src: "public/IMG/ss7.png", alt: "Ad section", title: "Ad section" },
    { src: "public/IMG/ss8.png", alt: "Lowest Price section", title: "Lowest Price section" },
    { src: "public/IMG/ss9.png", alt: "Categories section", title: "Categories section" },
    { src: "public/IMG/ss10.png", alt: "Ad section", title: "Ad section" },
    { src: "public/IMG/ss11.png", alt: "Offer Zone section", title: "Offer Zone section" },
    { src: "public/IMG/ss12.png", alt: "Best Seller section", title: "Best Seller section" },
    { src: "public/IMG/ss13.png", alt: "Shop section", title: "Shop section" },
    { src: "public/IMG/ss14.png", alt: "New Arrival section", title: "New Arrival section" },
    { src: "public/IMG/ss15.png", alt: "Trending Zone section", title: "Trending Zone section" },
    { src: "public/IMG/ss16.png", alt: "Trending Zone section", title: "Trending Zone section" },
    { src: "public/IMG/ss17.png", alt: "Trending Zone section", title: "Trending Zone section"},
    { src: "public/IMG/ss18.png", alt: "Styling Tips section", title: "Styling Tips section"},
    { src: "public/IMG/ss19.png", alt: "Contact section", title: "Contact section"},
    { src: "public/IMG/ss20.png", alt: "Contact section", title: "Contact section"},
];

const components = [
  [
  { title: "Landing page", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif1.mp4", target: "expand1" },
  { title: "Navigation", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif2.mp4", target: "expand2" },
  { title: "Login Page", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif3.mp4", target: "expand3" }
],
  [
  { title: "Coupon Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif4.mp4", target: "expand4" },
  { title: "Ad Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif5.mp4", target: "expand5" },
  { title: "Lowest Price Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif6.mp4", target: "expand6" }
], 
  [
    { title: "Category Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif7.mp4", target: "expand7" },
    { title: "Ad Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif8.mp4", target: "expand8" },
    { title: "Offer Zone", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif9.mp4", target: "expand9" }
  ],
  [
    { title: "BestSellers Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif10.mp4", target: "expand10" },
    { title: "Shop Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif11.mp4", target: "expand11" },
    { title: "New Arrival Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif12.mp4", target: "expand12" }
  ],
  [
    { title: "Trend Zone Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif13.mp4", target: "expand13" },
    { title: "Styling Tips Section", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif14.mp4", target: "expand14" },
    { title: "Contact Page", videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif15.mp4", target: "expand15" }
  ]
  ]

  const expandData = [
    {
      id: "expand1",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif1.mp4",
      description: `The landing page introduces users to a dynamic and engaging shopping experience. It features a clean,
          visually appealing grid layout that displays promotional cards related to seasonal offers, fashion trends, and
          exclusive coupons. The interactive design enhances the user experience by incorporating a smooth cursor
          animation. when users move their cursor, an "explore" element follows, adding a layer of responsiveness and
          engagement. Users can directly interact with these promotional cards by clicking on them to take immediate
          advantage of sales, offers, and coupon codes. This approach provides an intuitive and seamless way for
          visitors to explore ongoing promotions and fashion collections. with subtle hover effects that provide a
          polished user experience. This landing page emphasizes the visual aesthetics and front-end functionality,
          ensuring a modern and stylish interface while maintaining simplicity and ease of navigation. <span
            class="para">the landing page aims to attract and retain users, encouraging them to take advantage of the
            promotions presented.</span>`
    },
    {
      id: "expand2",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif2.mp4",
      description: `The navigation bar of the website offers a streamlined and interactive experience, with a slide-in effect
          from the right upon activation. when the navigation bar is expanded, an overlay gets visible to ensure blur
          out
          the background to enhance the focus only on navigation bar. It features essential actions like login/signup,
          product search, cart, wishlist, and order tracking, making it easy for users to engage with the platform.
          Designed with icons for
          each function, the navigation also provides hover effects, enhancing usability and adding a visually dynamic
          touch. Additional functionalities include access to app downloads, customer support contact, and live chat,
          all housed in a sleek and modern layout that keeps navigation intuitive and efficient. <span class="para"> The
            collapsible design ensures that users can easily access key functions while maintaining a clean, uncluttered
            interface when the menu is not in use, maximizing screen space and improving the browsing experience.</span>`
    },
    {
      id: "expand3",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif3.mp4",
      description: `The login page is crafted to provide a smooth and visually appealing user experience, The background image,
          featuring women’s fashion and contemporary styles, resonates perfectly with the website's theme, enhancing the
          overall user experience and aligning with the brand's identity. The form is encased in a sleek,
          semi-transparent black overlay, offering a refined and focused interface. The page dynamically switches
          between a "New User" sign-up with a promotional coupon display and an "Existing User" login, adapting to user
          needs. Key interactions like email or mobile input are highlighted with clean, minimalistic design elements,
          while bold, hover responsive buttons guide users through the authentication process, ensuring an intuitive and
          engaging user journey. <span class="para">The aim of this login page is to provide users with a smooth and
            intuitive authentication process, while subtly promoting engagement through visually appealing offers and a
            clear, user-friendly design that enhances both accessibility and interaction.</span>`
    },
    {
      id: "expand4",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif4.mp4",
      description: `The login page is crafted to provide a smooth and visually appealing user experience, The background image,
          featuring women’s fashion and contemporary styles, resonates perfectly with the website's theme, enhancing the
          overall user experience and aligning with the brand's identity. The form is encased in a sleek,
          semi-transparent black overlay, offering a refined and focused interface. The page dynamically switches
          between a "New User" sign-up with a promotional coupon display and an "Existing User" login, adapting to user
          needs. Key interactions like email or mobile input are highlighted with clean, minimalistic design elements,
          while bold, hover responsive buttons guide users through the authentication process, ensuring an intuitive and
          engaging user journey. <span class="para">The aim of this login page is to provide users with a smooth and
            intuitive authentication process, while subtly promoting engagement through visually appealing offers and a
            clear, user-friendly design that enhances both accessibility and interaction.</span>`
    },
    {
      id: "expand5",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif5.mp4",
      description: `The advertisement section of my website is designed to grab attention with bold, animated visuals and a
          compelling "End of Season Sale" message. The section uses smooth transitions and dynamic visuals while
          ensuring that the design elements provide a 3D effect. The purpose was to make it appear as if the girls
          featured in the images were coming out from the mobile screen, enhancing the overall visual appeal and user
          engagement. Featuring a prominent circular banner with key sale details, like discounts
          of 50% to 90% off, it encourages users to take immediate action with a clear and vibrant "Shop Now" button.
          Using GSAP and Framer Motion, the animations are seamless, and Locomotive Scroll adds depth to the scrolling
          effect.<span class="para">The ad section is not only aesthetically striking but also functional, ensuring that
            the sale message stands out while maintaining user engagement.</span>`
    },
    {
      id: "expand6",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif6.mp4",
      description: `The "Lowest Price Store" section is strategically designed to attract budget-conscious shoppers by showcasing
          an enticing selection of women’s clothing at competitive prices. This feature presents a visually dynamic
          horizontal scroll of product cards, that highlight attractive visuals alongside their respective prices. Each
          card is designed to captivate users while emphasizing the exceptional value offered. Enhanced by Framer
          Motion, the animations provide a smooth and interactive feel, ensuring that users remain engaged as they
          navigate through various offers. <span class="para">this component exemplifies a commitment to user-centric
            design and accessibility, encouraging customers to explore and take advantage of unbeatable offers.</span>`
    },
    {
      id: "expand7",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif7.mp4",
      description: `The category section on my women's clothing website offers an elegant and user-friendly way to explore
          different styles and collections. The grid layout offers an intuitive browsing experience, with each
          category—such as tops, ethnic wear, and party wear—represented through striking images As users scroll through
          the sections by button click, smooth scroll animations create a seamless flow between options. A vertical text
          animation featuring phrases like 'Latest Trend' and 'Steal Deals' further enhances the dynamic feel of this
          section, encouraging users to explore more. <span class="para">This category component is designed to
            streamline the shopping experience, making it easy for users to discover and navigate through different
            clothing styles while delivering an immersive, visually dynamic interface that enhances user
            engagement.</span>`
    },
    {
      id: "expand8",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif8.mp4",
      description: `The advertisement section is designed to captivate the user’s attention with dynamic visuals and smooth
          animations, offering an engaging browsing experience. The section prominently features different promotional
          offers along with their respective discounts. This animation-driven presentation enhances the impact of the
          offers, making them more noticeable and appealing to potential customers. By incorporating smooth transitions
          powered by GSAP, the section ensures that the promotions are showcased in an elegant, seamless manner, The
          design effectively captures attention. <span class="para">The purpose of this advertisement section is to
            captivate users by showcasing key promotional offers through dynamic visuals and smooth transitions,
            encouraging user engagement and emphasizing discounts on various categories.</span>`
    },
    {
      id: "expand9",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif9.mp4",
      description: `The "Offer Zone" section is designed to present users with attractive deals and discounts, featuring a
          visually appealing layout with product cards and brand logos. This section showcases a range of clothing item
          categories with each product accompanied by a brand logo and an eye-catching discount offer. The card-based
          layout, paired with smooth animations and vibrant visuals, ensures an engaging shopping experience.
          Additionally, the scrolling brand strip located between the offer cards showcases various popular brands,
          reinforcing the credibility and variety of the product offerings. This dynamic section captures user
          attention, making it easy for shoppers to explore and take advantage of ongoing promotions. <span
            class="para">The "Offer Zone" section is to highlight exclusive discounts and promotions, encouraging users
            to explore and purchase featured products from top brands.</span>`
    },
    {
      id: "expand10",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif10.mp4",
      description: `The Bestsellers section showcases the most popular fashion items through an interactive horizontal scrolling
          layout. Each product card features bold text, eye-catching imagery, and essential details like brand, style,
          discount percentages, and popularity indicators with number of purchase in a month. In this section, as the
          product cards slide into view, carefully selected words emerge behind them. These words are thoughtfully
          chosen to reflect the style and attitude of each outfit, capturing its essence and adding an extra layer of
          connection between the product and its aesthetic appeal. The dynamic reveal enhances the user experience,
          making each item feel more personalized and stylishly descriptive. A prominent title "BESTSELLERS" captures
          attention at the top, while users can explore a range of high-demand products in a seamless and visually
          captivating browsing experience. <span class="para"> This section is designed to engage users by featuring
            top-trending products and driving interest in current fashion must-haves.`
    },
    {
      id: "expand11",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif11.mp4",
      description: `The "Shop" section is designed to emulate the experience of browsing in a real store, giving users a familiar
          and engaging feel. It combines sliding windows with smooth transitions, allowing users to navigate through
          different product groups, each highlighting key brand information, ratings, and follower counts. The goal is
          to create an immersive and dynamic shopping experience that mirrors the physical act of moving between store
          displays, enhanced by interactive elements like the ability to visit shops and follow brands directly from the
          interface. The layout and animations aim to keep the user experience fluid and visually appealing. <span
            class="para">This section aims to evoke the ambiance of a retail environment, offering users an interactive
            and enjoyable way to browse and select their desired items.</span>`
    },
    {
      id: "expand11",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif11.mp4",
      description: `The "Shop" section is designed to emulate the experience of browsing in a real store, giving users a familiar
          and engaging feel. It combines sliding windows with smooth transitions, allowing users to navigate through
          different product groups, each highlighting key brand information, ratings, and follower counts. The goal is
          to create an immersive and dynamic shopping experience that mirrors the physical act of moving between store
          displays, enhanced by interactive elements like the ability to visit shops and follow brands directly from the
          interface. The layout and animations aim to keep the user experience fluid and visually appealing. <span
            class="para">This section aims to evoke the ambiance of a retail environment, offering users an interactive
            and enjoyable way to browse and select their desired items.</span>`
    },
    {
      id: "expand12",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif12.mp4",
      description: `The "New Arrival" section introduces the latest fashion products in a sleek, horizontally scrollable display.
          It showcases a variety of product cards with rich imagery, brand names, product types, pricing, and discounts.
          Each card features a "New" tag to highlight its fresh appeal. Users can effortlessly browse through the items,
          aided by an auto-scrolling feature that pauses when manually interacted with. The design advantage lies in its
          compact, clean layout, allowing users to effortlessly browse through new arrivals while the scroll behavior
          maintains visual interest. <span class="para"> This section promotes discoverability and user interaction,
            driving attention to fresh stock with minimal navigation effort.</span>`
    },
    {
      id: "expand12",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif12.mp4",
      description: `The "New Arrival" section introduces the latest fashion products in a sleek, horizontally scrollable display.
          It showcases a variety of product cards with rich imagery, brand names, product types, pricing, and discounts.
          Each card features a "New" tag to highlight its fresh appeal. Users can effortlessly browse through the items,
          aided by an auto-scrolling feature that pauses when manually interacted with. The design advantage lies in its
          compact, clean layout, allowing users to effortlessly browse through new arrivals while the scroll behavior
          maintains visual interest. <span class="para"> This section promotes discoverability and user interaction,
            driving attention to fresh stock with minimal navigation effort.</span>`
    },
    {
      id: "expand13",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif13.mp4",
      description: `The "Trend Zone" section spotlights trending fashion brands and their latest products, offering users a
          visually engaging experience. It features vibrant product cards with captivating images, product descriptions,
          ratings, and special offers. Each brand is showcased with dedicated sections that highlight their signature
          styles, including categories such as Western, Fusion, and Winter wear etc. This section presents users with a
          seamless blend of fashion videos and product cards, where the outfits showcased in the videos are mirrored by
          the items displayed in the cards. This visual continuity enhances brand storytelling, allowing users to
          explore and shop the exact looks they see in action. <span class="para">The dynamic design, featuring smooth
            transitions and interactive elements, promotes a more engaging and immersive shopping experience,
            strengthening user-brand connections while highlighting trending styles. Users can easily explore product
            offers, follow brands, or watch promotional videos, all while enjoying a dynamic, trend-focused browsing
            experience.</span>`
    },
    {
      id: "expand14",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif14.mp4",
      description: `The "Styling Tips" component suggests how to style your outfit like complementary accessories such as
          ornaments, footwear, and handbags to pair with an outfit. It features a rotating display of products with a
          "Quick Buy" section for each pairing, highlighting key details like brand names, descriptions, prices, offers,
          and ratings. A unique aspect of this component is that the outfits shown in the background image are the same
          as those displayed in the product cards. As users explore different outfit combinations using the "Next"
          button, the same outfit is mirrored in the Quick Buy cards, ensuring consistency and enhancing the shopping
          experience. <span class="para">Smooth transitions between product images, interactive elements, and dynamic
            visuals encourage users to shop or explore more, while animations enhance the overall interactivity and
            design.</span>`
    },
    {
      id: "expand15",
      videoSrc: "https://cdn.jsdelivr.net/gh/ShreyaC2205/clothing-website_walkthrough@main/public/videos/gif14.mp4",
      description: `The 'Contact Us' component is designed to streamline communication between the brand and its customers. At
          the top of the page, key titles like "Best Price," "Free Shipping," and "Cash on Delivery," along with icons,
          emphasize the brand's commitment to customer satisfaction. Trust is further reinforced with logos showcasing
          "Secure Payment," "Great Customer Satisfaction," and "Premium Quality." Social media links enable customers to
          connect easily, while a Google Play Store icon offers direct access to the mobile app. Various payment methods
          ensure seamless transactions, and customers can reach support via email, phone, or live chat 24/7.
          Additionally, customer reviews and ratings are featured in an engaging auto-slide animation, enhancing
          credibility and fostering trust. <span class="para">This comprehensive approach not only streamlines customer
            interaction but also strengthens the brand's relationship with its audience.</span>`
    },
  ]
  
  //CODE FOR IMAGE GALLERY
const container = document.querySelector('.container');
images.forEach(({ src, alt, title }) => {
    const imageHTML = `
      <div class="image1">
          <div class="imgg">
              <img src="${src}" alt="${alt} loading="lazy">
              <div class="headingg">
                  <h2>${title}</h2>
              </div>
          </div>
      </div>`;
    container.insertAdjacentHTML('beforeend', imageHTML);
});

//FEATURE SECTION
const gifsContainer = document.querySelector(".gifs");

components.forEach((componentSet, index) => {
  const componentsDiv = document.createElement("div");
  componentsDiv.classList.add(`components${index + 1}`);

  componentSet.forEach(({ title, videoSrc, target }, i) => {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add(`content${i + 1 + index * 3}`);

    contentDiv.innerHTML = `
    <video src="${videoSrc}" autoplay muted loop playsinline loading="lazy"></video>
      <div class="components">
      <span>${title}</span>
      <button class="expand-btn" data-target="${target}">Expand &#10530;</button>
      </div>
      `;
      
      componentsDiv.appendChild(contentDiv);


    const data = expandData.find(item => item.id === target);

    if (data) {
      const expandDiv = document.createElement("div");
      expandDiv.classList.add("expand");
      expandDiv.id = data.id;
      
      expandDiv.innerHTML = `
      <div class="expandGIF">
      <video src="${data.videoSrc}" autoplay muted loop playsinline loading="lazy"></video>
        </div>
        <div class="description">
        <p>${data.description}</p>
        </div>
        <button class="close-btn">&times;</button>
        `;
        
        gifsContainer.appendChild(expandDiv);

        contentDiv.querySelector(".expand-btn").addEventListener("click", () => {
        expandDiv.classList.add("show");
      });

      expandDiv.querySelector(".close-btn").addEventListener("click", () => {
        expandDiv.classList.remove("show");
      });
    }
  });
  
  gifsContainer.appendChild(componentsDiv);
});

//CHALLENGE SECTION
slideLeftBtn.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % QandAItems.length;
  
  const translateXValue = -currentIndex * 100; 

  QandAItems.forEach((item) => {
    item.style.transform = `translateX(${translateXValue}%)`;
    item.style.transition = 'transform 0.5s ease';
  });
});  

slideRightBtn.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + QandAItems.length) % QandAItems.length;
  
  const translateXValue = -currentIndex * 100;
  
  QandAItems.forEach((item) => {
    item.style.transform = `translateX(${translateXValue}%)`;
    item.style.transition = 'transform 0.5s ease'; 
  });
});  

const imggElements = document.querySelectorAll('.imgg');

function updateSlidePosition() {
    const translateXValue = -currentIndex * 100; 
    imggElements.forEach((item) => {
        item.style.transform = `translateX(${translateXValue}%)`;
    });
}


document.querySelector('.ImgslideLeft').addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imggElements.length;
    updateSlidePosition();
});

document.querySelector('.ImgslideRight').addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imggElements.length;
    updateSlidePosition();
});

});
