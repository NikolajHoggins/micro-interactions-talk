import { useEffect, useState } from "react";

const NameField = ({
  value,
  onChange,
  error,
  currentComponent,
}: {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  currentComponent: number;
}) => {
  const [displayError, setDisplayError] = useState(error);

  useEffect(() => {
    if (error) {
      if (currentComponent === 0) {
        return;
      }
      setDisplayError(error);
      return;
    }
    setTimeout(() => {
      setDisplayError(null);
    }, 150);
  }, [error, currentComponent]);

  return (
    <div>
      <div className="h-5 overflow-hidden">
        <p
          className={`text-red-500 text-xs transition-all h-4 ${
            error ? "translate-y-0" : "translate-y-5"
          }`}
        >
          {displayError}
        </p>
      </div>
      <input
        type="text"
        className="border border-gray-300 rounded p-2 w-full text-gray-800"
        placeholder="Name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default NameField;
