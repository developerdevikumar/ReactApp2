import React from 'react'
import ExperienceItem from './ExperienceItem'

function ExperienceList() {
    return (
 <div>
  {/* About Start */}
  <div className="about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="about-img">
            <div className="about-img-1">
              <img src="img/about-2.jpg" alt="Image" />
            </div>
            <div className="about-img-2">
              <img src="img/about-1.jpg" alt="Image" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="section-header">
       <ExperienceItem text="sai" Tittle="jfuhijrfdhudfukjjfdkjkfdkjl" details="dijijdskksldjlkjsdlkjklsd" details="djxncbdjdsnjfdjkgnrkdjfgnjkdkgkfkjdkm,gjddn,xjkxkxkdkdxlislkslik" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}</div>

    )
}

export default ExperienceList
