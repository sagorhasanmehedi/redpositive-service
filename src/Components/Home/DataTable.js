import React, { useEffect, useRef, useState } from "react";
import "./DataTable.css";
import Popup from "../Popup/Popup";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import swal from "sweetalert";

const DataTable = () => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState([]);
  const [isDelete, setisDelete] = useState(false);
  const [checkBoxData, setcheckBoxData] = useState([]);

  // modal open function
  const handleOpen = () => setOpen(true);

  // modal close function
  const handleClose = () => setOpen(false);

  // get data from database

  useEffect(() => {
    axios
      .get("https://pacific-spire-20501.herokuapp.com/data")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isDelete]);

  // handle delete
  const deleteRowData = (id) => {
    const procid = window.confirm("Are You Sure Want To Delete");
    if (procid) {
      fetch(`https://pacific-spire-20501.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal({
              icon: "success",
            });
            setisDelete(!isDelete);
          }
        });
    }
  };

  // get checkbox data
  const handlecheckBox = (e, data) => {
    if (e.target.checked) {
      const stateData = [...checkBoxData, data];
      setcheckBoxData(stateData);
    }
  };

  // handle send email
  const sendEmail = () => {
    axios
      .post("https://pacific-spire-20501.herokuapp.com/email", { checkBoxData })
      .then((data) => {
        console.log(data.data);
        if (data.data === "Email send") {
          swal({
            icon: "success",
          });
        } else {
          swal({
            icon: "error",
            title: "Oops... Cannot Send Mail",
            text: `${data.data}`,
            footer: `<a href="">${data.data}</a>`,
          });
        }
      });
  };

  return (
    <React.Fragment>
      <div className="table">
        <div className="card">
          <div className="table-title">
            <h2>REDPOSITIVE SERVICES</h2>
          </div>
          <div className="button-container">
            <button
              onClick={sendEmail}
              className="danger"
              title="Send In Email"
            >
              SEND
              <EmailIcon sx={{ fontSize: "20px", ml: "5px", pb: "1px" }} />
            </button>
            <button
              onClick={handleOpen}
              className="primary"
              title="Add New Data"
            >
              ADD NEW
            </button>
          </div>
          <div className="table-concept">
            <input
              className="table-radio"
              type="radio"
              name="table_radio"
              id="table_radio_0"
              checked="checked"
            />
            <div className="table-display"></div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Id</th>
                  <th>NAME</th>
                  <th>PHONE NUMBER</th>
                  <th>EMAIL</th>
                  <th>HOBBIES</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tableRow, index) => (
                  <tr key={tableRow._id}>
                    <td>
                      <input
                        onChange={(e) => handlecheckBox(e, tableRow)}
                        type="checkbox"
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{tableRow.name}</td>
                    <td>{tableRow.phoneNumber}</td>
                    <td>{tableRow.email}</td>
                    <td>{tableRow.hobbies}</td>
                    <td>
                      {" "}
                      <IconButton
                        onClick={() => deleteRowData(tableRow._id)}
                        className="rowButton"
                        aria-label="share"
                        sx={{ margin: 0, padding: 0 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Popup open={open} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default DataTable;
