import LoadingSpinner from "@/app/components/LoadingSpinner";
import type { ButtonComponent } from "../../buttonHelpers";
import { AnimatePresence, motion } from "framer-motion";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.span>
  );
};

const ButtonGood: ButtonComponent = ({
  onClick,
  isLoading,
  isDisabled,
  isSuccess,
}) => {
  const getButtonStyling = () => {
    if (isSuccess) return "bg-blue-500 cursor-default";
    if (isLoading) return "bg-blue-500 cursor-default";
    if (isDisabled) return "bg-gray-300 text-gray-500 cursor-default";
    return "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-105";
  };

  const getButtonContent = () => {
    if (isSuccess)
      return <AnimationWrapper key="success">Success!</AnimationWrapper>;
    if (isLoading)
      return (
        <AnimationWrapper key="loading">
          <LoadingSpinner size="small" className="mt-1" />
        </AnimationWrapper>
      );
    return <AnimationWrapper key="submit">Submit</AnimationWrapper>;
  };

  return (
    <button
      disabled={isDisabled}
      className={`${getButtonStyling()} text-white p-2 w-20 h-10 rounded flex items-center justify-center`}
      onClick={onClick}
    >
      <AnimatePresence mode="wait" initial={false}>
        {getButtonContent()}
      </AnimatePresence>
    </button>
  );
};

export default ButtonGood;
