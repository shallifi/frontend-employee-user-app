import { useState } from "react";

// added custom hook for any field that captures form data

export function useForm(initialState ) {
    const [formData, setFormData] = useState(initialState)


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
}
    return {
      formData,
      setFormData,
      handleChange
}
}

export default useForm;