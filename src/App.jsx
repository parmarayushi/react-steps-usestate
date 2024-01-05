import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
  return (
    <>
      <div
        className="absolute top-1 right-4 cursor-pointer text-[40px] hover:text-[#7950f2]"
        onClick={() => setIsOpen(!isOpen)}
      >
        &times;
      </div>
      {isOpen && (
        <div className="w-[600px] bg-[#f7f7f7] rounded-md px-24 py-6 mx-auto my-24">
          <div className="flex justify-between">
            <div className={`numbers ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`numbers ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`numbers ${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="flex flex-col items-center text-center mx-0 my-10 font-bold text-xl">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="flex justify-between">
            <button className="btn" onClick={handlePrevious}>
              Previous
            </button>
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
