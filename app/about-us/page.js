"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Play } from "lucide-react";
import Link from 'next/link';

// import React from 'react';

import React, { useState } from "react";

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const timeline = [
    {
      year: "2014",
      description:
        "NYC living gave him zaffered to purchase his own dream home, he quickly realized how frustrating and inefficient the home-loan process was. Instead of fighting and eschewing home-buying tradition, he'd have to break it.",
    },
    {
      year: "2015",
      description:
        "Better: We target to do is first mortgage loan and stay online without a single phone call.",
    },
    {
      year: "2016",
      description:
        'Better: Mortgage becomes a Fannie Mae approved agent ("seller") and establishes relationship with top mortgage insurers',
    },
    {
      year: "2017",
      description:
        "Better expands into the real estate market with Better Real Estate",
    },
    {
      year: "2018",
      description:
        "Better Mortgage partners with Ally Bank to drive $5 billion in Better",
    },
    {
      year: "2019",
      description:
        "Better Mortgage launches its cold underwriting within Real-time Process, digitized documentation and approval within 20-minute closures",
    },
    {
      year: "2021",
      description:
        "Better acquires Trussle — the UK's most innovative online mortgage broker",
    },
    {
      year: "2022",
      description:
        "Better Mortgage becomes the first lender to launch Real-Estate cash funding service",
    },
    {
      year: "2023",
      description:
        "Better Mortgage launches One Day Verified Approval Letter and will be looking to capitalize on this innovation. Better returns consist of 350 mn.",
    },
    {
      year: "Today",
      description:
        "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Mission Section */}
      <div className="h-screen flex items-center justify-center">
  <div className="container mx-auto px-4 py-16 text-center">
    <h2 className="text-[#017848] font-bold text-3xl mb-6">Our mission</h2>
    <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight text-[#292B29]">
      We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
    </h1>
  </div>
</div>


      {/* Status Quo Section */}
      <div className="h-screen flex items-center justify-center">
  <div className="container mx-auto px-24 py-24 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
    <div>
      <h2 className="text-3xl font-bold mb-6">The status quo is broken</h2>
      <p className="text-gray-600 mb-6">
        The traditional processes around homeownership are opaque and
        stressful. Fees aren't transparent and some are simply outrageous in
        size. Traditional mortgage lending is rife with unnecessary fees and
        slow, painful processes. It's a system set up to benefit insiders — not
        you. Better.com CEO, Vishal Garg, set out to change that.
      </p>
      <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
        Read Vishal's story
      </button>
    </div>
    <div className="relative cursor-pointer" onClick={handlePlayClick}>
      {!isPlaying ? (
        <>
          <img
            src="https://media.better.com/video/vishal-mission.jpg"
            alt="CEO"
            className="rounded-lg w-full"
            loading="lazy"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg">
            <Play className="w-8 h-8 text-green-600" />
          </button>
        </>
      ) : (
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <iframe
            className="rounded-lg w-full h-full"
            src="https://www.youtube.com/embed/1KjYlLBM9j4"
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ height: "100%", aspectRatio: "16 / 9" }}
          ></iframe>
        </div>
      )}
    </div>
  </div>
</div>


      {/* How We're Changing Things Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How we're changing things
          </h2>
          <p className="max-w-4xl mx-auto text-lg">
            Homeownership is a huge part of our economy. Housing overall is a
            $33 trillion business, and mortgages account for $15 trillion. Yet
            home finance operates in the same way it has for decades — through
            opaque systems and expensive intermediaries whose interests are
            misaligned with consumers'.
          </p>
          <p className="max-w-4xl mx-auto text-lg mt-4">
            That's why Better.com is redefining the homeownership process from
            the ground up. We're using technology to make it faster and more
            efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </div>

      {/* Backed By Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Backed by</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <img 
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div> */}

      {/* Backed By Section */}

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#292B29]">
          Backed by
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {/* SVG for Partner 1 */}
          {/* <svg fill="none" height="90" viewBox="0 0 150 90" width="154" xmlns="http://www.w3.org/2000/svg">
    
    <path d="M11.104 35.25v6.517h26.111v-6.517h-26.112zm0 12.983v6.517h26.111v-6.517h-26.112z" fill="#bbbcbe"></path>
    
   
    
    
</svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 100"
            width="99"
            height="33"
          >
            <text
              x="0"
              y="70"
              font-family="Arial, sans-serif"
              font-size="60"
              fill="black"
            >
              SoftBank
            </text>
          </svg>

          {/* SVG for Partner 2 */}
          <svg
            fill="none"
            height="90"
            viewBox="0 0 150 90"
            width="154"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.929 26.703h6.64v29.28h-6.64v-29.28Z"
              fill="#292B29"
            ></path>
            <path
              d="M78.737 26.703h6.64v29.28h-6.64v-29.28Z"
              fill="#292B29"
            ></path>
            <path
              d="M87.187 34.729h7.243l4.376 12.931 4.376-12.931h7.243l-11.317 29.43h-7.243l3.462-8.322-8.14-21.108Z"
              fill="#292B29"
            ></path>
            <path
              d="M66.023 45.511c0-1.53-.27-2.97-.81-4.321a10.635 10.635 0 0 0-2.26-3.514c-.967-.991-2.122-1.78-3.466-2.365-1.344-.586-2.82-.879-4.428-.879-6.994 0-11.24 4.881-11.24 11.08 0 6.068 4.836 10.813 10.017 10.939l5.733-6.248-.094-.155v5.963h6.548v-10.5Zm-6.571 4.56-4.511.012c-3.091 0-6.509-4.382-3.023-7.815 3.092-3.047 7.726-.548 7.726 3.69l-.192 4.113Z"
              fill="#292B29"
            ></path>
          </svg>

          {/* SVG for Partner 3 */}
          <svg
            fill="none"
            height="90"
            viewBox="0 0 150 90"
            width="154"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#a)" fill="#000">
              <path d="m65.643 56.943-.105.11c-1.706 1.783-3.687 2.724-5.728 2.724-4.26 0-7.353-3.262-7.353-7.758 0-4.495 3.092-7.759 7.353-7.759 2.041 0 4.022.943 5.728 2.727l.105.11 2.745-3.383-.072-.088c-2.277-2.749-5.017-4.086-8.372-4.086-3.374 0-6.458 1.153-8.686 3.246-2.41 2.264-3.683 5.456-3.683 9.233 0 3.778 1.273 6.968 3.683 9.234 2.228 2.093 5.312 3.246 8.686 3.246 3.355 0 6.095-1.336 8.372-4.086l.072-.088-2.745-3.382Z"></path>
              <path d="M71.157 64.038h4.837V39.93h-4.837v24.108Z"></path>
              <path d="M94.96 58.797c-1.291.801-2.495 1.206-3.579 1.206-1.566 0-2.265-.838-2.265-2.719v-12.79h4.922v-4.539h-4.922V32.45l-4.748 2.595v4.911h-4.094v4.54h4.094V58.1c0 3.71 2.157 6.243 5.366 6.306 2.183.041 3.496-.613 4.292-1.11l.047-.028 1.169-4.648-.283.177Z"></path>
              <path d="M98.966 64.038h4.84V39.93h-4.84v24.108Z"></path>
              <path d="M106.85 36.03c-4.037-6.174-11.491-10.533-19.452-10.53-7.837.003-15.289 4.229-19.459 10.53h5.564c3.795-3.99 8.717-6.162 13.895-6.164 5.085-.003 10.086 2.173 13.889 6.165h5.563Z"></path>
            </g>
            <defs>
              <clipPath id="a">
                <path
                  d="M0 0h60.522v39H0z"
                  fill="#fff"
                  transform="translate(46.74 25.5)"
                ></path>
              </clipPath>
            </defs>
          </svg>

          {/* SVG for Partner 4 */}
          <svg
            fill="none"
            height="90"
            viewBox="0 0 150 90"
            width="154"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#000">
              <path d="m111.326 32.268a.44.44 0 0 1 -.442-.44v-1.778a.44.44 0 0 1 .442-.44h11.774c.242 0 .465.218.465.44v1.776c0 .245-.223.441-.465.441h-11.774zm-.734 5.63a.438.438 0 0 1 -.438-.442v-1.776a.45.45 0 0 1 .438-.438h13.192a.45.45 0 0 1 .438.438v1.777c0 .242-.193.441-.438.441h-2.344v7.55c0 .931-.761 1.659-1.688 1.659h-6.399a.433.433 0 0 1 -.439-.435v-1.562c0-.245.192-.438.439-.438h4.835v-6.775h-7.596zm-8.404 2.315c-.191 0-.314-.075-.314-.194 0-.04.014-.077.075-.15l3.564-4.411c.27-.316.343-.389.589-.389h2.782c.147 0 .243.073.243.221 0 .07-.022.121-.07.196l-2.909 3.63h1.319v7.555c0 .218-.22.435-.442.435h-2.292c-.245 0-.465-.193-.465-.435v-6.458zm0-5.63c-.215 0-.314-.074-.314-.2l.046-.119 3.593-4.435c.27-.338.343-.389.588-.389h2.783c.147 0 .243.076.243.193a.38.38 0 0 1 -.081.239l-3.632 4.511c-.119.15-.22.2-.488.2z"></path>
              <path d="m96.602 40.43c.27-.292.365-.365.585-.365h2.099c.27 0 .392.043.392.195 0 .073-.073.17-.22.34l-2.76 3.166.196.316c.315.538.365.612.486.736.172.172.268.194.835.194h1.147c.219 0 .436.217.436.435v1.224c0 .215-.217.434-.436.434h-1.714c-1.488 0-2.268-.364-2.856-1.313l-3.076-5.264a.558.558 0 0 1 -.1-.268c0-.122.077-.195.243-.195h2.276c.32 0 .387.073.633.463l.735 1.217 1.099-1.316zm-6.353-4.95v1.56h6.449v-1.56h-6.45zm6.449-3.675h-6.45v1.56h6.45zm-6.45 13.207h2.173c.245 0 .468.196.468.435v1.224c0 .215-.223.434-.468.434h-3.225c-.924 0-1.684-.753-1.684-1.658v-14.18c0-.9.76-1.657 1.684-1.657h8.602c.926 0 1.66.756 1.66 1.657v6.265c0 .925-.734 1.681-1.66 1.681h-7.55v5.8zm-6.981-5.68h2.61c.243 0 .464.195.464.441v1.461c0 .242-.215.441-.464.441h-2.61v3.337h2.073c.218 0 .44.196.44.435v1.224c0 .215-.222.434-.44.434h-3.25a1.676 1.676 0 0 1 -1.661-1.658v-3.772h-2.126a.44.44 0 0 1 -.439-.44v-1.462c0-.246.197-.44.44-.44h2.125v-1.926h-2.126a.435.435 0 0 1 -.439-.435v-1.492c0-.24.197-.435.44-.435h7.572c.243 0 .464.196.464.435v1.492c0 .242-.221.435-.464.435h-2.61v1.926zm2.61-8.43c.243 0 .464.196.464.441v1.485c0 .22-.221.435-.464.435h-4.886l-.341.587c-.196.367-.27.414-.635.414h-2.245c-.295 0-.369-.047-.369-.172 0-.047.023-.12.1-.242l2.222-4.022c.17-.315.246-.387.514-.387h2.438c.246 0 .346.05.346.145 0 .07-.024.147-.076.242l-.611 1.075h3.543z"></path>
              <path d="m60.282 38.9c0 1.197.074 1.293 1.439 1.95l2.593 1.173 2.585-1.173c1.392-.68 1.445-.753 1.445-1.95v-.851h-8.062zm2.322-9.67c0-.267.193-.466.439-.466h2.513c.247 0 .442.199.442.466v.876h7.036c1.122 0 2.049.924 2.049 2.069v1.246a.431.431 0 0 1 -.439.434h-1.658a.434.434 0 0 1 -.442-.434v-1.097h-16.486v1.097a.434.434 0 0 1 -.442.434h-1.635c-.245 0-.467-.19-.467-.434v-1.246c0-1.145.955-2.07 2.102-2.07h6.988zm-8.822 8.819c-.267 0-.464-.193-.464-.438v-1.561c0-.242.197-.435.464-.435h3.399v-1.465c0-.245.193-.438.438-.438h2.198c.27 0 .465.193.465.438v1.465h8.062v-1.441c0-.27.193-.462.46-.462h2.2c.242 0 .441.193.441.462v1.441h3.273c.245 0 .441.193.441.435v1.561a.437.437 0 0 1 -.441.438h-3.273v.904c0 2.022-.588 2.724-3.178 3.899l-1.073.487.196.073c1.319.583 2.344.828 3.467.805h3.442c.245 0 .441.215.441.46v1.536a.437.437 0 0 1 -.441.438h-3.442c-1.783-.024-2.686-.24-4.74-1.172l-1.803-.802-1.81.803c-2.148.954-2.832 1.12-4.737 1.17h-3.446a.433.433 0 0 1 -.435-.437v-1.536c0-.245.191-.46.435-.46h3.446c1.1 0 2.343-.293 3.469-.805l.193-.073-1.073-.487c-2.638-1.22-3.126-1.83-3.175-3.9v-.903z"></path>
              <path d="m46.9 33.605h2.467c.208 0 .29.085.294.212.002.047-.016.101-.07.182l-1.611 2.373c-.413.61-.463.73-.463 1.098v3.5c0 .244-.196.463-.439.463h-2.24a.45.45 0 0 1 -.439-.463v-3.5c0-.368-.073-.488-.462-1.098l-1.61-2.373c-.055-.081-.072-.135-.072-.182.006-.127.086-.212.293-.212h2.47v-6.84c0-.237.193-.432.439-.432h2.198c.242 0 .436.195.436.432zm-12.585-2.436c0 .954.368 1.317 2.074 2.07l6.079 2.924c1.562.756 2.168 1.245 2.168 3.21v.71c0 1.929-.537 2.854-2.613 3.62l-6.92 2.76c-1.903.756-3.117.951-4.666.951h-3.781c-.245 0-.441-.215-.441-.463v-1.536c0-.244.196-.463.441-.463h3.781c1.245 0 2.267-.193 3.808-.805l6.213-2.517c1.098-.463 1.26-.804 1.26-1.925v-.584c0-1.219-.47-1.66-2.37-2.467l-6.14-2.539c-1.76-.756-2.417-1.245-2.417-3.145v-.73c0-1.683.51-2.85 2.43-3.63l6.67-2.515c1.904-.732 3.268-.903 4.76-.903h4.014c.242 0 .439.217.439.46v1.511a.43.43 0 0 1 -.439.438h-4.014c-1.416 0-2.88.293-4.295.853l-6.018 2.41c-1.172.512-1.415.878-1.415 1.827z"></path>
            </g>
          </svg>

          {/* SVG for Partner 5 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 50"
            width="200"
            height="50"
          >
            <text
              x="0"
              y="35"
              font-family="Arial, sans-serif"
              font-size="30"
              fill="black"
            >
              Goldman Sachs
            </text>
          </svg>

          {/* SVG for Partner 6 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 100"
            width="100"
            height="50"
          >
            <text
              x="0"
              y="70"
              font-family="Arial, sans-serif"
              font-size="60"
              fill="black"
            >
              KPCB
            </text>
          </svg>

          {/* SVG for Partner 7 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 100"
            width="99"
            height="33"
          >
            <text
              x="0"
              y="70"
              font-family="Arial, sans-serif"
              font-size="60"
              fill="black"
            >
              AMERICAN EXPRESS
            </text>
          </svg>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Company timeline
        </h2>
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-green-600 ml-4"
            >
              <div className="absolute left-0 transform -translate-x-1/2">
                <div className="bg-[#017848] text-white px-4 py-1 rounded-full text-sm">
                  {item.year}
                </div>
              </div>
              <div className="bg-[#DFE0DC] p-4 rounded">
                <p className="text-[#565D5A]">{item.description}</p>
                {item.year === "Today" && (
        <Link href="/start" passHref>
          <button className="bg-[#017848] text-white font-semibold rounded-lg px-6 py-2 shadow-md transition-transform transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
            Get Started
          </button>
        </Link>
      )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
