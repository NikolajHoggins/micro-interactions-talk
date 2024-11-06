const NavigationButton = ({
  disabled,
  onClick,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-blue-500 text-white p-2  rounded cursor-default w-24"
    >
      {children}
    </button>
  );
};

export default NavigationButton;
