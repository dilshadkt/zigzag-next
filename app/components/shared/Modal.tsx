import React from "react";

const Modal = ({ operation }: { operation?: any }) => {
  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom  flex items-center justify-center  "
      >
        <div className="modal-box w-[50%] rounded-lg">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4 font-semibold  ">
            The selected file will be deleted, continue ?
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn hover:bg-red-500 hover:text-white">
                Close
              </button>
              <div
                onClick={() => operation()}
                className="btn hover:bg-blue-500 hover:text-white ml-2"
              >
                Continue
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
