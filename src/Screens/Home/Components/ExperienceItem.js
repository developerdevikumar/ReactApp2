import React from 'react'

function ExperienceItem({text, Tittle, details}) {
    return (
        <div>

                    <div class="col-md-6">
                        <div class="section-header">
                            <p>{text}</p>
                            <h2>{Tittle}</h2>
                        </div>
                        <div class="about-text">
                            <p>
                            {details}
                            </p>
                            <p>
                           {details}
                            </p>
                            <a class="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>

    )
}

export default ExperienceItem
