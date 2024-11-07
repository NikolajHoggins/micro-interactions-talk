import LoadingSpinner from "@/app/components/LoadingSpinner";
import type { ButtonComponent } from "../../buttonHelpers";
import { AnimatePresence, motion } from "framer-motion";

const AnimationWrapper = ({
  children,
  key,
}: {
  children: React.ReactNode;
  key: string;
}) => {
  return (
    <motion.span
      key={key}
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
  loading,
  disabled,
  isSuccess,
}) => {
  const getButtonStyling = () => {
    if (isSuccess) return "bg-blue-500 cursor-default";
    if (loading) return "bg-blue-500 cursor-default";
    if (disabled) return "bg-gray-300 text-gray-500 cursor-default";
    return "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-105";
  };

  const getButtonContent = () => {
    if (isSuccess)
      return <AnimationWrapper key="success">Success!</AnimationWrapper>;
    if (loading)
      return (
        <AnimationWrapper key="loading">
          <LoadingSpinner size="small" className="mt-1" />
        </AnimationWrapper>
      );
    return <AnimationWrapper key="submit">Submit</AnimationWrapper>;
  };

  return (
    <motion.button
      disabled={disabled}
      className={`${getButtonStyling()} text-white p-2 w-20 h-10 rounded flex items-center justify-center`}
      onClick={onClick}
    >
      <AnimatePresence mode="wait" initial={false}>
        {getButtonContent()}
      </AnimatePresence>
    </motion.button>
  );
};

export default ButtonGood;
