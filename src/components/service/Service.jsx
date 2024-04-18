import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `Experienced freelance web designer with a flair for creating 
    visually engaging websites. Dedicated to delivering user-friendly and responsive 
    designs that align with clients' unique visions and goals. Let's collaborate and 
    bring your online presence to life with a captivating and effective website.`,
  },
  {
    icon: "icon-mobile",
    title: "Mockup Desiging",
    descriptions: `Specialized in crafting intuitive and visually appealing mockups. 
    Committed to creating seamless user experiences and transforming ideas into stunning 
    digital prototypes.`,
  },
  {
    icon: "icon-target",
    title: "Graphic Designing",
    descriptions: `Concepts and logo designer with a passion for 
    creating striking visual identities. I specialize in crafting unique and memorable 
    designs that capture the essence of your brand. Let's collaborate to create visually 
    impactful graphics and logos that set your business apart.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
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
