import { useState } from "react";
import SectionHeader from "../atoms/SectionHeader";
import { Avatar } from "../molecules";
import { Canvas } from "@react-three/fiber";
import ContactForm from "../molecules/ContactForm";
import { ContactFormState } from "../../constants/types";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState<ContactFormState>("idle");

  return (
    <section
      className="max-w-[1200px] mx-auto px-[1rem] sm:px-[2rem] lg:px-[3rem] py-[10rem]  "
      id="contact_target"
    >
      <SectionHeader padLeft={0} text="REACH OUT" />
      <div className="flex items-stretch justify-center max-h-[80vh] ">
        <div className="md:w-[50%] w-full">
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            formError={formError}
            setFormError={setFormError}
            setFormState={setFormState}
          />
        </div>
        <div className="w-[50%] md:block hidden ">
          <Canvas
            camera={{ position: [0, 0, 4], fov: 35, far: 1000, near: 0.01 }}
          >
            <ambientLight intensity={3} />
            <group position={[0, 0, 0]}>
              <Avatar formState={formState} />
            </group>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
