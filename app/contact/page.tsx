import Form from "../ui/contact-form";

export const metadata = {
    title: "Contact"
  }

  export default function Projects() {
    return (
      <div className="w-3/4 mx-auto flex flex-col gap-10 pb-5">
        <Form />
      </div>
    );
  }