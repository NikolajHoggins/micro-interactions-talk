export const LoadingSpinnerSize = {
  smaller: "smaller",
  small: "small",
  medium: "medium",
} as const;

export type LoadingSpinnerSize =
  (typeof LoadingSpinnerSize)[keyof typeof LoadingSpinnerSize];

const sizeToPx = {
  [LoadingSpinnerSize.smaller]: "16px",
  [LoadingSpinnerSize.small]: "20px",
  [LoadingSpinnerSize.medium]: "50px",
};
const LoadingSpinner = ({
  size = LoadingSpinnerSize.small,
  className = "",
  color = "ffffff",
}: {
  size?: LoadingSpinnerSize;
  className?: string;
  color?: string;
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: sizeToPx[size],
        height: sizeToPx[size],
        border: `1.5px solid #${color}4c`,
        borderTopColor: `#${color}`,
        borderRadius: "50%",
        animation: "spin 1s ease-in-out infinite",
      }}
      className={className}
    />
  );
};

export default LoadingSpinner;
