import React from "react";
import ExperienceCount from "../components/ExperienceCount";

const Experience = () => {
  return (
    <div className="experience background2 overlay_two py_60 full_row">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="fact-counter">
              <div className="row">
                <ExperienceCount title="Years of Experience" endValue="7" />
                <ExperienceCount title="Porjects Done" endValue="145" />
                <ExperienceCount title="Happy Clients" endValue="137" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
