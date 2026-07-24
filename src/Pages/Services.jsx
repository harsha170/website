import pageContent from '../Javascript/pageContent'

function Services() {
  const { hero, intro, serviceCards, cta, processHeading, processCards } = pageContent.services

  return (
    <>
      <section className="page-section bg-black-panel">
        <div className="container">
          <div className="row align-items-center gy-5 mb-5">
            <div className="col-lg-6">
              <p className="text-uppercase text-secondary mb-2 section-heading">{hero.eyebrow}</p>
              <h1 className="display-5 fw-bold">{hero.title}</h1>
              <p className="text-secondary mt-3">{hero.description}</p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="image-panel overflow-hidden">
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
         

          <div className="row g-4">
            {serviceCards.map((card) => (
              <div key={card.title} className="col-md-6 col-xl-3">
                <div className="card card-feature h-100">
                  <div className="image-panel overflow-hidden mb-3">
                    <img src={card.image.src} alt={card.image.alt} loading="lazy" />
                  </div>
                  <div className="p-3">
                    <span className="badge bg-white text-dark mb-3">{card.number}</span>
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row align-items-center mt-5 bg-black-panel rounded-4 p-4">
            <div className="col-md-8 text-white">
              <h3 className="fw-bold">{cta.title}</h3>
              <p className="mb-0 text-secondary">{cta.description}</p>
            </div>
            <div className="col-md-4 text-md-end">
              <a href={cta.buttonHref} className="btn btn-primary btn-lg">{cta.buttonLabel}</a>
            </div>
          </div>
        </div>
          <div className="text-center mb-5 text-white">
            <div className="section-divider mx-auto"></div>
            <p className="text-uppercase text-secondary mb-2 section-heading">{processHeading.eyebrow}</p>
            <h2 className="fw-bold">{processHeading.title}</h2>
          </div>

          <div className="row g-4">
            {processCards.map((card) => (
              <div key={card.title} className="col-md-4">
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

export default Services
