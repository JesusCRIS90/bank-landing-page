import "../styles/Layouts.css";

function TwoCol({ children, id = "" }) {
  return (
    <div className="two-col-layout" id={id}>
      {children}
    </div>
  );
}

function OneCol({ children, id = "" }) {
  return (
    <div className="one-col-layout" id={id}>
      {children}
    </div>
  );
}

function CenterLayout({ children, id = "", className = "" }) {
  let class_Name = "center-layout" + className;

  return (
    <div className={class_Name} id={id}>
      {children}
    </div>
  );
}

export { TwoCol, OneCol, CenterLayout };
