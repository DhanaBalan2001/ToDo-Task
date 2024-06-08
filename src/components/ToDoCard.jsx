import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ToDoCard({ toDo, setToDo, name, setName, desc, setDesc, button, setButton, toDoid,getId }) {
  let handleDelete = (id) => {
    let i = findIndex(id);
    let dupTodo = [...toDo];
    dupTodo.splice(i, 1);
    setToDo(dupTodo);
  };
  let handleEdit = (id) => {
    getId(id);
    setButton(false)
    let i = findIndex(id);
    setName(toDo[i].name);
    setDesc(toDo[i].desc);
  };
  let handleStatusChange = (statusId, toDoId) => {
    let i = findIndex(toDoId);
    let dupTodo = [...toDo];
    dupTodo[i].status = statusId;
    setToDo(dupTodo);
  }
  let findIndex = (id) => {
    let index;
    for (let i = 0; i < toDo.length; i++) {
      if (id === toDo[i].id) {
        index = i;
        break;
      }
    }
    return index;
  };
  return (
    <>
      {toDo.map((e, i) => {
        return (
          <div key={i}>
            <Card style={{ width: "20rem", backgroundColor: "lightblue" }}>
              <Card.Body>
                <Card.Text>
                  <div>
                    <p>
                      Name: <span>{e.name}</span>
                    </p>
                    <p>
                      Description: <span>{e.desc}</span>
                    </p>
                  </div>
                  <Form.Label className="d-flex justify-content-start align-items-center">
                    Status: &nbsp; <b>{e.status}</b>
                    <Form.Select
                      style={{ width: "60%" }}
                      aria-label="Default select example"
                      defaultValue={e.status} onChange={(v) => { handleStatusChange(v.target.value,e.id) }}
                    >
                      <option value="1">Completed</option>
                      <option value="2">Not Completed</option>
                    </Form.Select>
                  </Form.Label>
                </Card.Text>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="success"
                    onClick={() => {
                      handleEdit(e.id);
                    }}
                  >
                    Edit
                  </Button>
                  &nbsp;
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(e.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default ToDoCard;