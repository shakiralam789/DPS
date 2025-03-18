import { signal } from "@preact/signals-react";

export const step = signal([
  {
    step: "01",
    title: "Applicant's Personal Details",
  },
  {
    step: "02",
    title: "Nominee's Information",
  },
]);

export const currentStep = signal(1);

export default function DepositStep() {
  return (
    <div className="grid grid-cols-2 relative">
      <span className="z-10 absolute top-5 2xl:top-7 -translate-y-1/2 left-[25%] right-[25%] h-px bg-gray-300"></span>
      {step.value.map((item, index) => {
        let currentClass =
          "bg-body-color border-primary-purple  text-primary-purple";
        let filledClass = "border-primary-purple bg-primary-purple text-white";
        let unfilledClass = "bg-body-color border-gray-300 text-gray-icon";

        return (
          <div
            key={index}
            className="relative z-20 flex flex-col justify-center items-center"
          >
            <div
              className={` mb-4 size-10 2xl:size-14 font-medium border rounded-full flex items-center justify-center font-24 ${
                currentStep == item.step
                  ? currentClass
                  : currentStep > item.step
                  ? filledClass
                  : unfilledClass
              }`}
            >
              {item.step}
            </div>
            <div
              className={`font-16 ${
                currentStep == item.step || currentStep > item.step
                  ? "text-primary-purple"
                  : "text-gray-icon"
              }`}
            >
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}
