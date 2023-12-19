import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function (
  { children, btncaption, handleCancel },
  ref
) {
  let dialogref = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogref.current.showModal();
      },
    };
  });
  return (
    <dialog
      className="backdrop:bg-slate-900 backdrop:opacity-75 rounded-lg"
      ref={dialogref}
    >
      {children}
      <div method="modal">
        <button
          className="outline-red-500 outline text-red-500 float-right mx-6 mt-2 mb-2 rounded-md w-14 h-8 hover:bg-red-500 hover:text-white"
          onClick={handleCancel}
        >
          {btncaption}
        </button>
      </div>
    </dialog>
  );
});

export default Modal;
