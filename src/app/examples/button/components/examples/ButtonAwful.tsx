import updateUser from "../../api/updateUser";
import NameField from "../NameField";

// Started out named ButtonSimple, but actually it's awful
const ButtonAwful = () => {
  const onSubmit = () => {
    updateUser().then(() => {
      console.log("Data submitted");
    });
  };

  return (
    <div className="flex flex-col gap-4 items-start justify-start">
      <p>ButtonAwful</p>
      <NameField />
      <button
        className="bg-blue-500 text-white p-2 rounded cursor-default"
        onClick={onSubmit}
      >
        Button
      </button>
    </div>
  );
};

export default ButtonAwful;
