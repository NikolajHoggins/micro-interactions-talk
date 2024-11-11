import ButtonAwful from "./components/examples/ButtonAwful";
import ButtonGood from "./components/examples/ButtonGood";

export type ButtonComponent = React.FC<{
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
  isSuccess: boolean;
}>;

export const componentList: Record<string, ButtonComponent> = {
  ButtonAwful: ButtonAwful,
  ButtonGood: ButtonGood,
};
