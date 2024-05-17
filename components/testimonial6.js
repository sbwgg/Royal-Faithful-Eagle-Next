import React from 'react'

import PropTypes from 'prop-types'

const Testimonial6 = (props) => {
  return (
    <>
      <div
        className={`testimonial6-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="testimonial6-max-width thq-section-max-width">
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            className="testimonial6-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide swiper-slide"
              >
                <div className="testimonial6-card">
                  <h1 className="testimonial6-text">{props.heading}</h1>
                  <p className="testimonial6-text01 thq-body-large">
                    {props.review1}
                  </p>
                  <div className="testimonial6-avatar"></div>
                </div>
                <div className="testimonial6-card1">
                  <h1 className="testimonial6-text02">{props.heading}</h1>
                  <p className="testimonial6-text03 thq-body-large">
                    {props.review2}
                  </p>
                  <div className="testimonial6-avatar1">
                    <div className="testimonial6-avatar-content"></div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide1 swiper-slide"
              >
                <div className="testimonial6-card2">
                  <img
                    alt={props.company3LogoAlt}
                    src={props.company3LogoSrc}
                    className="testimonial6-logo"
                  />
                  <p className="testimonial6-text04 thq-body-large">
                    {props.review3}
                  </p>
                  <div className="testimonial6-avatar2">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial6-avatar-image thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="testimonial6-avatar-content1">
                      <span className="testimonial6-text05 thq-body-small">
                        {props.author3Name}
                      </span>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="testimonial6-card3">
                  <img
                    alt={props.company4LogoAlt}
                    src={props.company4LogoSrc}
                    className="testimonial6-logo1"
                  />
                  <p className="testimonial6-text07 thq-body-large">
                    {props.review4}
                  </p>
                  <div className="testimonial6-avatar3">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial6-avatar-image1 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="testimonial6-avatar-content2">
                      <span className="testimonial6-text08 thq-body-small">
                        {props.author4Name}
                      </span>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="testimonial6-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
          <div
            data-thq="slider"
            data-loop="true"
            data-autoplay="true"
            data-navigation="true"
            data-pagination="true"
            className="testimonial6-slider1 swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide2 swiper-slide"
              >
                <div className="testimonial6-card4">
                  <img
                    alt={props.company1LogoAlt}
                    src={props.company1LogoSrc}
                    className="testimonial6-logo2"
                  />
                  <span className="testimonial6-text10 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </span>
                  <div className="testimonial6-avatar4">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial6-avatar-image2 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="testimonial6-avatar-content3">
                      <span className="testimonial6-text11 thq-body-small">
                        <span>Author Name</span>
                        {props.author1Name}
                      </span>
                      <span className="thq-body-small">
                        Position, Company name
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide3 swiper-slide"
              >
                <div className="testimonial6-card5">
                  <img
                    alt={props.company2LogoAlt}
                    src={props.company2LogoSrc}
                    className="testimonial6-logo3"
                  />
                  <span className="testimonial6-text14 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </span>
                  <div className="testimonial6-avatar5">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial6-avatar-image3 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="testimonial6-avatar-content4">
                      <span className="testimonial6-text15 thq-body-small">
                        <span>Author Name</span>
                        {props.author2Name}
                      </span>
                      <span className="thq-body-small">
                        Position, Company name
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide4 swiper-slide"
              >
                <div className="testimonial6-card6">
                  <img
                    alt={props.company3LogoAlt}
                    src={props.company3LogoSrc}
                    className="testimonial6-logo4"
                  />
                  <span className="testimonial6-text18 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </span>
                  <div className="testimonial6-avatar6">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial6-avatar-image4 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="testimonial6-avatar-content5">
                      <span className="testimonial6-text19 thq-body-small">
                        <span>Author Name</span>
                        {props.author3Name}
                      </span>
                      <span className="thq-body-small">
                        <span>Position, Company name</span>
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-thq="slider-slide"
                className="testimonial6-slider-slide5 swiper-slide"
              >
                <div className="testimonial6-card7">
                  <img
                    alt={props.company4LogoAlt}
                    src={props.company4LogoSrc}
                    className="testimonial6-logo5"
                  />
                  <span className="testimonial6-text23 thq-body-large">
                    Choose from our variety of pricing plans, including Basic,
                    Business, and Enterprise subscriptions, each offering a
                    range of features. Start today!
                  </span>
                  <div className="testimonial6-avatar7">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial6-avatar-image5 thq-img-round thq-img-ratio-1-1"
                    />
                    <div className="testimonial6-avatar-content6">
                      <span className="testimonial6-text24 thq-body-small">
                        <span>Author Name</span>
                        {props.author4Name}
                      </span>
                      <span className="thq-body-small">
                        <span>Position, Company name</span>
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="testimonial6-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="swiper-pagination-bullet"
              ></div>
            </div>
            <div
              data-thq="slider-button-prev"
              className="swiper-button-prev"
            ></div>
            <div
              data-thq="slider-button-next"
              className="swiper-button-next"
            ></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial6-container {
            height: 525px;
          }
          .testimonial6-max-width {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial6-slider {
            width: 100%;
            display: inline-block;
            position: relative;
          }
          .testimonial6-slider-slide {
            gap: var(--dl-space-space-twounits);
            height: 368px;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 301px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: #292929;
          }
          .testimonial6-text {
            color: #ffffff;
            margin-top: var(--dl-space-space-unit);
          }
          .testimonial6-text01 {
            color: #ffffff;
            text-align: center;
          }
          .testimonial6-avatar {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-card1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: #292929;
          }
          .testimonial6-text02 {
            color: #ffffff;
            margin-top: var(--dl-space-space-unit);
          }
          .testimonial6-text03 {
            color: #ffffff;
            text-align: center;
          }
          .testimonial6-avatar1 {
            gap: var(--dl-space-space-unit);
            width: 233px;
            height: 136px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-content {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-slider-slide1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo {
            height: 2rem;
          }
          .testimonial6-text04 {
            text-align: center;
          }
          .testimonial6-avatar2 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content1 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text05 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-card3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo1 {
            height: 2rem;
          }
          .testimonial6-text07 {
            text-align: center;
          }
          .testimonial6-avatar3 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image1 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content2 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text08 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-pagination {
            display: block;
          }
          .testimonial6-slider1 {
            width: 100%;
            display: none;
            position: relative;
            align-self: center;
          }
          .testimonial6-slider-slide2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo2 {
            height: 2rem;
          }
          .testimonial6-text10 {
            text-align: center;
          }
          .testimonial6-avatar4 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image2 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content3 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text11 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-slide3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo3 {
            height: 2rem;
          }
          .testimonial6-text14 {
            text-align: center;
          }
          .testimonial6-avatar5 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image3 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content4 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text15 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-slide4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo4 {
            height: 2rem;
          }
          .testimonial6-text18 {
            text-align: center;
          }
          .testimonial6-avatar6 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image4 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content5 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-slide5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial6-card7 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-logo5 {
            height: 2rem;
          }
          .testimonial6-text23 {
            text-align: center;
          }
          .testimonial6-avatar7 {
            gap: var(--dl-space-space-unit);
            width: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .testimonial6-avatar-image5 {
            width: 56px;
            height: 56px;
          }
          .testimonial6-avatar-content6 {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .testimonial6-text24 {
            font-style: normal;
            font-weight: 600;
          }
          .testimonial6-slider-pagination1 {
            display: block;
          }
          @media (max-width: 767px) {
            .testimonial6-slider {
              display: none;
            }
            .testimonial6-slider-slide {
              padding: var(--dl-space-space-threeunits);
            }
            .testimonial6-slider-slide1 {
              padding: var(--dl-space-space-threeunits);
            }
            .testimonial6-slider1 {
              display: flex;
            }
            .testimonial6-slider-slide2 {
              padding: var(--dl-space-space-threeunits);
            }
            .testimonial6-slider-slide3 {
              padding: var(--dl-space-space-threeunits);
            }
            .testimonial6-slider-slide4 {
              padding: var(--dl-space-space-threeunits);
            }
            .testimonial6-slider-slide5 {
              padding: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .testimonial6-slider-slide {
              padding: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .testimonial6-slider-slide1 {
              padding: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .testimonial6-slider-slide2 {
              padding: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .testimonial6-slider-slide3 {
              padding: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .testimonial6-slider-slide4 {
              padding: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .testimonial6-slider-slide5 {
              padding: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial6.defaultProps = {
  heading: 'Anime',
  author2Alt: 'Image of Kaito Yamato',
  author4Alt: 'Image of Kenji Tanaka',
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company2LogoAlt: 'Company Logo',
  review2:
    'As an artist, I find inspiration in the diverse range of anime available on Animee.lv.',
  review1: 'Anime ir lielisks izklaides veids!',
  author1Position: 'Anime Enthusiast',
  author3Position: 'Cosplayer',
  author4Src:
    'https://images.unsplash.com/photo-1619694770795-e21c58464159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc3Nzc5NXw&ixlib=rb-4.0.3&q=80&w=300',
  review3:
    'Thanks to Animee.lv, I can easily find the perfect characters to cosplay as for conventions.',
  author2Position: 'Manga Artist',
  company1LogoAlt: 'Company Logo',
  author4Position: 'Anime Blogger',
  company4LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review4:
    'Animee.lv is my go-to source for staying updated on all things anime-related.',
  author4Name: 'Kenji Tanaka',
  author1Name: 'Sakura Chan',
  author1Alt: 'Image of Sakura Chan',
  rootClassName: '',
  author1Src:
    'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc3Nzc5Nnw&ixlib=rb-4.0.3&q=80&w=300',
  author2Src:
    'https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc3Nzc5Nnw&ixlib=rb-4.0.3&q=80&w=300',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Name: 'Kaito Yamato',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Alt: 'Image of Haruhi Suzuki',
  company3LogoAlt: 'Company Logo',
  author3Name: 'Haruhi Suzuki',
  author3Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTc3Nzc5Nnw&ixlib=rb-4.0.3&q=80&w=300',
  company4LogoAlt: 'Company Logo',
}

Testimonial6.propTypes = {
  heading: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  company3LogoSrc: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  review2: PropTypes.string,
  review1: PropTypes.string,
  author1Position: PropTypes.string,
  author3Position: PropTypes.string,
  author4Src: PropTypes.string,
  review3: PropTypes.string,
  author2Position: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author4Position: PropTypes.string,
  company4LogoSrc: PropTypes.string,
  review4: PropTypes.string,
  author4Name: PropTypes.string,
  author1Name: PropTypes.string,
  author1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  author1Src: PropTypes.string,
  author2Src: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author2Name: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author3Alt: PropTypes.string,
  company3LogoAlt: PropTypes.string,
  author3Name: PropTypes.string,
  author3Src: PropTypes.string,
  company4LogoAlt: PropTypes.string,
}

export default Testimonial6
