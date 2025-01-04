import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" style={{width:"150px",height:"auto"}}/>
                </div>

                <div className="right">
                  <h4>{data.organisation}</h4>
                  <h5>{data.role}</h5>
                  <h5>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h5>
                  <h7 style={{ color: "yellow" }}>{data.experiences[0]}</h7> <br/>
                  <h7 style={{ color: "yellow" }}>{data.experiences[1]}</h7> <br/>
                  <h7 style={{ color: "yellow" }}>{data.experiences[2]}</h7> <br/>
                  <h7 style={{ color: "yellow" }}>{data.experiences[3]}</h7> <br/>
                  <h7 style={{ color: "yellow" }}>{data.experiences[4]}</h7>
                  
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
