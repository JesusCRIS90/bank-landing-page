import Overlay from "./Overlay";
import { CenterLayout } from "./Layouts";

import { RenderModalWindow } from "../renders/RenderModalWindow";

import "../styles/ModalWindow.css";

function ModalWindow({ ModalInfo, id = "" }) {
  const callbacks = ModalInfo.Callbacks;
  const renderModalTag = ModalInfo.RenderFunctionTagId;

  function StopOnClickPropagation(e) {
    // Prevent the click event from reaching the overlay
    e.stopPropagation();
  }

  return (
    <Overlay closeOverlay={callbacks.Hide}>
      <CenterLayout className=" modal-window-container-layout">
        <div id={id} className="modal-window" onClick={StopOnClickPropagation}>
          <button onClick={callbacks.Hide} className="close-modal">
            ×
          </button>
          {RenderModalWindow(renderModalTag, ModalInfo.Data)}
        </div>
      </CenterLayout>
    </Overlay>
  );
}

export default ModalWindow;
