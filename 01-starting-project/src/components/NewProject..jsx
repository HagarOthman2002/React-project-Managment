import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd ,onCancel }) {
  const modal= useRef()
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open()
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="OK">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalied Input</h2>
      <p className="text-stone-600 mb-4">Oops....looks Like you forgot to enter a value.</p>
      <p className="text-stone-600 mb-4">please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
          >
            save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} type="text" label="Title" />
        {/* if u write the prop it takes true by default (isTextArea) */}
        <Input ref={description} label="Description" isTextArea />
        <Input ref={dueDate} type="date" label="Due Date" />
      </div>
    </div>
    </>
  );
}
