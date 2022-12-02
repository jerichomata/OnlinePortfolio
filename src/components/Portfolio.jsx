import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const AllPortfolioContent = [
  {
    img: "1",
    title: "BudgetBetter",
    subTitle: "Python, Flask, React, Node, Heroku",
    portfolioLink:
      "https://budget-better-app.herokuapp.com/dashboard",
  },
  {
    img: "3",
    title: "Music Genre Prediction",
    subTitle: "Python, Flask, React, KNN, SVM",
    portfolioLink:
      "https://github.com/jerichomata/flask-music-classifier",
  },
  {
    img: "2",
    title: "UCSD Health WebScraper",
    subTitle: "Python, NumPy, Deep Learning, NLP",
    portfolioLink:
      "https://github.com/jerichomata/webScraper",
  }
];

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <SRLWrapper>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              {/* <span>{val.title}</span> */}
                              <span className="project-title">
                                {val.title}
                              </span>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <a
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
                              alt={val.alterText}
                            />
                          </a>
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>
            </SRLWrapper>
            {/* End tabpanel */}
          </Tabs>
        </div>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
