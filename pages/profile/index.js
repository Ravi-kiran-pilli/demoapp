import { useState, useEffect } from "react";
import NavbarSection from "../Layout/NavbarSection";
import Slider from "react-animated-slider";

// import "react-animated-slider/build/horizontal.css";
// import horizontalCss from "react-animated-slider/build/horizontal.css";
// import "../../styles/slider.css";

const Profile = () => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const slides = [
    {
      title: "Latest News + Press",
      image: "static/images/banner4.png",
      description:
        "A fixture in the world of film and television, Jammie chung is using the platform she's built over the past two decades.",
    },
  ];

  return (
    <div className="bg-black">
      <NavbarSection />
      <div className="flex flex-col h-screen bg-black">
        <img src="static/images/jamie.png" />

        <div className="bg-black mb-8 m-auto bg-black">
          <div className="flex gap-6">
            <button className="text-white border px-3 py-3 w-52 font-thin">
              <div className="flex justify-center">
                <p>Bookmark&nbsp;</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </div>
            </button>
            <button className="text-white border px-3 py-3 font-thin">
              <p>Create Booking Request&nbsp;</p>
            </button>
          </div>
        </div>
        {/* Navigation Section */}
        <div>
          <div class="flex-1 flex justify-center mr-auto  border-gray-200 bg-black text-white container m-auto bg-black">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Info
                </button>
              </li>
              <h1 className=" p-4">|</h1>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Latest News + Press
                </button>
              </li>
              <h1 className=" p-4">|</h1>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Related
                </button>
              </li>
              <h1 className=" p-4">|</h1>
              <li role="presentation">
                <button
                  class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Video Description Section */}

        <div className="bg-black video">
          <div className="frequestQuestion bg-balck text-white mt-0 container m-auto block max-w-5xl mb-10 grid grid-cols-3 flex gap-4">
            <div className="max-w-5xl block col-span-2">
              <div className="mt-8 mb-6 m-auto ">
                <iframe
                  className="w-full h-96"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                ></iframe>
              </div>
            </div>
            <div className="max-w-1xl px-8 ">
              <h1 className="text-white mt-8 mb-6 m-auto text-2xl font-bold ">
                Speech Topics
              </h1>
              <p className="mb-4 text-lg">
                "As Long As You're Asking - A Conversation with Jamie Chung"
              </p>
              <p className="mb-4 text-lg">"The Dividents of Diversity"</p>
              <p className="mb-4 text-lg">"Make The Future"</p>
              <hr />
              <div className="flex flex-wrap gap-5 mt-6">
                <svg
                  class="w-6 h-6 text-grey-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <svg
                  class="w-6 h-6 text-grey-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Description Section */}
        <div className="bg-black description">
          <div className="frequestQuestion bg-balck text-white mt-0 container m-auto block max-w-5xl mb-10 grid grid-cols-3 flex gap-4">
            <div className="max-w-5xl  col-span-2">
              <h1 className="text-white mt-8 mb-6 m-auto text-2xl font-bold ">
                About Jamie Chung
              </h1>
              <p className="mb-4 font-thin">
                Jamie Jilynn Chung (born April 10, 1983) is an American actress
                and former reality television personality. She began her career
                in 2004 as a cast member on the MTV reality series The Real
                World: San Diego and subsequently through her appearances on its
                spin-off show, Real World/Road Rules Challenge: The Inferno II.
                She is regarded by many as the Real World alumna with the most
                successful media career.
              </p>
              <p className="mb-4 font-thin">
                She later transitioned into acting and has since become known
                for films such as Dragonball Evolution, Grown Ups, Premium Rush,
                Sorority Row, The Hangover Part II, Sucker Punch, and Big Hero 6
                (2014). Chung received critical acclaim for her lead performance
                in the independent drama film Eden. Chung played the lead role
                in the miniseries Samurai Girl, was a series regular in the two
                seasons (2017–19) of the superhero drama series The Gifted,
                played the recurring role of Mulan in the ABC fantasy television
                series Once Upon a Time, and has been a series regular, since
                2017, as the voice of Go Go Tomago for the animated Big Hero 6:
                The Series – the role she voiced in the 2014 film. Beginning in
                August 2020, Chung began appearing in the recurring role of
                Ji-Ah on the HBO series Lovecraft Country.
              </p>
              <p className="mb-4 font-thin">
                Chung was a cast member on The Real World: San Diego, the 14th
                season of MTV's long-running reality TV show The Real World,
                which first aired in 2004. At the time she was selected to be on
                TRW:SD, she was described by MTV as a hard-working student who
                worked two jobs to pay her tuition but also enjoyed partying.
                She was also described by her friends as not having the best
                taste in men.[16]
              </p>
              <p className="mb-4 font-bold">
                <div className="flex">
                  More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </p>
            </div>
            <div className="max-w-1xl px-4">
              <h1 className="text-white mt-8 m-auto text-2xl font-bold ">
                Books & Media
              </h1>
              <div class="container mx-auto p-3 bg-black text-white">
                <div class="flex items-stretch -mx-8 grid grid-cols-2">
                  <div class="flex-1 p-2">
                    <div class="block bg-black overflow-hidden h-full ">
                      <div>
                        <img
                          src="data:image/jpeg;base64,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"
                          // className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex-1 p-2">
                    <div class="block bg-black overflow-hidden h-full ">
                      <div>
                        <img
                          src="data:image/jpeg;base64,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"
                          // className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                        />

                        {/* <p class="text-md text-justify">Jammie Chung</p>
                        <p class="text-md text-justify font-thin text-xs">
                          Actor/Model/Writer/Producer
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <img src="static/images/banner3.png" /> */}
        </div>
        {/* Text with Slider section */}
        <div className="bg-black text-white mt-0 container m-auto max-w-6xl">
          <Slider>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="text-white max-w-4xl block text-center m-auto ml-36"
              >
                <div className="">
                  <h1 className="whitespace-pre text-white mt-8 text-2xl font-bold text-center m-auto">
                    {slide.title}
                    <div className="w-20 p-4 text-center m-auto mt-0 border-b-2 border-blue-300 hover:text-white-600 hover:border-blue-300 dark:hover:text-gray-300"></div>
                  </h1>
                  <p className="text-4xl italic tracking-widest mt-10 break-words break-normal">
                    "{slide.description}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Categories Section */}
        <div className="bg-black container m-auto max-w-5xl categories block">
          <h1 className="text-white mt-8 mb-8 text-center m-auto text-2xl font-bold decoration-sky-500 decoration-4 underline-offset-2">
            Categories
            <div className="w-20 p-4 text-center m-auto mt-0 border-b-2 border-blue-300 hover:text-white-600 hover:border-blue-300 dark:hover:text-gray-300"></div>
          </h1>
          <div className="categories">
            <div className="bg-black text-white grid grid-cols-5 gap-4 mb-8 max-w-full">
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <p className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </p>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
            </div>
            <div className="bg-black text-white grid grid-cols-4 gap-4 mb-8 max-w-3xl m-auto">
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
            </div>
            <div className="bg-black text-white grid grid-cols-3 gap-4 mb-8 max-w-2xl m-auto">
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
              <button
                className="text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline m-auto h-12 text-center mr-8 max-w-full"
              >
                <div className="mt-3 w-80 ">
                  &nbsp;&nbsp;Influential Wssaomen&nbsp;
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Related Speakers */}
        <div className="relatedSpeakers bg-black text-white mt-0 container m-auto block max-w-5xl mb-10">
          <h1 className="text-white mt-8 mb-3 m-auto text-2xl font-bold ">
            Related Speakers
          </h1>
          <hr />
          <div class="container mx-auto p-3 bg-black text-white">
            <div class="flex items-stretch -mx-8 grid grid-cols-4">
              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>

              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      alt=""
                      src="static/images/Screenshot (7).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Jammie Chung</p>
                    <p class="text-md text-justify font-thin text-xs">
                      Actor/Model/Writer/Producer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs Section */}
        <div className="bg-stone-700 faq">
          <div className="frequestQuestion bg-stone-700 text-white mt-0 container m-auto block max-w-5xl mb-10 grid grid-cols-3 flex gap-4">
            <div className="max-w-5xl  col-span-2">
              <h1 className="text-white mt-8 mb-6 m-auto text-4xl font-bold ">
                FAQs
              </h1>
              <div className="flex-1 bg-stone-500 h-50 mb-5 px-3 py-3 text-lg font-medium">
                What is Speaker?
              </div>
              <div className="flex-1 bg-stone-500 h-50 mb-5 px-3 py-3 text-lg font-medium">
                What topics or themes do the speakers cover during the event?
              </div>
              <div className="flex-1 bg-stone-500 h-50 mb-5 px-3 py-3 text-lg font-medium">
                What are the events formats you have available?
              </div>
              <div className="flex-1 bg-stone-500 h-50 mb-5 px-3 py-3 text-lg font-medium">
                What's a booking request?
              </div>
              <div className="flex-1 bg-stone-500 h-50 mb-5 px-3 py-3 text-lg font-medium">
                What happens after i submit a booking request?
              </div>
            </div>
            <div className="max-w-1xl px-4">
              <h1 className="text-white mt-8 mb-8 m-auto text-4xl font-bold ">
                More Info
              </h1>
              <div className="block mb-8">
                <h1 className="text-lg font-medium text-white mb-3 not-italic">
                  About
                </h1>
                <h1 className="text-lg font-medium text-white mb-3 not-italic">
                  Team
                </h1>
                <h1 className="text-lg font-medium text-white mb-3 not-italic">
                  How It Works
                </h1>
                <h1 className="text-lg font-medium text-white mb-3 not-italic">
                  Event Curation
                </h1>
                <h1 className="text-lg font-medium text-white mb-3 not-italic">
                  FAQ
                </h1>
                <h1 className="text-lg font-medium text-white mb-3 not-italic">
                  Contact
                </h1>
              </div>
              <div className="flex flex-wrap gap-5">
                <svg
                  class="w-6 h-6 text-grey-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <svg
                  class="w-6 h-6 text-grey-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
