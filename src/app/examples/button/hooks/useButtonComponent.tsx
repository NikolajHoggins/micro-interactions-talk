import { useState } from "react";
import { componentList } from "../buttonHelpers";

const useButtonComponent = () => {
  const [currentComponent, setCurrentComponent] = useState<number>(0);

  const Component = Object.values(componentList)[currentComponent];
  const currentComponentName = Object.keys(componentList)[currentComponent];

  const canNext = currentComponent < Object.keys(componentList).length - 1;
  const canPrevious = currentComponent > 0;

  return {
    currentComponent,
    setCurrentComponent,
    Component,
    currentComponentName,
    canNext,
    canPrevious,
  };
};

export default useButtonComponent;
