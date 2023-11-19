import { useState } from "react";

export const useForm = ({ defaultValues, onSubmit, validate }) => {
  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (validate) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validate(name, value),
      }));
    }
  };

  const handleSubmit = () => {
    if (validate) {
      const validationErrors = Object.entries(formData).reduce(
        (acc, [name, value]) => ({
          ...acc,
          [name]: validate(name, value),
        }),
        {}
      );
      setErrors(validationErrors);

      if (Object.values(validationErrors).some((error) => error)) {
        return;
      }
    }

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const reset = () => {
    setFormData(defaultValues);
    setErrors({});
  };

  return { handleChange, handleSubmit, reset, formData, errors };
};
