import "../styles/HomePage.css";

import { TwoCol, OneCol } from "../layouts/Layouts";
import Image from "../components/Image";
import { HighlightedText } from "../components/HighlightedText";

function HomePage({ homeInfo }) {
  const onClickHandle = homeInfo.Button.onClickHandle;
  const ButtonText = homeInfo.Button.text;

  return (
    <section className="home-section" id="home">
      <TwoCol id={"two-col-home"}>
        <OneCol id={"left"}>
          <HighlightedText hmtlType="h1" content={homeInfo.HeaderText} />
          <p>{homeInfo.Slogan}</p>
          <button onClick={onClickHandle}>{ButtonText}</button>
        </OneCol>
        <OneCol id={"rigt"}>
          <Image ImageInfo={homeInfo.Image} />
        </OneCol>
      </TwoCol>
    </section>
  );
}

export default HomePage;
