import clsxm from "../lib/clsxm";

const Button = ({ label, className, variant, funcOnClick }) => {
  return (
    <button
      type="button"
      className={clsxm(
        "button inline-flex items-center justify-center rounded-xl text-2xl p-4 font-medium",
        "focus:warning-none focus-visible:ring focus-visible:ring-blue-500",
        "transition-colors duration-75",
        [
          variant === "primary" && [
            "bg-gray-100",
            "hover:bg-gray-400",
            "text-gray-500 hover:text-white",
          ],
          variant === "success" && [
            "bg-emerald-400",
            "hover:bg-emerald-500",
            "text-white",
          ],
        ],
        className
      )}
      onClick={funcOnClick}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
