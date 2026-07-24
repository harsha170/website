import pageContent from '../Javascript/pageContent'

function ContactUs() {
  const { hero, supportCards, intro, contactCard, form } = pageContent.contactUs

  return (
    <>
    <section className="page-section bg-black-panel">
      <div className="container">
        <div className="row align-items-center gy-5 mb-5">
          <div className="col-lg-6">
            <p className="text-uppercase text-secondary mb-2 section-heading">{hero.eyebrow}</p>
            <h1 className="display-5 fw-bold">{hero.title}</h1>
            <p className="text-secondary mt-3">{hero.description}</p>
            <div className="mt-4 text-secondary">
              <p className="mb-2"><strong>Email:</strong> <a className="" href={`mailto:${hero.email}`}>{hero.email}</a></p>
              <p className="mb-2"><strong>Phone:</strong> <a className="" href={`tel:${hero.phone}`}>{hero.phone}</a></p>
              <p className="mb-0">{hero.note}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12">
                <div className="image-panel overflow-hidden hero-image-panel">
                  <img
                    src={hero.image.src}
                    alt={hero.image.alt}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
              {supportCards.map((card) => (
                <div key={card.title} className="col-md-6">
                  <div className="contact-card h-100 p-4">
                    <h5 className="mb-3">{card.title}</h5>
                    <p className="text-secondary mb-0">{card.description}</p>
                  </div>
                </div>
              ))}
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

        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="contact-card h-100 p-4">
              <h2 className="mb-4">{contactCard.title}</h2>
              <p className="text-secondary">{contactCard.description}</p>
              <ul className="list-unstyled mt-4 text-secondary">
                <li className="mb-3"><strong>Location:</strong> {contactCard.location}</li>
                <li className="mb-3"><strong>Email:</strong> <a className="" href={`mailto:${contactCard.email}`}>{contactCard.email}</a></li>
                <li className="mb-3"><strong>Phone:</strong> <a className="" href={`tel:${contactCard.phone}`}>{contactCard.phone}</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7">
            {/* <div className="contact-card h-100 p-4">
              <h3 className="mb-4">{form.title}</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating text-white">
                      <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                      <label htmlFor="fullName">Full Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating text-white">
                      <input type="email" className="form-control" id="email" placeholder="Email" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating text-white">
                      <input type="text" className="form-control" id="company" placeholder="Company" />
                      <label htmlFor="company">Company</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating text-white">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating text-white">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }} />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">{form.buttonLabel}</button>
                  </div>
                </div>
              </form>
            </div> */}
            <iframe
                width="800px"
                height="480px"
                src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=92ArE2f5lUqmoMl3xs75Qv6fWzi99xRPm75QiZaCLRpURjBHRkpURFlFMkg3T0dUVUJaNUhHMkxWWS4u&embed=true"
                frameBorder="0"
                marginWidth="0"
                marginHeight="0"
                style={{
                  border: "none",
                  maxWidth: "100%",
                  maxHeight: "100vh",
                }}
                allowFullScreen
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                msallowfullscreen="true"
                title="Microsoft Form"
                className="contact-card"
              />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactUs
