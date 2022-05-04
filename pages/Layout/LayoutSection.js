import FooterSection from "./FooterSection";
import NavbarSection from "./NavbarSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Link from "next/link";
import { useRouter } from "next/router";

const LayoutSection = () => {
  const router = useRouter();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      //   slidesToSlide: 4,
    },
  };

  return (
    <div class="flex flex-col h-screen">
      <NavbarSection />
      <main class="mb-auto h-10 bg-black flex-grow">
        <img src="static/images/banner.png" />

        <div className="block max-w-6xl m-auto">
          <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-black">
            <div class="container flex flex-wrap justify-between items-center mx-auto mt-6 mb-6">
              <h1 className="text-white font-bold text-2xl">
                Explore Speakers
              </h1>

              <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-2">
                <ul class="mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li></li>
                </ul>
              </div>
              <div
                class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <a
                      href="#"
                      class="inline-block py-3 px-5 w-full text-white bg-slate-700 rounded-lg active"
                      //class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Featured
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-block  py-3 px-5 text-white rounded-lg hover:text-white hover:text-white dark:hover:text-white dark:hover:text-white"
                      //class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Most Popular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-block text-white py-3 px-5 rounded-lg hover:text-white hover:text-white dark:hover:text-white dark:hover:text-white"
                      // class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Trending
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="max-w-6xl m-auto">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 4,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <a href="/profile">
                <div class="flex-1 p-4 text-white">
                  <div class="block bg-black overflow-hidden h-full ">
                    <div>
                      <img
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
              </a>
              <div class="flex-1 p-4  text-white">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      src="static/images/Screenshot (8).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Chris Pratt</p>
                    <p class="text-md text-justify font-thin text-xs">Actor</p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4 text-white">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      src="static/images/Screenshot (9).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Ai Weiwei</p>
                    <p class="text-md text-justify font-thin text-xs">Artist</p>
                  </div>
                </div>
              </div>
              <div class="flex-1 p-4 text-white">
                <div class="block bg-black overflow-hidden h-full ">
                  <div>
                    <img
                      src="static/images/Screenshot (10).png"
                      className="object-contain w-full shadow-lg mt-2 cursor-pointer mb-3"
                    />

                    <p class="text-md text-justify">Joanna Coles</p>
                    <p class="text-md text-justify font-thin text-xs">
                      CEO of the Dallas Mavericks
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className=" text-white">
          <img src="static/images/image.png" />
          {/* <img src="/static/images/image.png" alt="hello" /> */}
        </div>

        <FooterSection />
      </main>
    </div>
  );
};

export default LayoutSection;

{
  /* <div className="bg-black pb-12">
          <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-black">
            <div class="container flex flex-wrap justify-between items-center mx-auto mt-6 mb-6">
              <h1 className="text-white">Explore Speakers</h1>

              <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-2">
                <ul class="mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li></li>
                </ul>
              </div>
              <div
                class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <a
                      href="#"
                      class="inline-block py-3 px-5 w-full text-white bg-slate-700 rounded-lg active"
                      //class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Featured
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-block  py-3 px-5 text-white rounded-lg hover:text-white hover:text-white dark:hover:text-white dark:hover:text-white"
                      //class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Most Popular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-block text-white py-3 px-5 rounded-lg hover:text-white hover:text-white dark:hover:text-white dark:hover:text-white"
                      // class="block py-2 pr-4 pl-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Trending
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div
            className="bg-black carousel slide relative"
            data-bs-ride="carousel"
            id="carouselExampleControls"
          >
            <div class="carousel-inner w-full overflow-hidden">
              <Carousel responsive={responsive}>
                <div></div>
                {/* <div class="lg:mb-0 mb-6 text-white carousel-item active relative float-left w-full h-90 mx-2">
                  <a href="/profile">
                    <img
                      src="static/images/Screenshot (7).png"
                      class="object-contain w-full shadow-lg mt-2 cursor-pointer"
                      style={{
                        width: "100%",
                        height: "25vw",
                        objectFit: "cover",
                        padding: "7px",
                      }}
                    />
                    <h2>Jammie Chung</h2>
                    <span>Actor/Model/Writer/Producer</span>
                  </a>
                </div>
                <div class="lg:mb-0 mb-6 text-white carousel-item relative float-left w-full">
                  <img
                    src="static/images/Screenshot (8).png"
                    class=" object-contain w-full shadow-lg h-50 mt-2 cursor-pointer"
                    style={{
                      width: "100%",
                      height: "25vw",
                      objectFit: "cover",
                      padding: "5px",
                    }}
                  />
                  <h2>Chris Prat</h2>
                  <span>Actor</span>
                </div>
                <div class="lg:mb-0 mb-6 text-white carousel-item relative float-left w-full">
                  <img
                    src="static/images/Screenshot (9).png"
                    class="object-contain w-full shadow-lg h-100 mt-2 cursor-pointer"
                    style={{
                      width: "100%",
                      height: "25vw",
                      objectFit: "cover",
                      padding: "5px",
                    }}
                  />
                  <h2>Ai Weiwei</h2>
                  <span>Artist</span>
                </div>
                <div class="lg:mb-0 mb-6 text-white carousel-item relative float-left w-full">
                  <a href="#">
                    <img
                      src="static/images/Screenshot (10).png"
                      class="object-contain w-full  shadow-lg h-100 mt-2 cursor-pointer"
                      style={{
                        width: "100%",
                        height: "25vw",
                        objectFit: "cover",
                        padding: "5px",
                      }}
                    />
                    <h2>Joanna Colles</h2>
                    <span>CEO of the Dallas Mavericks</span>
                  </a>
                </div> 
              </Carousel>
            </div>
            <div className="mt-10 text-center mb-10">
              <button
                className="py-2 pr-4 pl-3 text-white border-0 hover:bg-gray-50 md:hover:bg-transparent md:border-0
                   md:hover:text-white md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                   md:dark:hover:bg-transparent dark:border-blue-700 inline-flex font-thin outline w-60 h-12 content-center"
              >
                <div className="flex ml-8 mt-3">
                  Explore All Speakers&nbsp;
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div> */
}
