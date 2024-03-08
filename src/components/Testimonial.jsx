import Profile from "./Profile";

import "../styles/Testimonial.css";

function Testimonial({ TestimonialData }) {
  return (
    <div className="testimonial">
      <h5>{TestimonialData.Slogan}</h5>
      <blockquote>{TestimonialData.Text}</blockquote>
      <Profile ProfileData={TestimonialData.Profile} />
      <div></div>
    </div>
  );
}

export default Testimonial;
