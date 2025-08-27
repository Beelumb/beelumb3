import SectionHeader1 from "../components/main/SectionHeaders/SectionHeader1";
import SectionHeader2 from "../components/main/SectionHeaders/SectionHeader2";
import Accordion from "../components/Accordion";
import methodimg1 from "../assets/img/1-entender.png.webp";
import methodimg2 from "../assets/img/2-analizar.png.webp";
import methodimg3 from "../assets/img/3-disenar.png.webp";
import methodimg4 from "../assets/img/4-ajustar.png.webp";
import SeoImage from "../assets/img/seoimage.webp";
import AnimatedCounter from "../components/AnimatedCounter";
import FadeInUpOnScroll from "../components/FadeInUpOnScroll";
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function SeoPage() {
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
    {
      id: 3,
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
      <section className="section secondBackground">
        <div className="container-lg">
          <FadeInUpOnScroll
            delay={100}
            className="row align-items-center justify-content-center"
          >
            <div className="col-lg-6 col-md-6 col-sm-12">
              <SectionHeader2
                p="Web positioning and SEO"
                h1="Helping you reach the top of search results"
                description="If you've ever felt that SEO is complicated or simply not for you, we want to prove you wrong. We're not here to sell you something, but to give you exactly what you need for your business to reach its true potential."
                button={"Contact us"}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img
                src={SeoImage}
                alt="SEO"
                className="img-fluid"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </FadeInUpOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container-lg ">
          <FadeInOnScroll>
            <SectionHeader1
              p={"Our methodology"}
              h1="Our SEO Services"
              description={
                <>
                  Doing SEO is not about applying a formula; it's about deeply
                  understanding your project's needs and connecting with those
                  who are truly searching for you. We work with a clear,
                  effective, and completely transparent methodology.
                </>
              }
            />
          </FadeInOnScroll>


          <div className="row justify-content-center mt-5">
            <FadeInOnScroll
              delay={0}
              className="col-lg-3 col-md-3 methodologyContainer1"
            >
              <img
                src={methodimg1}
                alt="Understanding your project"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Understanding your project</h4>
                  <p>
                    We analyze your business, your goals, and your competition
                    to understand where you are and where you want to go.
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll
              delay={200}
              className="col-lg-3 col-md-3 methodologyContainer2"
            >
              <img
                src={methodimg2}
                alt="Analyze details"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Analyzing details</h4>
                  <p>
                    We review your website in detail to detect opportunities for
                    improvement and technical issues that may affect your
                    positioning.
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll
              delay={300}
              className="col-lg-3 col-md-3 methodologyContainer3"
            >
              <img
                src={methodimg3}
                alt="Creating strategy"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Creating strategy</h4>
                  <p>
                    We design a personalized SEO strategy that fits your
                    business and your goals, always based on data.
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll
              delay={400}
              className="col-lg-3 col-md-3 methodologyContainer4"
            >
              <img
                src={methodimg4}
                alt="Adjusting strategy"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Adjusting strategy</h4>
                  <p>
                    We monitor results and adjust the strategy to ensure
                    continuous improvement and achievement of objectives.
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="section secondBackground">
        <div className="container-lg align-items-center">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-md-6">
              <FadeInOnScroll>
                <SectionHeader2
                  p={"Improve your organic traffic"}
                  h1={
                    <>
                      What do you gain by working on SEO
                      <span className="purple-underline">with us?</span>
                    </>
                  }
                  description={
                    <>
                      SEO is not just about looking at numbers or statistics.
                      It's about understanding, interpreting, and transforming
                      them into actions that connect with the people who are
                      truly searching for you.
                      <br />
                      <br />
                      It's not enough to know what Google says; you have to
                      listen to what your business needs and shape it with ideas
                      that make a difference. That's how we achieve meaningful
                      results and goals that are met.
                    </>
                  }
                  button={"Contact us"}
                />
              </FadeInOnScroll>
            </div>
            <FadeInUpOnScroll className="col-lg-6 col-md-6">
              <div className="d-flex justify-content-between align-items-center checkContainer">
                <div>
                  <h4>Greater visibility</h4>
                  <p>
                    We help your business appear in the top positions of search
                    engines so more people can find you.
                  </p>
                </div>
                <div>
                  <i className="bi bi-check2"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center checkContainer">
                <div>
                  <h4>Qualified traffic</h4>
                  <p>
                    We attract visitors who are really interested in your
                    products or services, increasing your chances of conversion.
                  </p>
                </div>
                <div>
                  <i className="bi bi-check2"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center checkContainer">
                <div>
                  <h4>Long-term results</h4>
                  <p>
                    SEO is an investment that brings lasting results, helping
                    your business grow sustainably.
                  </p>
                </div>
                <div>
                  <i className="bi bi-check2"></i>
                </div>
              </div>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>

      <section className="section ">
        <div className="container-lg">
          <div className="row align-items-center justify-content-center">
            <div className="col-8 col-md-8 col-12">
              <SectionHeader2
                p={"Web positioning "}
                h1={
                  <>
                    Experience is not told,{" "}
                    <span className="purple-underline">
                      it is demonstrated.
                    </span>
                  </>
                }
                description={
                  <>
                    Our SEO services are designed to help your business grow and
                    thrive in the digital landscape. We focus on delivering
                    results that matter, using a combination of data-driven
                    strategies and creative solutions.
                    <h4
                      style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      What more could you ask for?
                    </h4>
                    If you want to improve your visibility, we are here to help
                    you. Not just to manage your project, but to make it our
                    own. We would love to be part of your story and accompany
                    you in the next chapter.
                  </>
                }
                button={"Learn more"}
              />
            </div>
            <div className="col-4 col-md-4 col-sm-12">
              <FadeInUpOnScroll className="d-flex flex-column">
                <AnimatedCounter
                  start={0}
                  end={80}
                  duration={3000}
                  percent={"%"}
                  p={"Average organic visits"}
                />
                <AnimatedCounter
                  start={0}
                  end={5000}
                  duration={2000}
                  p={"Positioned keywords"}
                />
                <AnimatedCounter
                  start={0}
                  end={15}
                  duration={3000}
                  p={"Years of experience"}
                />
              </FadeInUpOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="section secondBackground">
        <div className="container-lg">
          <SectionHeader1
            p={"Our SEO Services"}
            h1={
              <>
                What you need{" "}
                <span className="purple-underline">when you need it</span>
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
              <div className="seo-grid-card  h-100 text-center">
                <img
                  src="/src/assets/img/Auditoria.png.webp"
                  alt="SEO Audit"
                  style={{ width: 60, marginBottom: 20 }}
                />
                <h4 className="mb-3">SEO Audit</h4>
                <p>
                  We start by identifying opportunities. We analyze your website
                  from top to bottom to discover what can be improved and where
                  your project's true potential lies.
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
                <h4 className="mb-3">Content Strategies</h4>
                <p>
                  Words matter, a lot. We create content that not only ranks but
                  also connects with your audience. We want those who find you
                  to stay with you.
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
                <h4 className="mb-3">Technical SEO</h4>
                <p>
                  We optimize the foundation of your website: loading times,
                  structure, tags... Everything that makes Google understand
                  (and like) your site.
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
                <h4 className="mb-3">Natural Linkbuilding</h4>
                <p>
                  We build links that add value to your website, organically and
                  without risks. It's not just about having links, but having
                  the right ones.
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
                <h4 className="mb-3">Local SEO</h4>
                <p>
                  If your business has a physical location, we help you be
                  visible to those closest to you. We want you to be found where
                  it matters most: near them.
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
                <h4 className="mb-3">SEO for eCommerce</h4>
                <p>
                  If you sell online, we make sure your products are easy to
                  find and even easier to buy. We optimize everything that makes
                  your store stand out.
                </p>
              </div>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-lg">
          <FadeInOnScroll>
            <SectionHeader1
              p={"Specialists in web positioning"}
              h1={"Some of our SEO success stories"}
              description={
                <>
                  We are delighted to show you the success stories of clients
                  who have trusted us.
                </>
              }
            />
          </FadeInOnScroll>
          <div className="row g-4 mt-4">
            <FadeInUpOnScroll delay={100} className="col-md-4">
              <div className="card card-custom bg-purple">
                <div className="d-flex align-items-center mb-3">
                  <p style={{ marginRight: "10px" }}>LOGO</p>
                  <div>
                    <h5 className="mb-0">Company name</h5>
                    <small className="text-muted">Ecommerce</small>
                  </div>
                </div>
                <AnimatedCounter
                  start={0}
                  end={45}
                  duration={2000}
                  percent={"%"}
                  p={"Sales from organic traffic"}
                  style={{
                    fontSize: "2rem",
                    textAlign: "left",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "#5e2b97",
                  }}
                />

                <div className="tag">
                  <div className="icon-box icon-purple">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Climbing equipment</div>
                </div>
                <div className="tag">
                  <div className="icon-box icon-purple">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Mountain cooking utensils</div>
                </div>
                <div className="tag">
                  <div className="icon-box icon-purple">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Mckinley tents</div>
                </div>
              </div>
            </FadeInUpOnScroll>

            <FadeInUpOnScroll delay={250} className="col-md-4">
              <div className="card card-custom bg-blue">
                <div className="d-flex align-items-center mb-3">
                  <p style={{ marginRight: "10px" }}>LOGO</p>
                  <div>
                    <h5 className="mb-0">Company name</h5>
                    <small className="text-muted">Security</small>
                  </div>
                </div>
                <AnimatedCounter
                  start={0}
                  end={30}
                  duration={2000}
                  percent={"%"}
                  p={"Organic visits in 6 months"}
                  style={{
                    fontSize: "2rem",
                    textAlign: "left",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "#004b87",
                  }}
                />

                <div className="tag">
                  <div className="icon-box icon-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Funeral insurance </div>
                </div>
                <div className="tag">
                  <div className="icon-box icon-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Funeral company </div>
                </div>
                <div className="tag">
                  <div className="icon-box icon-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Funeral mutual </div>
                </div>
              </div>
            </FadeInUpOnScroll>

            <FadeInUpOnScroll delay={400} className="col-md-4">
              <div className="card card-custom bg-green">
                <div className="d-flex align-items-center mb-3">
                  <p style={{ marginRight: "10px" }}>LOGO</p>{" "}
                  <div>
                    <h5 className="mb-0">Company name</h5>
                    <small className="text-muted">Consulting</small>
                  </div>
                </div>
                <AnimatedCounter
                  start={0}
                  end={25}
                  duration={2000}
                  percent={"%"}
                  p={"Leads from organic traffic"}
                  style={{
                    fontSize: "2rem",
                    textAlign: "left",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "#69a743",
                  }}
                />

                <div className="tag">
                  <div className="icon-box icon-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Accounting management </div>
                </div>
                <div className="tag">
                  <div className="icon-box icon-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Tax consulting </div>
                </div>
                <div className="tag">
                  <div className="icon-box icon-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-trophy"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 0-1 1v2a3 3 0 0 0 2 2.83V9a4 4 0 0 0 3 3.87V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9v-2.13A4 4 0 0 0 12 9V7.83A3 3 0 0 0 14 5V3a1 1 0 0 0-1-1H3Zm1 2V3h8v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                    </svg>
                  </div>
                  <div>Freelancer tax return</div>
                </div>
              </div>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>

      <section className="section secondBackground">
        <div className="container-lg">
          <FadeInOnScroll>
          <SectionHeader1
            p={"Web positioning"}
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
          </FadeInOnScroll>
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
