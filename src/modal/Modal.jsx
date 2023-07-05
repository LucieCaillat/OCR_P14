import "./modal.css";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
  return createPortal(
    <div className="modal-back">
      <div className="modal">
        {children} <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
