"use client";

import { useState } from "react";
import NavigationButton from "./components/NavigationButton";
import updateUser from "./api/updateUser";
import NameField from "./components/NameField";
import { componentList } from "./buttonHelpers";

const Page = () => {
  const [currentComponent, setCurrentComponent] = useState<number>(0);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const Component = Object.values(componentList)[currentComponent];
  const currentComponentName = Object.keys(componentList)[currentComponent];

  const canNext = currentComponent < Object.keys(componentList).length - 1;
  const canPrevious = currentComponent > 0;

  const onSubmit = () => {
    setLoading(true);
    setIsSuccess(false);
    updateUser(name)
      .then(() => {
        console.log("Data submitted");
        setIsSuccess(true);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleNameChange = (value: string) => {
    setName(value);
    setIsSuccess(false);
    setError(null);
  };

  const handleNavigation = (direction: "next" | "previous") => {
    setCurrentComponent(currentComponent + (direction === "next" ? 1 : -1));
    setError(null);
    setIsSuccess(false);
    setName("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 flex-start items-start w-96">
      <p className="text-lg font-bold">{currentComponentName}</p>
      <NameField
        value={name}
        onChange={handleNameChange}
        error={error}
        currentComponent={currentComponent}
      />
      <Component
        onClick={onSubmit}
        loading={loading}
        disabled={!name.length || isSuccess || loading || !!error}
        isSuccess={isSuccess}
      />
      <div className="flex gap-4 pt-8">
        <NavigationButton
          disabled={!canPrevious}
          onClick={() => handleNavigation("previous")}
        >
          Previous
        </NavigationButton>
        <NavigationButton
          disabled={!canNext}
          onClick={() => handleNavigation("next")}
        >
          Next
        </NavigationButton>
      </div>
    </div>
  );
};

export default Page;
