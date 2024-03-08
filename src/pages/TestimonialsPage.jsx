import "../styles/TestimonialsPage.css";

import HeaderSection from "../components/HeaderSection";
import SliderContainer from "../components/SliderContainer";
import { RenderSliderContent } from "../renders/RenderSliderContent";

function TestimonialsPage({ TestimonialsInfo }) {
  const headerSec = TestimonialsInfo.Header;

  const SliderInfo = {
    RenderFunction: RenderSliderContent,
    Data: TestimonialsInfo.Testimonials,
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <HeaderSection HeaderSecInfo={headerSec} />
      <div className="content">
        <SliderContainer SliderInfo={SliderInfo} />
      </div>
    </section>
  );
}

export default TestimonialsPage;
