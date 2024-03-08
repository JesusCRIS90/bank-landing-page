import "../styles/InputFieldLabel.css";

function InputFieldLabel({ Info }) {
  return (
    <div className="input-field-label">
      <label>{Info.text}</label>
      <input type={Info.type}></input>
    </div>
  );
}

export default InputFieldLabel;
