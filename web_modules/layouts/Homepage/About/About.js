import React from "react"
import styles from "./About.scss"
import aboutImg from "./about-seaade.jpg"

class HomepageAbout extends React.Component {
  render() {
    return (
      <section id="about" className="section about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="section-title">About SEAADE</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <figure>
                <a
                  href="http://www.seaade.org/History/history.html"
                  target="_blank"
                >
                  <img
                    className="img-responsive"
                    src={ aboutImg }
                  />
                </a>
              </figure>
            </div>
            <div className="col-sm-6">
              <p className={ styles.aboutText }>
                The idea of forming an assocuation of dental educators in the South East Asian
                Region arose from the need to importve communication between various dental institutions.
                During the IADR (South East Asian Division) meetings in the late eighties this idea was
                discussed and accepted. The delegates who attended these meetings then, proposed that an
                association be set up to further develop the close relationship of the member countries
                in the education field. This will provide a more formal platform in which problems of
                dental education and research could be discussed.
              </p>
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default HomepageAbout
