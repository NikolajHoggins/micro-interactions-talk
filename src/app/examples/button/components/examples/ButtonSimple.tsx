import type { ButtonComponent } from "../../buttonHelpers";

const ButtonSimple: ButtonComponent = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 active:bg-blue-700"
      onClick={onClick}
    >
      Submit
    </button>
  );
};

export default ButtonSimple;
