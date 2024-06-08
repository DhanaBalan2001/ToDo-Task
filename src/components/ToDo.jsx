import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ToDoCard from "./ToDoCard";

function ToDo() {
  let [buttonState, setButton] = useState(true);
  let [id, getId] = useState("");
  let [initialValue, setValue] = useState([
    {
      id: 1,
      name: "Task 01",
      desc: "Add description here for the fourth task",
      status: 2,
    },
    {
      id: 2,
      name: "Task 02",
      desc: "Add description here for the fourth task",
      status: 2,
    },
    {
      id: 3,
      name: "Task 03",
      desc: "Add description here for the fourth task",
      status: 2,
    },
    {
      id: 4,
      name: "Task 04",
      desc: "Add description here for the fourth task",
      status: 2,
    },
    
  ]);
  let [todo, setToDo] = useState(initialValue);
  let [name, setName] = useState("");
  let [desc, setDesc] = useState("");

  let handleAddToDo = () => {
    if (buttonState) {
      let id = initialValue.length
        ? initialValue[initialValue.length - 1].id + 1
        : 1;
      let status = 2;
      let dupTodo = [...initialValue];
      dupTodo.push({
        id,
        name,
        desc,
        status,
      });
      setValue(dupTodo);
      setToDo(dupTodo);
    } else {
      let ind;
      for (let i = 0; i < initialValue.length; i++) {
        if (id === initialValue[i].id) {
          ind = i;
          break;
        }
      }
      let status = 2;
      let dupTodo = [...initialValue];
      dupTodo.splice(ind, 1, {
        id,
        name,
        desc,
        status,
      });
      setValue(dupTodo);
      setToDo(dupTodo);
      setButton(!buttonState);
    }

    setName("");
    setDesc("");
  };
  let handleChange = (statusId) => {
    let duptodo = [...initialValue];
    console.log(statusId);
    let toDoArray;
    if (statusId != 3) {
      toDoArray = duptodo.filter((e) => e.status == statusId);
    } else {
      toDoArray = duptodo;
    }
    console.log(toDoArray);
    // setValue(toDoArray);
    setToDo(toDoArray);
  };
  return (
    <>
      <h1 className="d-flex justify-content-center" style={{ color: "black" }}>
        ToDo List
      </h1>
      <div className="d-flex justify-content-center">
        <div className="w-50 d-flex p-5">
          <Form.Control
            type="text"
            placeholder="Todo Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          &nbsp;
          <Form.Control
            type="text"
            placeholder="Todo Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          &nbsp;
          <Button
            variant="success"
            className="w-25"
            onClick={() => {
              handleAddToDo();
            }}
          >
            {buttonState ? "Add ToDo" : "Update ToDo"}
          </Button>
        </div>
      </div>
      <div>
        <div className="w-70 d-flex justify-content-around">
          <b>Existing ToDo List:</b>
          <div className="w-40">
            <Form.Label className="d-flex justify-content-start align-items-center">
              <b className="w-100">Filter: </b>&nbsp;
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => handleChange(e.target.value)}
              >
                <option value="1">Completed</option>
                <option value="2">Not Completed</option>
                <option value="3">All</option>
              </Form.Select>
            </Form.Label>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ rowGap: "20px", columnGap: "20px" }}
      >
        <ToDoCard
          toDo={todo}
          setToDo={setToDo}
          name={name}
          setName={setName}
          desc={desc}
          setDesc={setDesc}
          buttonState={buttonState}
          setButton={setButton}
          toDoid={id}
          getId={getId}
        />
      </div>
    </>
  );
}

export default ToDo;