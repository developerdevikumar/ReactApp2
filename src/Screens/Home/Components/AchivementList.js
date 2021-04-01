import React from 'react'
import AchivementItem from './AchivementItem'

function AchivementList() {
    return (
        <div className="fact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="img/icon-4.png" alt="Icon" />
<AchivementItem text="kumar" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="img/icon-1.png" alt="Icon" />
                <AchivementItem text="Lokesh" />

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="img/icon-8.png" alt="Icon" />
                <AchivementItem text="Rohit" />

              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="fact-item">
                <img src="img/icon-6.png" alt="Icon" />
                <AchivementItem text="teju" />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AchivementList
