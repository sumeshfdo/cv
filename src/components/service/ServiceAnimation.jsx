import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Web designer with a flair for creating 
    visually engaging websites. Dedicated to delivering user-friendly and responsive 
    designs that align with clients' unique visions and goals.`,
    delayAnimation: "",
  },
  {
    icon: "icon-mobile",
    title: "Mockup Desiging",
    descriptions: `Specialized in crafting intuitive and visually appealing mockups. 
    Committed to creating seamless user experiences and transforming ideas into stunning 
    digital prototypes.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Graphic Designing",
    descriptions: `Concepts and logo designer with a passion for 
    creating striking visual identities. specialized in crafting unique and memorable 
    designs that capture the essence of your brand.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
