import LoadingSpinner from "@/app/components/LoadingSpinner";
import type { ButtonComponent } from "../../buttonHelpers";

const ButtonGood: ButtonComponent = ({
  onClick,
  loading,
  disabled,
  isSuccess,
}) => {
  const getButtonStyling = () => {
    if (isSuccess) return "bg-blue-500 cursor-default";
    if (disabled) return "bg-blue-400 cursor-not-allowed";
    return "bg-blue-500 hover:bg-blue-600 active:bg-blue-700";
  };

  const getButtonContent = () => {
    if (isSuccess) return "Success!";
    if (loading) return <LoadingSpinner size="small" />;
    return "Submit";
  };

  return (
    <button
      disabled={disabled}
      className={`${getButtonStyling()} text-white p-2 w-20 h-10 rounded flex items-center justify-center`}
      onClick={onClick}
    >
      {getButtonContent()}
    </button>
  );
};

export default ButtonGood;
