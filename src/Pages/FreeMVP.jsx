import { Link } from 'react-router-dom'
import pageContent from '../Javascript/pageContent'

function FreeMVP() {
  const { hero, intro, explanationCards, processHeading, processCards, helpCard, linksCard } = pageContent.freeMvp

  return (
    <>
    <section className="page-section bg-black-panel">
      <div className="container">
        <div className="row align-items-center gy-5 mb-5">
          <div className="col-lg-7">
            <p className="text-uppercase text-secondary mb-2 section-heading">{hero.eyebrow}</p>
            <h1 className="display-5 fw-bold">{hero.title}</h1>
            <p className="hero-lead mt-4">{hero.description}</p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link to={hero.buttonHref} className="btn btn-outline-light btn-lg">{hero.buttonLabel}</Link>
            </div>
          </div>

          <div className="col-lg-5">
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
        </div>

        <div className="row g-4 mb-5">
          {explanationCards.map((card) => (
            <div key={card.title} className="col-lg-6">
              <div className="contact-card h-100 p-4">
                <h2 className="mb-3">{card.title}</h2>
                {card.description ? (
                  <p className="text-secondary mb-0">{card.description}</p>
                ) : (
                  <ul className="text-secondary mb-0 ps-3">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12">
            <div className="contact-card p-4">
              <h2 className="mb-4">{processHeading.title}</h2>
              <div className="row g-4">
                {processCards.map((card) => (
                  <div key={card.title} className="col-md-6 col-xl-3">
                    <div className="p-3 rounded-4 border border-white border-opacity-10 h-100">
                      <h5 className="mb-2">{card.title}</h5>
                      <p className="text-secondary mb-0">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="contact-card p-4 h-100">
              <h3 className="mb-3">{helpCard.title}</h3>
              <p className="text-secondary mb-3">{helpCard.description}</p>
              <ul className="list-unstyled text-secondary mb-0">
                <li className="mb-2"><strong>Location:</strong> {helpCard.location}</li>
                <li className="mb-2"><strong>Email:</strong> <a className="" href={`mailto:${helpCard.email}`}>{helpCard.email}</a></li>
                <li><strong>Phone:</strong> <a className="" href={`tel:${helpCard.phone}`}>{helpCard.phone}</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-card p-4 h-100">
              <h3 className="mb-3">{linksCard.title}</h3>
              <ul className="list-unstyled text-secondary mb-0">
                {linksCard.links.map((link) => (
                  <li key={link.label} className="mb-2">
                    <Link className="" to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
     
    </div>
    </section>
    </>
  )
}

export default FreeMVP
