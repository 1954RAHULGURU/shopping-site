import React from "react";
import { Modal } from "antd";
import { useState } from "react";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AdsClickIcon from '@mui/icons-material/AdsClick';
// import "./todo.css";

const Todo = () => {
  const [details, setDetails] = useState("");
  const [addedData, setAddedData] = useState([]);

  // add func
  const addData = (details) => {
    setAddedData([...addedData, details]);
  };

  // delete func
  const deleteData = (index) => {
    let arr = [];

    for (let i in addedData) {
      if (Number(i) !== index) arr.push(addedData[i]);
    }

    setAddedData(arr);
  };


  // ----------------------------------edit func--------------------------------------------

  let [isModalOpen, setIsModalOpen] = useState(false);
  let [selectedUser, setSelectedUser] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState([]);

  const showModal = (data, index) => {
    setIsModalOpen(true);
    setSelectedIndex(index);
    setSelectedUser(data);
  };

  const handleOk = () => {
    let arr = [];
    for (let i in addedData) {
      if (i == selectedIndex) {
        arr.push(selectedUser);
      } else {
        arr.push(addedData[i]);
      }
    }
    setAddedData(arr);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // ------------------------------edit func end-------------------------------

  return (
    <>
    <div className="root">
    <div className="heading1"><h1>Todo <AdsClickIcon/></h1></div>

    <div className="main">

      <div className="inputdiv">
        <input onChange={(e) => setDetails(e.target.value)}></input>
        <button className="addbtn" onClick={() => { addData(details)}}>Add</button>
        
      </div>

      <div>
        {addedData.map((data, index) => {
          return (
            <div className="mapitem">
                <button className="deletebtn" onClick={() => deleteData(index)}> Delete</button>
                <button className="editbtn" onClick={() => showModal(data, index)}> Edit</button>
                <div className="mui">
                <DoneOutlineIcon/>
                </div>

                <div className="contentdata"><h2>{data}</h2></div>

            </div>

          );
        })}
      </div>


      {/*------------------------- edit based------------------------------ */}
      <Modal
        title="Edit"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <input value={selectedUser} onChange={(event) => setSelectedUser(event.target.value)}/>
        </div>
      </Modal>
    </div>
    </div>
    </>
  );
};

export default Todo;
