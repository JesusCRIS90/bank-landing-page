import InputFieldLabel from "../components/InputFieldLabel";
import { HighlightedText } from "../components/HighlightedText";
import { CenterLayout } from "../layouts/Layouts";

import "../styles/OpenAccountForm.css";

function OpenAccountForm({ Data }) {
  return (
    <CenterLayout>
      <form className="open-account-form">
        <HighlightedText hmtlType="h1" content={Data.Header} />
        <InputFieldLabel Info={Data.InputsFields[0]} />
        <InputFieldLabel Info={Data.InputsFields[1]} />
        <InputFieldLabel Info={Data.InputsFields[2]} />
        <CenterLayout>
          <button onClick={undefined}>Next step →</button>
        </CenterLayout>
      </form>
    </CenterLayout>
  );
}

const HeaderOpenAccountForm = {
  text: "Open your bank account in just 5 minutes !",
  keywords: ["5", "minutes"],
};

const Field1 = {
  text: "First Name:",
  type: "text",
};

const Field2 = {
  text: "Last Name:",
  type: "text",
};

const Field3 = {
  text: "Email Address:",
  type: "email",
};
export default OpenAccountForm;
