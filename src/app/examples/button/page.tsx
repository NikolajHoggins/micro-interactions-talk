"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavigationButton from "./components/NavigationButton";
import updateUser from "./api/updateUser";
import NameField from "./components/NameField";
import useButtonComponent from "./hooks/useButtonComponent";

const initialAnimation = {
  opacity: 0,
  y: -20,
};
const animateAnimation = {
  opacity: 1,
  y: 0,
};
const exitAnimation = {
  opacity: 0,
  y: 20,
};

const AnimateStep = ({
  children,
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  id: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`animate-step-${id}`}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={{ duration: 0.12, delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Page = () => {
  const {
    currentComponent,
    setCurrentComponent,
    Component,
    currentComponentName,
    canNext,
    canPrevious,
  } = useButtonComponent();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isDisabled = !name.length || isSuccess || loading || !!error;

  const onSubmit = () => {
    setLoading(true);
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
      <div>
        <AnimateStep delay={0.15} id={`name-${currentComponentName}`}>
          <p className="text-lg font-bold">{currentComponentName}</p>
        </AnimateStep>
        <AnimateStep delay={0.075} id={`input-${currentComponentName}`}>
          <div className="w-full">
            <NameField
              value={name}
              onChange={handleNameChange}
              error={error}
              currentComponent={currentComponent}
            />
          </div>
        </AnimateStep>
      </div>
      <AnimateStep delay={0} id={`component-${currentComponentName}`}>
        <Component
          onClick={onSubmit}
          isLoading={loading}
          isDisabled={isDisabled}
          isSuccess={isSuccess}
        />
      </AnimateStep>
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
