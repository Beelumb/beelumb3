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

export default function SemPage() {
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
          <FadeInUpOnScroll className="row align-items-center justify-content-center">
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
                src={"https://difuso.es/wp-content/webp-express/webp-images/uploads/2025/03/SEM-HOME-1024x1024.png.webp"}
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
          <SectionHeader1
            p={"Our methodology"}
            h1="Our SEM Services"
            description={
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci sunt magni nisi accusantium facere vel officia
                voluptates eaque? Voluptatem recusandae amet quibusdam sapiente,
                reprehenderit distinctio.
              </>
            }
          />
          <div className="text-center"></div>
          <div className="row justify-content-center mt-5">
            <FadeInOnScroll delay={0} className="col-lg-3 col-md-3 methodologyContainer1">
              <img
                src={methodimg1}
                alt="Understanding your project"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Personalized campaigns</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Distinctio quidem numquam fugiat! Inventore, amet illo
                    labore harum natus quos provident.
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200} className="col-lg-3 col-md-3 methodologyContainer2">
              <img
                src={methodimg2}
                alt="Analyze details"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Fast results</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                    in voluptates! Necessitatibus debitis nam minima nihil
                    reprehenderit qui quidem voluptates?
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300} className="col-lg-3 col-md-3 methodologyContainer3">
              <img
                src={methodimg3}
                alt="Creating strategy"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Ad management</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium ab tempore accusamus eveniet tenetur impedit
                    sapiente at reiciendis libero perspiciatis.
                  </p>
                </div>
                <div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={400} className="col-lg-3 col-md-3 methodologyContainer4">
              <img
                src={methodimg4}
                alt="Adjusting strategy"
                style={{ width: "20%" }}
                className="mb-4"
              />
              <div className="d-flex justify-content-between ">
                <div className="">
                  <h4>Continuous optimization</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia commodi reiciendis excepturi animi tempora dolores
                    dignissimos dolor quae minus asperiores?
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
                      "Boost your business with
                    <span className="purple-underline">Google advertising</span>
                  </>
                }
                description={
                  <>
                    We make sure your ads on Google are not only visible, but
                    truly connect. Because it’s not just about being there, it’s
                    about being in the right place, with the right message, and
                    in front of the audience that really matters.
                    <br />
                    <br />
                    Why choose a PPC strategy? Because it’s direct, fast, and
                    effective. It’s the perfect complement to gain visibility
                    while your SEO strategy continues to build long-term impact.
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
          <SectionHeader1
            p={"Why choose a PPC strategy?"}
            h1={
              <>
                The perfect complement for your visibility
              </>
            }
            description={
              <>
                Because it’s direct, fast, and effective. It’s the perfect complement to gain visibility while your SEO strategy continues to build long-term impact.
              </>
            }
          />
          <div className="row g-4 mt-4">
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card h-100" style={{backgroundColor: '#f6f2f7'}}>
                <div style={{fontSize: '4rem'}}>👓</div>
                <h4 className="mb-2">Search Campaigns</h4>
                <p>
                  Imagine someone is searching for exactly what you offer on Google. With our search campaigns, your ad appears at that very moment. We make sure your message reaches when it matters most, helping you capture those potential clients right when they’re most interested.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card h-100" style={{backgroundColor: '#f2f8ed'}}>
                <div style={{fontSize: '4rem', }}>👥</div>
                <h4 className="mb-2">Display Campaigns</h4>
                <p>
                  We take your brand to millions of web pages, in banner or video format, with ads shown in the most relevant places. We create custom audiences and choose where we want your ad to be seen. This way, we connect you with the right people at the perfect moment.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card h-100" style={{backgroundColor: '#eef5f9'}}>
                <div style={{fontSize: '4rem'}}>🛒</div>
                <h4 className="mb-2">Shopping Campaigns</h4>
                <p>
                  Do you have an eCommerce? These campaigns are perfect for showing your products directly in Google’s search results. We show your clients the price, image, and description of the product right where they’re already looking for what you sell. It’s like putting your store directly in front of them.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card h-100" style={{backgroundColor: '#eef5f9'}}>
                <div style={{fontSize: '4rem', }}>🌈</div>
                <h4 className="mb-2">Video Campaigns</h4>
                <p>
                  If you want to stand out on YouTube, our video campaigns are ideal. We reach people most interested in what you offer and show them visually attractive ads. It’s a way to connect with your audience in a closer, more authentic way.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card h-100" style={{backgroundColor: '#fff5f0'}}>
                <div style={{fontSize: '4rem', }}>🚴‍♂️</div>
                <h4 className="mb-2">App Campaigns</h4>
                <p>
                  If you need to increase your app downloads, our universal app campaigns help you reach users searching for apps like yours. We show your ads in key places, helping more people download your app and start using it.
                </p>
              </div>
            </FadeInUpOnScroll>
            <FadeInUpOnScroll className="col-lg-4 col-md-6 col-12">
              <div className="seo-grid-card h-100" style={{backgroundColor: '#fcf3f4'}}>
                <div style={{fontSize: '4rem',}}>🪙</div>
                <h4 className="mb-2">Remarketing Campaigns</h4>
                <p>
                  Sometimes, a first visit isn’t enough. With our remarketing campaigns, we reconnect with users who have already interacted with your website. We show them personalized messages based on what they’ve seen or done before, giving them a nudge to make the final decision.
                </p>
              </div>
            </FadeInUpOnScroll>
          </div>
        </div>
      </section>



    

      

      <section className="section secondBackground">
        <div className="container-xl">
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
