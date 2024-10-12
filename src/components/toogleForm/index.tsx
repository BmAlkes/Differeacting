import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateActive } from "../../api/ClientApi";
import { toast } from "react-toastify";

const ToggleSwitch = ({
  name,
  active,
  clientId,
}: {
  name: string;
  active: boolean;
  clientId: string;
}) => {
  const [isChecked, setIsChecked] = useState(active);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
    handleUpdateState();
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateActive,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });
  const handleUpdateState = () => {
    const formData = { active: !isChecked };
    console.log(formData);
    mutate({ clientId, formData });
  };
  return (
    <>
      <label className="switch" htmlFor={name}>
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={name}
          id={name}
          value={isChecked.toString()}
          checked={isChecked}
          onChange={()=>handleOnChange()}
        />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
