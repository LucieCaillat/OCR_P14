import "./modal.css";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
  if (!open) return null;
  return createPortal(
    <div className="modal-background">
      <div className="modal">
        {children} <button onClick={onClose} className="close-modal" />
      </div>
    </div>,
    document.getElementById("portal")
  );
}
