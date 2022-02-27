import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AddTodo, DeleteTodoData, UpdateTodo } from "./actions/actions"

function Homepage() {
  const dispatch = useDispatch();
  const [editId, seteditId] = useState(null)
  const [editable, seteditable] = useState(false)
  const [editValue, seteditValue] = useState(null)
  const [addPostInput, setaddPostInput] = useState(false);
  const [inputPostValue, setinputPostValue] = useState("");
  let list = useSelector((state) => state.todoDataReducers.list)

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  const onEnd = (result) => {
    list = reorder(list, result.source.index, result.destination.index)
  }

  return (
    <div className='Homepage'>
      <h1 className='text-center mt-2' style={{ fontSize: "45px" }}><u><b>爪ㄚ ㄒㄖDㄖ ㄥ丨丂ㄒ</b></u></h1>
      <div className='container-lg'>
        <div className='row'>
          <div className='col-md-4 mt-5'>
            <div className="card" style={{ background: "#EBECF0" }}>
              <h4 className='text-center mt-1'><u>Todo List</u></h4>
              <div className="card" style={{ background: "#EBECF0", border: "0" }}>
                <div className="card-body p-0 m-2">
                  {
                    editable ?
                      <form onSubmit={(e) => e.preventDefault()}>
                        <textarea className="post_input" rows="2" cols="50" placeholder="Enter a title for this card" style={{ width: "100%" }} onChange={(e) => seteditValue(e.target.value)}>{editValue}</textarea>
                        <button type="submit" className="btn btn-primary add_post_btn" title="Edit Post" onClick={() => dispatch(UpdateTodo(editId, editValue), seteditId(null), seteditable(false), seteditValue(null))}>Edit Post</button>
                        <button type="button" className="btn btn-light" style={{ marginLeft: "10px" }} onClick={() => (seteditable(!editable), setinputPostValue(""), seteditValue(null), seteditId(null))}><i className="fa fa-times"></i></button>
                      </form>
                      :
                      <></>
                  }
                  <DragDropContext onDragEnd={onEnd}>
                    <Droppable droppableId="ListData">
                      {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          {list.map((elem, i) => {
                            return (
                              <div className="mt-2">
                                <Draggable key={elem.id} draggableId={elem.id} index={i}>
                                  {(provided) => (
                                    <ul className="list-group mb-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                      <li className="list-group-item" style={{ fontSize: '20px' }}>{elem.data}<span className='bg-danger' style={{ paddingTop: '2px', paddingBottom: '2px', paddingLeft: '4px', paddingRight: '4px', cursor: "pointer", marginLeft: "10px", marginRight: "10px" }} onClick={() => dispatch(DeleteTodoData(elem.id), seteditValue(null))}><i className="fa fa-trash"></i></span><span className='bg-warning' style={{ paddingTop: '2px', paddingBottom: '2px', paddingLeft: '4px', paddingRight: '4px', cursor: "pointer" }} onClick={() => (seteditValue(elem.data), seteditId(elem.id), seteditable(!editable))}><i className="fa fa-pencil"></i></span></li>
                                    </ul>
                                  )}
                                </Draggable>
                              </div>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                  {
                    addPostInput ?
                      <form onSubmit={(e) => e.preventDefault()}>
                        <textarea className="post_input" rows="2" cols="50" placeholder="Enter a title for this card" style={{ width: "100%" }} onChange={(e) => setinputPostValue(e.target.value)} value={inputPostValue}></textarea>
                        <button type="submit" className="btn btn-primary add_post_btn" title="Add Post" onClick={() => dispatch(AddTodo(inputPostValue), setaddPostInput(!addPostInput))}>Add Post</button>
                        <button type="button" className="btn btn-light" style={{ marginLeft: "10px" }} onClick={() => setaddPostInput(!addPostInput)}><i className="fa fa-times"></i></button>
                      </form>
                      :
                      <button type="button" className="btn btn-primary w-100" title="Add Post" onClick={() => (setaddPostInput(!addPostInput), setinputPostValue(""), seteditValue(null), seteditId(null))}><i className="fa fa-plus"></i> Add a card</button>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 mt-5'>
            <div className="card" style={{ background: "#EBECF0" }}>
              <h4 className='text-center mt-1'><u>Pending</u></h4>
              <div className="card" style={{ background: "#EBECF0", border: "0" }}>
                <div className="card-body p-0 m-2">
                  <ul className="list-group mb-2">
                    <li className="list-group-item">An item</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 mt-5'>
            <div className="card" style={{ background: "#EBECF0" }}>
              <h4 className='text-center mt-1'><u>Complete</u></h4>
              <div className="card" style={{ background: "#EBECF0", border: "0" }}>
                <div className="card-body p-0 m-2">
                  <ul className="list-group mb-2">
                    <li className="list-group-item">An item</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

