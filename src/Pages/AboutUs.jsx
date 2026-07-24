import { Link } from 'react-router-dom'
import pageContent from '../Javascript/pageContent'

function AboutUs() {
  const { hero, intro, promiseCards, storyHeading, storyCards } = pageContent.aboutUs

  return (
    <>
      <section className="page-section bg-black-panel">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <p className="text-uppercase text-secondary mb-2 section-heading">{hero.badge}</p>
              <h1 className="display-5 fw-bold">{hero.title}</h1>
              <p className="lead hero-lead mb-4">{hero.description}</p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a href={hero.primaryCta.href} className="btn btn-primary btn-lg">{hero.primaryCta.label}</a>
                <a href={hero.secondaryCta.href} className="btn btn-outline-light btn-lg">{hero.secondaryCta.label}</a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="image-panel overflow-hidden hero-image-panel">
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="row align-items-center gy-4 mb-5">
            <div className="col-lg-6">
              <div className="image-panel overflow-hidden">
                <img src={intro.image.src} alt={intro.image.alt} className="img-fluid" loading="lazy" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-card p-4">
                <h3 className="mb-3">{intro.title}</h3>
                <p className="text-secondary mb-0">{intro.description}</p>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {promiseCards.map((card) => (
              <div key={card.title} className="col-md-6">
                <div className="card card-feature h-100 p-4">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-5 text-white">
            <div className="section-divider mx-auto"></div>
            <p className="text-uppercase text-secondary mb-2 section-heading">{storyHeading.eyebrow}</p>
            <h2 className="fw-bold">{storyHeading.title}</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {storyCards.map((card) => (
              <div key={card.title} className="col">
                <div className="card card-feature h-100 p-4">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
