import React from "react";

// import { Container } from './styles';

function Volunteers() {
  return (
    <div id="fh5co-content-section" className="fh5co-section-gray">

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Depoimentos de voluntários</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <div className="fh5co-testimonial text-center animate-box">
              <figure>
                <img src="images/person_1.jpg" alt="user" />
              </figure>
              <blockquote>
                <p>
                  &ldquo;Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.&rdquo;
                </p>
              </blockquote>
              <span>Jean Doe, XYZ Co.</span>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="fh5co-testimonial text-center animate-box">
              <figure>
                <img src="images/person_2.jpg" alt="user" />
              </figure>
              <blockquote>
                <p>
                  &ldquo;Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.&rdquo;
                </p>
              </blockquote>
              <span>John Doe, XYZ Co.</span>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="fh5co-testimonial text-center animate-box">
              <figure>
                <img src="images/person_3.jpg" alt="user" />
              </figure>
              <blockquote>
                <p>
                  &ldquo;Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texts.&rdquo;
                </p>
              </blockquote>
              <span>John Doe, XYZ Co.</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Volunteers;
