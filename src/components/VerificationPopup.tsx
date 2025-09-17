// import React from "react";
// import { useNavigate } from "react-router-dom";

interface VerificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const VerificationPopup: React.FC<VerificationPopupProps> = ({ isOpen, onClose }) => {
//   const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="bg-black rounded-xl shadow-xl w-full max-w-md p-6 text-center">
        <h2 className="text-xl font-semibold text-white">Verify Your Email</h2>
        <p className="text-white mt-3">
          {/* A verification email has been sent to your email address. Please check your inbox and verify your account. */}
          We have sent a verification email. Please check your inbox, and do not forget to look in your Spam or Promotions folder if it is not there.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          {/* <button
            onClick={onClose}
            className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg"
          >
            Cancel
          </button> */}
          <button
            // onClick={() => navigate("/UserLogin")}
            onClick={onClose}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 hover:text-white text-white font-medium py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPopup;
