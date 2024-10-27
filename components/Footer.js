// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto pt-10  sm:px-6 lg:px-8">
        <svg
          role="img"
          className="icon icon-LogoBetter2021"
          width="85px"
          height="35px"
          viewBox="0 0 495 133"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Better</title>
          <path
            d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z"
            fill="#017848"
          ></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto pt-8 pb-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* First Column */}
        <div className="flex-shrink flex-grow basis-1/6">
          <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">
            Better is a family of companies serving all your homeownership
            needs.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="mt-4">
              <a href="/mortgage/">
                <img
                  alt="better mortgage homepage"
                  loading="lazy"
                  width="150"
                  height="23"
                  decoding="async"
                  src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                We can’t wait to say “Welcome home.” Apply 100% online, with
                expert customer support.
              </p>
            </li>
            <li>
              <a href="/b/realestate/">
                <img
                  alt="better real estate page"
                  loading="lazy"
                  width="160"
                  height="21"
                  decoding="async"
                  src="https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Connect with a local Better Real Estate Partner Agent to find
                out all the ways you can save.
              </p>
            </li>
            <li>
              <a href="https://www.bettercover.com/">
                <img
                  alt="better cover page"
                  loading="lazy"
                  width="115"
                  height="21"
                  decoding="async"
                  src="https://media.better.com/better-com/1660240096238/better-cover-logo.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Shop, bundle, and save on insurance coverage for home, auto,
                life, and more.
              </p>
            </li>
            <li>
              <a href="/content/home-inspection-checklist/">
                <img
                  alt="better inspect page"
                  loading="lazy"
                  width="130"
                  height="23"
                  decoding="async"
                  src="https://media.better.com/better-com/1660240096238/better-inspect-logo.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Get free repair estimates, 24-hour turnarounds on reports, and
                rest easy with our 100-day inspection guarantee.
              </p>
            </li>
            <li>
              <a href="/title/">
                <img
                  alt="better title services page"
                  loading="lazy"
                  width="240"
                  height="21"
                  decoding="async"
                  src="https://media.better.com/better-com/1660240096238/better-settlement-services-logo.svg"
                  style={{ color: "transparent" }}
                />
              </a>
              <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-sm mt-3">
                Get transparent rates when you shop for title insurance all in
                one convenient place.
              </p>
            </li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="flex-shrink flex-grow basis-0">
  <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
    Resources
  </h4>
  <ul className="mt-2 space-y-4 md:mt-6">
    <li>
      <a href="/how-much-house-can-i-afford" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Home affordability calculator
      </a>
    </li>
    <li>
      <a href="/mortgage-calculator/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Mortgage calculator
      </a>
    </li>
    <li>
      <a href="/free-mortgage-calculator/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Free mortgage calculator
      </a>
    </li>
    <li>
      <a href="/mortgage-calculator-with-taxes/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Mortgage calculator with taxes
      </a>
    </li>
    <li>
      <a href="/mortgage-calculator-with-pmi/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Mortgage calculator with PMI
      </a>
    </li>
    <li>
      <a href="/rent-vs-buy-calculator/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Rent vs buy calculator
      </a>
    </li>
    <li>
      <a href="/heloc-calculator" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        HELOC payment calculator
      </a>
    </li>
    <li>
      <a href="/heloc-vs-cashout-refi-calculator/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        HELOC vs cash-out refinance calculator
      </a>
    </li>
    <li>
      <a href="/content/buying-a-house-online/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Buy a home
      </a>
    </li>
    <li>
      <a href="/content/buying-and-selling-a-home-at-the-same-time/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Sell a home
      </a>
    </li>
    <li>
      <a href="/content/home-inspection-checklist/" className="block py-1 text-link relative hover:underline hover:decoration-current hover:underline-offset-4">
        Get home inspection
      </a>
    </li>
  </ul>
</div>


        {/* Third Column */}
        <div className="flex-shrink flex-grow basis-0">
  <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">
    Company
  </h2>
  <ul className="mt-2 space-y-4 md:mt-6">
    <li>
      <Link
        href="#"
        className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8 hover:underline hover:decoration-current hover:underline-offset-4"
      >
        About Us
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8 hover:underline hover:decoration-current hover:underline-offset-4"
      >
        Careers
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8 hover:underline hover:decoration-current hover:underline-offset-4"
      >
        Media
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8 hover:underline hover:decoration-current hover:underline-offset-4"
      >
        Partner With Us
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8 hover:underline hover:decoration-current hover:underline-offset-4"
      >
        Learning Center
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8 hover:underline hover:decoration-current hover:underline-offset-4"
      >
        FAQs
      </Link>
    </li>
    <li>
      <Link
        href="#"
        className="hover-gradient-effect block py-1 text-link styles_hover-gradient-effect__AIX_8 hover:underline hover:decoration-current hover:underline-offset-4"
      >
        Investor Relations
      </Link>
    </li>
  </ul>
</div>


        {/* Fourth Column */}
        <div className="flex-shrink flex-grow basis-0">
  <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg">Contact Us</h4>
  <ul className="mt-2 space-y-4 md:mt-6">
    <li>
      <a className="text-link hover:underline hover:text-linkHover" href="mailto:hello@better.com">hello@better.com</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover" href="tel:415-523-8837">415-523-8837</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover block py-1" href="/faq/">FAQ</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover block py-1" href="/glossary">Glossary</a>
    </li>
  </ul>

  <h4 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-base md:text-lg mt-6">Legal</h4>
  <ul className="mt-2 space-y-4 md:mt-6">
    <li>
      <a className="text-link hover:underline hover:text-linkHover" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511">NMLS Consumer Access</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover block py-1" href="/about-us/privacy-policy/">Privacy Policy</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover block py-1" href="/about-us/terms-of-use/">Terms of Use</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover block py-1" href="/about-us/licensing-disclosure/">Disclosures & Licensing</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover block py-1" href="/about-us/affiliated-business/">Affiliated Business</a>
    </li>
    <li>
      <a className="text-link hover:underline hover:text-linkHover block py-1" href="/browser-support">Browser Disclaimer</a>
    </li>
  </ul>

  <div className="mt-8 flex gap-4">
            <svg
                data-qa="ehl-logo"
                aria-label="Ehl logo"
                role="img"
                fill="none"
                height="40"
                width="41"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10" // Adjust the size as needed
            >
                <path
                    clipRule="evenodd"
                    d="M33.047 25.681H8.24V11.733l12.54-7.416 12.268 7.416v13.948zM20.78.106L1.292 11.287v4.04h2.986V29.22h32.516V15.328h3.04v-3.93L20.78.106z"
                    fill="#6F7672"
                    fillRule="evenodd"
                />
                <path
                    clipRule="evenodd"
                    d="M14.11 17.045h12.974v-3.432H14.11v3.432zM14.11 22.156h12.974v-3.432H14.11v3.432zM23.345 38.932h-.977v-2.49h1.086c.76 0 1.466.442 1.466 1.328 0 .996-.652 1.162-1.575 1.162zm.11-3.43h-2.28v4.373H23.4c1.79 0 2.822-.388 2.822-2.103 0-1.771-1.14-2.27-2.768-2.27zM36 37.112h-1.738v-.664h1.791c.489 0 .706.055.706.332 0 .332-.163.332-.76.332zm.71.936c.814-.11 1.195-.443 1.195-1.162 0-.996-.49-1.384-1.683-1.384h-3.149v4.373h1.194v-1.827h1.14l1.249 1.827h1.303l-1.249-1.827zM14.63 35.502v4.373h1.14v-2.657l2.28 2.657h1.357v-4.373h-1.14v2.712l-2.28-2.712H14.63zM3.438 35.502v4.373h4.288v-.941l-3.094-.055v-3.377H3.438zM8.954 39.875h4.18v-.941h-2.931v-.941h2.443v-.886h-2.443v-.664h2.931v-.94h-4.18v4.372zM27.56 35.502v4.373l4.125-.055v-.886h-2.931v-.941h2.497v-.886h-2.497v-.664h2.931v-.94H27.56zM13.145 32.887l.325-1.55.38 1.55h-.705zm.81-2.391h-.923l-1.086 3.93h.791l.24-.886h.977l.24.886h.846l-1.085-3.93zM7.681 32.987c0 .72-.054.885-.489.885-.38 0-.488-.221-.488-.94v-.942c0-.72.054-.94.543-.94.38 0 .434.11.434.885v1.052zm.6.886c.163-.332.218-.553.218-1.051v-.83c0-.942-.217-1.606-1.303-1.606-.977 0-1.303.554-1.303 1.55v1.052c0 1.328.76 1.383 2.986 1.383l.054-.276-.651-.222zM28.043 33.374c0 .609.38 1.107 1.248 1.107.706 0 1.357-.498 1.357-1.107 0-.941-1.737-1.384-1.737-1.993 0-.221.217-.332.434-.332.326 0 .489.221.652.554l.542-.222c-.054-.553-.434-.996-1.248-.996-.651 0-1.194.332-1.194.996 0 1.107 1.737 1.384 1.737 2.103 0 .277-.163.388-.489.388-.325 0-.543-.221-.651-.609l-.651.11zM23.946 32.986c0 .665-.163.886-.488.886-.434 0-.489-.277-.489-.83v-1.218c0-.498.055-.83.489-.83s.488.388.488.83v1.162zm-.486-2.601c-.814 0-1.303.443-1.303 1.494v1.273c0 .941.271 1.329 1.303 1.329 1.031 0 1.303-.443 1.303-1.495V31.77c0-.997-.272-1.384-1.303-1.384zM35.3 32.986c0 1.163.325 1.495 1.41 1.495.841 0 1.087-.402 1.087-.83v-1.273h-1.14v.608h.38v.443c0 .332-.109.498-.38.498-.543 0-.598-.387-.598-.94V32.1c0-.664.055-1.107.598-1.107.38 0 .597.276.65.664l.544-.221c-.054-.665-.489-1.052-1.249-1.052-1.085 0-1.302.608-1.302 1.439v1.162zM25.102 30.495v2.27c0 1.328.223 1.753 1.363 1.753.869 0 1.188-.48 1.188-1.643v-2.38h-.76v2.27c0 .885-.054 1.106-.488 1.106s-.489-.332-.489-1.162v-2.214h-.814zM32.355 30.496v3.93h.65v-2.657l.924 2.657h.977v-3.93h-.652v2.435l-.868-2.435h-1.032zM9.28 30.495v2.38c0 1.107.108 1.606 1.194 1.606 1.248 0 1.303-.61 1.303-1.716v-2.27h-.76v2.325c0 .775-.109.996-.489.996-.434 0-.489-.221-.489-1.107v-2.214h-.76zM19.152 30.496v3.93h.76v-1.772h.923v1.771h.76v-3.93h-.76v1.495h-.923v-1.494h-.76zM3.383 30.496v3.93h1.954v-.61H4.143V32.71h1.085v-.554H4.143v-1.051h1.194v-.61H3.383zM15.384 30.496v3.93h1.792v-.61h-1.14v-3.32h-.652zM31.047 34.425h.706v-3.93h-.706v3.93z"
                    fill="#6F7672"
                    fillRule="evenodd"
                />
            </svg>
            <svg
                aria-label="Eho logo"
                data-qa="eho-logo"
                fill="none"
                height="40"
                role="img"
                width="43"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10" // Adjust the size as needed
            >
                <path
                    clipRule="evenodd"
                    d="M3.834 1.56A1.215 1.215 0 012.63 1.79c-.454.174-.792.51-.967.968-.29.724-.124 1.47.388 2.004l.016.017 9.54 9.535-9.54 9.537a1.217 1.217 0 00-.38 1.476c.174.458.513.794.967.967.727.286 1.477.145 2.004-.39l.017-.017 10.868-10.87c.21-.21.293-.49.293-.774s-.083-.565-.293-.774L5.392 1.56l-.003-.002zm25.892 0l-9.537 9.54 9.537 9.537c.393.392.576.912.576 1.474s-.184 1.082-.576 1.474c-.454.174-.79.51-.967.968-.289.724-.125 1.47.388 2.004l.016.017 9.537 9.54c.39.39.912.575 1.474.575s1.082-.185 1.474-.575c.392-.393.577-.913.577-1.474 0-.561-.185-1.081-.577-1.474L28.579 24.74l9.537-9.537c.393-.39.575-.912.575-1.474s-.182-1.084-.575-1.474c-.454-.174-.79-.51-.967-.968-.289-.724-.125-1.47.388-2.004l.016-.017 9.54-9.537A1.215 1.215 0 0036.726 1.56c-.458-.173-.921-.162-1.39.06-.267.113-.52.277-.72.476l-.017.017z"
                    fill="#6F7672"
                    fillRule="evenodd"
                />
            </svg>
        </div>
</div>


<div className="mt-12 flex gap-x-4 md:mt-60">
  
  <div>
    <a aria-label="Facebook" href="https://www.facebook.com/better/" rel="noopener noreferrer" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    </a>
  </div>
  
 
  <div>
    <a aria-label="Instagram" href="https://www.instagram.com/betterdotcom/" rel="noopener noreferrer" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    </a>
  </div>
  
  
  <div>
    <a aria-label="LinkedIn" href="https://www.linkedin.com/company/betterdotcom/" rel="noopener noreferrer" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#313131" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
  </div>


  
</div>






      </div>



      <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
    <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See <a className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit" href="/with/one-day-mortgage-terms/">One Day Mortgage™ Terms and Conditions.</a>
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
    <sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See <a className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit" href="/b/better-mortgage-one-day-heloc-promotion-terms-and-conditions/">One Day Heloc™ Terms and Conditions.</a>
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-3">
    <sup>3</sup>Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
  </p>

  <hr className="my-xl border-strokeBorder" />

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
    © 2024 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a className="underline" data-qa="nmls-link" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511">NMLS Consumer Access</a>
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s <a className="underline" href="/with/better-realestate-license/">license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    <a className="underline" href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf">New York State Housing and Anti-Discrimination Notice</a>
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    <a className="underline" href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf">New York Standard Operating Procedures</a>
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Texas Real Estate Commission: <a className="underline" href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=645736">Information About Brokerage Services</a> | <a className="underline" href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf">Consumer Protection Notice</a>
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s <a className="underline" href="https://www.bettercover.com/licenses">license numbers</a>.
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
  </p>

  <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
    Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
  </p>
</div>


    </footer>
  );
};

export default Footer;
