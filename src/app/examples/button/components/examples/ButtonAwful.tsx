import type { ButtonComponent } from "../../buttonHelpers";

// Started out named ButtonSimple, but actually it's awful
const ButtonAwful: ButtonComponent = ({
  onClick,
  // isLoading,
  // isDisabled,
  // isSuccess,
}) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded cursor-default"
      onClick={onClick}
    >
      Submit
    </button>
  );
};

export default ButtonAwful;
