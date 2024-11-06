const NavigationButton = ({
  disabled,
  onClick,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  const styling = disabled
    ? "bg-gray-300 text-gray-500 cursor-default"
    : "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700";
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styling} p-2 rounded w-24`}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
