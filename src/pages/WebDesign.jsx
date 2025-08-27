import SectionHeader1 from "../components/main/SectionHeaders/SectionHeader1";
import SectionHeader2 from "../components/main/SectionHeaders/SectionHeader2";
import webDesignImg from "../assets/img/webdesign.png";

import logo1 from "../assets/img/yourlogo1.png";
import logo2 from "../assets/img/yourlogo2.png";
import logo3 from "../assets/img/yourlogo3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import Accordion from "../components/Accordion";
import FadeInUpOnScroll from "../components/FadeInUpOnScroll";
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function WebDesign() {
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
      <section className="section  secondBackground">
        <FadeInUpOnScroll className="container-lg">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <SectionHeader2
                p="SEM agency"
                h1={
                  <>
                    Campañas de Google{" "}
                    <span className="purple-underline"> Adwords SEM</span>
                  </>
                }
                description="If you are looking for fast and effective results, 
                    advertising on Google is the ideal path. With well-designed Google 
                    Ads campaigns, you can position yourself right in front of those who 
                    are searching for you at the exact moment."
                button={"Contact us"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img
                src={webDesignImg}
                alt="SEO"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </FadeInUpOnScroll>
      </section>

      <section id="swiper" className="section ">
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

      <section className="section secondBackground">
        <div className="container-lg">
          <div className="row gy-5 gx-5 align-items-center justify-content-center">
            <FadeInOnScroll className="col-lg-6 col-md-6 col-sm-12 text-center">
              <div
                style={{
                  background: "#8e8edc33",
                  borderRadius: "24px",
                  padding: "2rem",
                }}
              >
                <img
                  src={webDesignImg}
                  alt="Web Design Example"
                  className="img-fluid"
                  style={{ maxWidth: "90%", borderRadius: "12px" }}
                />
              </div>
            </FadeInOnScroll>
            <FadeInUpOnScroll className="col-lg-6 col-md-6 col-sm-12">
              <SectionHeader2
                p="Web design specialists"
                h1={
                  <>
                    Boost your business with a{" "}
                    <span className="purple-underline">
                      website that converts
                    </span>
                  </>
                }
                description={
                  <>
                    Your website should be a reflection of your brand, so we
                    design something unique for you, with optimization that
                    increases your visibility and attracts more clients.
                  </>
                }
              />
              <div className="checkContainer2 d-flex align-items-center mb-2">
                <div>
                  <i className="bi bi-check2"></i>
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  Unique design tailored to your brand
                </div>
              </div>
              <div className="checkContainer2 d-flex align-items-center mb-2">
                <div>
                  <i className="bi bi-check2"></i>
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  Optimization that boosts your visibility
                </div>
              </div>
              <div className="checkContainer2 d-flex align-items-center mb-2">
                <div>
                  <i className="bi bi-check2"></i>
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  Easy management without needing to be an expert
                </div>
              </div>
              <div className="checkContainer2 d-flex align-items-center mb-4">
                <div>
                  <i className="bi bi-check2"></i>
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  SEO integrated to stand out in search engines
                </div>
              </div>
              <button
                className="aboutButton"
                style={{ background: "#6b267f", color: "white" }}
              >
                Request a quote
              </button>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>

      <section className="section ">
        <div className="container-lg">
          <SectionHeader1
            p={"Expertts in Web Design"}
            h1={
              <>
                What you get with our{" "}
                <span className="purple-underline">Web Design</span>
              </>
            }
            description={
              <>
                SEO is not just a checklist; it's a set of actions working
                together for one goal: to make you easy to find.
              </>
            }
          />

          <div className="row g-4 mt-4">
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card  h-100  text-center">
                <img
                  src="/src/assets/img/Auditoria.png.webp"
                  alt="SEO Audit"
                  style={{ width: 60, marginBottom: 20 }}
                />
                <h4 className="mb-3">Autonomous management of your website</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  suscipit aspernatur corporis itaque nam. Molestiae ea deserunt
                  accusamus tempore hic? Nesciunt, quis! Facilis soluta odio
                  debitis fugit atque voluptates beatae.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card  h-100 text-center">
                <img
                  src="/src/assets/img/Estrategias.png.webp"
                  alt="Content Strategies"
                  style={{ width: 60, marginBottom: 20 }}
                />
                <h4 className="mb-3">Design 100% personalized</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  suscipit aspernatur corporis itaque nam. Molestiae ea deserunt
                  accusamus tempore hic? Nesciunt, quis! Facilis soluta odio
                  debitis fugit atque voluptates beatae.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card  h-100 text-center">
                <img
                  src="/src/assets/img/SEO-local-2.png.webp"
                  alt="Technical SEO"
                  style={{ width: 60, marginBottom: 20 }}
                />
                <h4 className="mb-3">SEO integrated from the start</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  suscipit aspernatur corporis itaque nam. Molestiae ea deserunt
                  accusamus tempore hic? Nesciunt, quis! Facilis soluta odio
                  debitis fugit atque voluptates beatae.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card  h-100 text-center">
                <img
                  src="/src/assets/img/Linkbuilding.png.webp"
                  alt="Linkbuilding"
                  style={{ width: 60, marginBottom: 20 }}
                />
                <h4 className="mb-3">Responsive design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  suscipit aspernatur corporis itaque nam. Molestiae ea deserunt
                  accusamus tempore hic? Nesciunt, quis! Facilis soluta odio
                  debitis fugit atque voluptates beatae.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card  h-100 text-center">
                <img
                  src="/src/assets/img/SEO-local-2.png.webp"
                  alt="Local SEO"
                  style={{ width: 60, marginBottom: 20 }}
                />
                <h4 className="mb-3">Scalability for the future</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  suscipit aspernatur corporis itaque nam. Molestiae ea deserunt
                  accusamus tempore hic? Nesciunt, quis! Facilis soluta odio
                  debitis fugit atque voluptates beatae.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card h-100 text-center">
                <img
                  src="/src/assets/img/Linkbuilding.png.webp"
                  alt="SEO for eCommerce"
                  style={{ width: 60, marginBottom: 20 }}
                />
                <h4 className="mb-3">Updates and security</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  suscipit aspernatur corporis itaque nam. Molestiae ea deserunt
                  accusamus tempore hic? Nesciunt, quis! Facilis soluta odio
                  debitis fugit atque voluptates beatae.
                </p>
              </div>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>

      <section className="section secondBackground">
        <div className="container-lg">
          <SectionHeader1
            p={"WEb positioning"}
            h1={
              <>
                Do you have questions?{" "}
                <span style={{ fontStyle: "italic" }}>We have answers. </span>
              </>
            }
            description={
              <>
                We are delighted to show you the success stories of clients who
                have trusted us.
              </>
            }
          />
          <FadeInUpOnScroll className="row mt-5 ">
            <div className="col-lg-6 col-md-6 justify-content-center">
              <Accordion items={data} keepOthersOpen={false}></Accordion>
            </div>
            <div className="col-lg-6 col-md-6 justify-content-center">
              <Accordion items={data} keepOthersOpen={false}></Accordion>
            </div>
          </FadeInUpOnScroll>
        </div>
      </section>
    </>
  );
}
