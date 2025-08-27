import "../index.css";
import logo1 from "../assets/img/yourlogo1.png";
import logo2 from "../assets/img/yourlogo2.png";
import logo3 from "../assets/img/yourlogo3.png";

import seo1 from "../assets/img/seo-starter-guide.png";
import SectionHeader1 from "../components/main/SectionHeaders/SectionHeader1";
import SectionHeader2 from "../components/main/SectionHeaders/SectionHeader2";
import ImageBox1 from "../components/main/imageboxes/ImageBox1";
import FadeInUpOnScroll from "../components/FadeInUpOnScroll";
import FadeInOnScroll from "../components/FadeInOnScroll";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Accordion from "../components/Accordion";

import "swiper/css";
import "swiper/css/autoplay";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const data = [
    {
      id: 0,
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, atque.",
      renderContent: () => (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          ipsam sint dolore, excepturi eveniet sunt facilis necessitatibus?
          Possimus quod totam mollitia dolorum quaerat corporis accusamus,
          architecto impedit qui, a, at delectus culpa vel repudiandae unde.
        </p>
      ),
    },

    {
      id: 1,
      label: "Lorem ipsum dolor sit amet consectetur adipisicing  atque.",
      renderContent: () => (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          ipsam sint dolore, excepturi eveniet sunt facilis necessitatibus?
          Possimus quod totam mollitia dolorum quaerat corporis accusamus,
          architecto impedit qui, a, at delectus culpa vel repudiandae unde.
        </p>
      ),
    },

    {
      id: 2,
      label:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Tempore, atque.",
      renderContent: () => (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          ipsam sint dolore, excepturi eveniet sunt facilis necessitatibus?
          Possimus quod totam mollitia dolorum quaerat corporis accusamus,
          architecto impedit qui, a, at delectus culpa vel repudiandae unde.
        </p>
      ),
    },
  ];

  return (
    <>
      <section id="about" className="about section">
        <div className="container-lg">
          <div
            className="row gx-5 p-3  align-items-center "
            style={{ marginTop: "50px", marginBottom: "100px" }}
          >
            <div className="col-lg-6 ">
              <p style={{ color: "#6B267F" }}> SEO Agency </p>

              <h1 style={{ fontSize: "4rem" }}>
                {
                  <>
                    Developing{" "}
                    <span className="purple-underline">digital strategies</span>{" "}
                    with passion
                  </>
                }
              </h1>
            </div>
            <div className="col-lg-6 d-flex flex-column  justify-items-end">
              <div style={{ width: "75%" }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, iusto. Quia velit hic veniam ex non at earum
                  aspernatur et.
                </p>
                <div>
                  <button className="aboutButton ">Start</button>
                  <a href="" className="mainLink">
                    Explore our SEO services
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5  gx-5 gy-3 justify-content-between  ">
            <FadeInUpOnScroll
              delay={100}
              className="col-lg-4 col-md-4 col-sm-12"
            >
              <div className=" about-card1 w-100">
                <h2>Simplicity</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis animi, totam at quos provident quam.
                </p>
              </div>
            </FadeInUpOnScroll>

            <FadeInUpOnScroll
              delay={250}
              className="col-lg-4 col-md-4 col-sm-12 "
            >
              <div className=" about-card2 w-100">
                <h2>Visibility</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis animi, totam at quos provident quam.
                </p>
              </div>
            </FadeInUpOnScroll>

            <FadeInUpOnScroll
              delay={400}
              className="col-lg-4 col-md-4 col-sm-12 "
            >
              <div className=" about-card3 w-100">
                <h2>Growth</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis animi, totam at quos provident quam.
                </p>
              </div>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>

      <section id="swiper" className="section secondBackground">
        <FadeInOnScroll className="container-lg">
          <div className="row justify-content-center ">
            <div className="col-lg-2 col-md-2  d-flex justify-content-end align-items-center dissapear">
              <p className="" style={{ display: "inline", fontSize: "1.2rem" }}>
                Worked with us:
              </p>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-12 text-center ">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <img src={logo1} className="yourlogo" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logo2} className="yourlogo" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logo3} className="yourlogo" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logo1} className="yourlogo" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logo2} className="yourlogo" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={logo3} className="yourlogo" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </FadeInOnScroll>
      </section>

      <section className="section">
        <div className="container-lg">
          <FadeInOnScroll delay={200}>
            <SectionHeader1
              p={"Web Positioning Agency"}
              h1={
                <>
                  Marketing is easy,{" "}
                  <span className="purple-underline">let's shape it</span>
                </>
              }
              description={
                "We want you to reach more people, truly connect with them, and see tangible results."
              }
            ></SectionHeader1>
          </FadeInOnScroll>
          <div className="row mt-5 gy-5">
            <FadeInUpOnScroll className="col-lg-6 col-md-6 col-sm-12">
              <img src={seo1} className="img-fluid" alt="" />
            </FadeInUpOnScroll>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, tempora.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                officiis maiores suscipit veniam expedita neque, dolor
                cupiditate architecto assumenda perferendis molestias nemo
                facilis laboriosam ducimus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                quae illo error. Ratione suscipit, delectus obcaecati a vero
                non. Error.
              </p>
              <button className="contactButton">
                I want to give shape to my project
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section secondBackground">
        <div className="container-lg">
          <div className="row ">
            <SectionHeader2
              p={"Services SEO"}
              h1={"Your website in the hands of SEO experts"}
              description={
                "We offer a quality service designed to help your website scale and maintain its position in the major search engines naturally."
              }
              button={"See all services SEO"}
              className="col-lg-5 col-md-5 align-self-center"
            />
            <div
              className="col-lg-7 col-md-7 col-sm-12 d-flex"
              style={{ height: "500px" }}
            >
              <FadeInUpOnScroll className="d-flex flex-column col-lg-6  align-self-end">
                <ImageBox1
                  src={
                    "https://difuso.es/wp-content/webp-express/webp-images/uploads/2025/02/Auditoria-4.png.webp"
                  }
                  h2={"Lorem "}
                  p={
                    "We identify strategic points for improvement to enhance your position."
                  }
                  className={"col-lg-12 col-sm-12"}
                />
                <ImageBox1
                  src={
                    "https://difuso.es/wp-content/webp-express/webp-images/uploads/2025/02/Estrategias.png.webp"
                  }
                  h2={"Seo local"}
                  p={"lorem dolor sit amet consectetur adipisicing elit."}
                  className={"col-lg-12 col-sm-12"}
                />
              </FadeInUpOnScroll>
              <FadeInUpOnScroll
                delay={200}
                className="d-flex flex-column col-lg-6"
              >
                <ImageBox1
                  src={
                    "http://difuso.es/wp-content/webp-express/webp-images/uploads/2025/02/SEO-local-2.png.webp"
                  }
                  h2={"linkBuilding"}
                  p={"lorem dolor sit amet consectetur adipisicing elit."}
                  className={"col-lg-12 col-sm-12"}
                />
                <ImageBox1
                  src={
                    "https://difuso.es/wp-content/webp-express/webp-images/uploads/2025/02/Linkbuilding.png.webp"
                  }
                  h2={"Marketing"}
                  p={
                    "We create relevant content on your website to attract the interest of your target audience."
                  }
                  className={"col-lg-12 col-sm-12"}
                />
              </FadeInUpOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-lg">
          <SectionHeader1
            h1={"Your website in the hands of SEO experts"}
            description={
              "We offer a quality service designed to help your website scale and maintain its position in the major search engines naturally."
            }
          />
          <div className="row gy-3 mt-5">
            <FadeInUpOnScroll
              delay={100}
              className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-left "
            >
              <Link to="Seo" className="homePageLink1 ">
                SEO
              </Link>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll
              delay={250}
              className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center"
            >
              <Link to="WebDesign" className="homePageLink2">
                Web Design
              </Link>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll
              delay={400}
              className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end"
            >
              <Link to="Sem" className="homePageLink3">
                SEM
              </Link>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>

      <section className="section secondBackground">
        <div className="container-lg">
          <div className="row ">
            <FadeInOnScroll className="col-lg-6 col-md-6 align-self-center">
              <SectionHeader2
                p={"Professionals in SEO positioning"}
                h1={"Do you have questions?"}
                description={
                  "We offer a quality service designed to help your website scale and maintain its position in the major search engines naturally."
                }
                button={"See all SEO services"}
              />
            </FadeInOnScroll>

            <FadeInUpOnScroll className="col-lg-6 col-md-6 justify-content-center">
              <Accordion items={data} keepOthersOpen={false}></Accordion>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
