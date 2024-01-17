import { useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalForm, setModalForm] = useState({
    title: "",
    text: "",
  });

  function resetForm() {
    setModalForm({ title: "", text: "" });
  }

  return (
    <>
      <section className=" w-full flex flex-col items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="z-10 border-black border-2 p-2 my-4 hover:scale-110"
        >
          Open modal
        </button>

        {/* {modalForm.title && <p>Title: {modalForm.title}</p>}
        {!modalForm.title && <p>Title: There is no title </p>} */}
        {modalForm.title ? (
          <p>Title: {modalForm.title}</p>
        ) : (
          <p>Title: There is no title </p>
        )}
        {modalForm.text && modalForm.title && <p>Text: {modalForm.text}</p>}

        <ModalForm
          open={isOpen}
          modalForm={modalForm}
          onClose={() => setIsOpen(false)}
          setTitle={(e: React.ChangeEvent<HTMLInputElement>) =>
            setModalForm({ ...modalForm, title: e.target.value })
          }
          setText={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setModalForm({ ...modalForm, text: e.target.value })
          }
          resetForm={resetForm}
        >
          <>
            <p className="my-2 text-center">
              This is a paragraph passed as children prop
            </p>
          </>
        </ModalForm>

        <header className="z-50 p-2 my-4 bg-red-600 text-xl">
          This Header of index 50
        </header>
      </section>
    </>
  );
}

export default App;
