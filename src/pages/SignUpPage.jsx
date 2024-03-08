import "../styles/SignUpPage.css";

import { CenterLayout } from "../layouts/Layouts";

function SignUpPage({ SignUpInfo }) {
  const onClickHandle = SignUpInfo.Button.onClickHandle;
  const ButtonText = SignUpInfo.Button.text;

  return (
    <section className="signup-section" id="signup">
      <CenterLayout id="center-layout-signup">
        <h1>{SignUpInfo.Slogan}</h1>
        <button onClick={onClickHandle}>{ButtonText}</button>
      </CenterLayout>
    </section>
  );
}

export default SignUpPage;
