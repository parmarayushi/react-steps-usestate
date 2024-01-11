export default function StepMessage({ step, children }) {
  return (
    <p className="flex flex-col items-center text-center mx-0 my-10 font-bold text-xl">
      Step {step}: {children}
    </p>
  );
}
