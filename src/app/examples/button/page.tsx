"use client";

import { useState } from "react";
import ButtonAwful from "./components/examples/ButtonAwful";
import NavigationButton from "./components/NavigationButton";

const componentList = [ButtonAwful];
const Page = () => {
  const [currentComponent, setCurrentComponent] = useState<number>(0);

  const Component = componentList[currentComponent];

  const canNext = currentComponent < componentList.length - 1;
  const canPrevious = currentComponent > 0;

  return (
    <div className="flex flex-col gap-4 flex-start items-start">
      <Component />
      <div className="flex gap-4 pt-8">
        <NavigationButton
          disabled={!canPrevious}
          onClick={() => setCurrentComponent(currentComponent - 1)}
        >
          Previous
        </NavigationButton>
        <NavigationButton
          disabled={!canNext}
          onClick={() => setCurrentComponent(currentComponent + 1)}
        >
          Next
        </NavigationButton>
      </div>
    </div>
  );
};

export default Page;
