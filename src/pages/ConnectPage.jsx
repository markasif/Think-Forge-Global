import ConnectSection from "@/Components/Connect/Connect";
import ContactForm from "@/Components/Connect/ConnectForm";
import React from "react";

function ConnectPage() {
  return (
    <div className=" bg-black pt-20 pb-20 px-10 ">
        <ConnectSection variant="primary" />
        <ContactForm />
    </div>
  );
}

export default ConnectPage;