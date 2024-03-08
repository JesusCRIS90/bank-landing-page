import "../styles/Overlay.css";

function Overlay({ children, closeOverlay = undefined }) {
  return (
    <div onClick={closeOverlay} className="overlay">
      {children}
    </div>
  );
}

export default Overlay;
