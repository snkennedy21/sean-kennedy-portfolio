import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center mx-4">
      <div className="w-[550px] h-[300px] bg-darkColorTint flex flex-col gap-12 justify-around items-center rounded-md">
        <div className="flex flex-col items-center gap-2">
          <p className="text-softPrimary text-6xl">Thank You</p>
          <p className="text-softPrimary text-xl">You'll hear from me soon</p>
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-accentPrimary px-4 py-3 rounded-md text-softPrimary -mt-16 hover:bg-accentPrimaryTint"
        >
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}

export default ThankYouPage;
