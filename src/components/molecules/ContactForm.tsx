import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { ContactFormState, ContactFormType } from "../../constants/types";
import { HoverButton } from "../atoms";
import { formSubmit } from "../../services/apis";

interface IProps {
  formData: ContactFormType;
  setFormData: Dispatch<SetStateAction<ContactFormType>>;
  formError: ContactFormType;
  setFormError: Dispatch<SetStateAction<ContactFormType>>;
  setFormState: Dispatch<SetStateAction<ContactFormState>>;
}

const ContactForm = ({
  formData,
  setFormData,
  formError,
  setFormError,
  setFormState,
}: IProps) => {
  const [loadingState, setLoadingState] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFormError((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
    setFormState("text");
  };

  const handleBlur = () => {
    setFormState("idle");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingState(true);
    let error = 0;

    Object.entries(formData).forEach(([key, value]) => {
      if (value === "") {
        error++;
        setFormError((prev) => ({
          ...prev,
          [key]: `Please fill in the ${key} field`,
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          [key]: "",
        }));
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (error > 0) {
      setFormState("fail");
      setLoadingState(false);
    } else if (!emailRegex.test(formData.email)) {
      setFormState("fail");
      setLoadingState(false);
      setFormError((prev) => ({
        ...prev,
        email: "Please enter a valid email",
      }));
    } else {
      try {
        await formSubmit(formData);
        setLoadingState(false);
      } catch (error) {
        console.log(error);
        setLoadingState(false);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-[2rem] mb-[4rem] ">
        <div className="flex-1">
          <label
            htmlFor="name"
            className="font-roboto text-[0.9rem] font-bold "
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            className="contact_input "
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-[red] text-[0.7rem] pt-1 ">
            {formError.name || ""}
          </p>
        </div>
        <div className="flex-1">
          <label
            htmlFor="email"
            className="font-roboto text-[0.9rem] font-bold "
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            className="contact_input"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="text-[red] text-[0.7rem] pt-1 ">
            {formError.email || ""}
          </p>
        </div>
      </div>
      <div className="mt-[2rem] w-full ">
        <label
          htmlFor="message"
          className="font-roboto text-[0.9rem] font-bold "
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="contact_input"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        <p className="text-[red] text-[0.7rem] pt-1 ">
          {formError.message || ""}
        </p>
      </div>
      <div className="mt-[4rem] ">
        <HoverButton className="rounded-none" isLoading={loadingState}>
          <div className="flex items-center justify-center gap-[1rem] ">
            <p className="font-roboto text-[1.2rem]">Shoot</p>
            <img src="/right.png" alt="" className="w-[20px]" />
          </div>
        </HoverButton>
      </div>
    </form>
  );
};

export default ContactForm;
