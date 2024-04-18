import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: ` UI/UX is a very complicated field in that it is not easy to satisfy the business stakeholders with the output. 
      Sumesh handles that with great ease and enthusiasm. On one of my projects he has greatly transformed a poorly 
      written web application and made it responsive, intuitive and functional. Sumesh's technical skills span across the 
      UI frameworks - he is proficient in javascript, HTML5, CSS (SASS etc). He is easy to work with and brings lot of value 
      and dedication to work. Sumesh is very quick in recognizing areas of improvement and is quick to fix or enhance the application. 
      A great team player, he will be a valuable add to any technical team.`,
      reviewerName: "Satya Behara",
      designation: "Software Architect",
      delayAnimation: "",
    },
    {
      imageName: "team-2",
      desc: `I had worked with Sumesh for nearly three years and it has been a real pleasure to work with him. His skills in 
      UI/UX is an exceptional for the projects that we had worked together. He is really passionate in terms of creative 
      designs and addresses each and every corner. Sumesh is very good team player and willing to learn from other team 
      members and also to help and guide others too. Sumesh has great relationship with all his fellow colleagues 
      (from the existing company and also from his previous companies). I am always happy to work with Sumesh and highly 
      recommend him to anyone. Wish You All The Very Best!!!`,
      reviewerName: "Mohamed Rifaideen",
      designation: "Project Management Specialist | Product Management And Project Delivery",
      delayAnimation: "200",
    },
    {
      imageName: "team-3",
      desc: `Sumesh is an enthusiastic person who is always with a smile. He is a dedicated and hardworking individual with 
      a good understanding of UI designing. He has a good depth of knowledge in front-end code and a highly positive attitude 
      to learn and adapt to new frameworks and platforms. Working in an Agile environment, he always has the "can do" attitude 
      with a positive vibe and a smile. Apart from the professionalism, he has a diversified set of skills. He is also a cricketer, 
      musician and a great organizer. Putting all his skills together he has immensely contributed in doing successful company events. 
      I would not hesitate to recommend Sumesh as a creative UI engineer. He would be an asset to any company.`,
      reviewerName: "Janani Dabare",
      designation: "Lead UX Interaction Designer at IFS",
      delayAnimation: "400",
    },
    {
      imageName: "team-4",
      desc: `Sumesh has been a real pleasure to work with. Sumesh did an exceptional job on projects that we worked together on. 
      Passionate, great and creative co-worker. Detail oriented, intelligent, deadline oriented and broad-minded employee; has 
      vast knowledge and is thorough. Thanks to interpersonal skills, Sumesh has great relations with both company clients and 
      potential customers. Is able to work in a fast-paced environment. Highly recommended.`,
      reviewerName: "Nilusha Peiris",
      designation: "Senior Software Engineer at CAL",
      delayAnimation: "600",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
