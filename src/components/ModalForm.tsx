import ReactDOM from "react-dom";

type Props = {
  open: boolean;
  children: JSX.Element;
  onClose: () => void;
  setTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  modalForm: {
    title: string;
    text: string;
  };
  resetForm: () => void;
};

export default function ModalForm({
  children,
  open,
  onClose,
  setTitle,
  setText,
  resetForm,
  modalForm,
}: Props) {
  if (!open) return null;

  const logForm = () => {
    console.log("**********\n" + modalForm.title);
    console.log(modalForm.text + "\n**********\n\n");
  };

  return ReactDOM.createPortal(
    <div>
      <>
        {/* Dark overlay */}
        <div
          className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-black
        bg-opacity-50"
        />

        {/* Modal */}
        <div
          className="flex flex-col border-black border-2 bg-white p-2 
        fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <button
            onClick={onClose}
            className="mr-2 ml-auto text-2xl hover:scale-110"
          >
            X
          </button>

          {/* Main section */}
          <section className="p-14 h-fit flex flex-col">
            <header className="text-xl">Form Title</header>
            {children}
            <p>This modal has z index of 50</p>

            <form className="flex flex-col gap-1 w-full p-5 h-full">
              <label>Title</label>
              <input
                value={modalForm.title}
                onChange={setTitle}
                type="text"
                className="border-black border"
              ></input>

              <label>Text</label>
              <textarea
                value={modalForm.text}
                onChange={setText}
                className="border-black border"
                rows={5}
              ></textarea>
            </form>

            {/* Buttons section */}
            <section className="flex justify-around">
              <button
                onClick={logForm}
                className="mx-3 border-black border px-2 py-1 hover:scale-110"
              >
                Log
              </button>
              <button
                onClick={resetForm}
                className="mx-3 border-black border px-2 py-1 hover:scale-110"
              >
                Reset
              </button>
            </section>
          </section>
        </div>
      </>
    </div>,
    document.getElementById("portal")!
  );
}
