import React, { useState } from "react";
import "./DataTable.css";
import Popup from "../Popup/Popup";
import axios from "axios";
import { Button } from "@mui/material";

const DataTable = () => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState([]);

  // modal open function
  const handleOpen = () => setOpen(true);

  // modal close function
  const handleClose = () => setOpen(false);

  // get data from database
  useState(() => {
    axios
      .get("http://localhost:7000/data")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // handle delete
  const deleteRowData = (id) => {
    fetch(`http://localhost:7000/delete/:${id}`);
  };

  return (
    <React.Fragment>
      <div className="table">
        <div className="card">
          <div className="table-title">
            <h2>REDPOSITIVE SERVICES</h2>
          </div>
          <div className="button-container">
            <button className="danger" title="Send In Email">
              SEND
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
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {data.map((tableRow, index) => (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{index}</td>
                    <td></td>
                    <td>{tableRow.name}</td>
                    <td>{tableRow.email}</td>
                    <td>{tableRow.hobbies}</td>
                    <td>
                      {
                        <button
                          onClick={() => deleteRowData(tableRow._id)}
                          className="rowButton"
                        >
                          Delete
                        </button>
                      }
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>2</td>
                  <td>This is Item number 1-2</td>
                  <td>This is Item number 2-2</td>
                  <td>This is Item number 3-2</td>
                  <td>This is Item number 4-2</td>
                  <td>This is Item number 5-2</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>3</td>
                  <td>This is Item number 1-3</td>
                  <td>This is Item number 2-3</td>
                  <td>This is Item number 3-3</td>
                  <td>This is Item number 4-3</td>
                  <td>This is Item number 5-3</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>4</td>
                  <td>This is Item number 1-4</td>
                  <td>This is Item number 2-4</td>
                  <td>This is Item number 3-4</td>
                  <td>This is Item number 4-4</td>
                  <td>This is Item number 5-4</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>5</td>
                  <td>This is Item number 1-5</td>
                  <td>This is Item number 2-5</td>
                  <td>This is Item number 3-5</td>
                  <td>This is Item number 4-5</td>
                  <td>This is Item number 5-5</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>6</td>
                  <td>This is Item number 1-6</td>
                  <td>This is Item number 2-6</td>
                  <td>This is Item number 3-6</td>
                  <td>This is Item number 4-6</td>
                  <td>This is Item number 5-6</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>7</td>
                  <td>This is Item number 1-7</td>
                  <td>This is Item number 2-7</td>
                  <td>This is Item number 3-7</td>
                  <td>This is Item number 4-7</td>
                  <td>This is Item number 5-7</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>8</td>
                  <td>This is Item number 1-8</td>
                  <td>This is Item number 2-8</td>
                  <td>This is Item number 3-8</td>
                  <td>This is Item number 4-8</td>
                  <td>This is Item number 5-8</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>9</td>
                  <td>This is Item number 1-9</td>
                  <td>This is Item number 2-9</td>
                  <td>This is Item number 3-9</td>
                  <td>This is Item number 4-9</td>
                  <td>This is Item number 5-9</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>10</td>
                  <td>This is Item number 1-10</td>
                  <td>This is Item number 2-10</td>
                  <td>This is Item number 3-10</td>
                  <td>This is Item number 4-10</td>
                  <td>This is Item number 5-10</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>11</td>
                  <td>This is Item number 1-11</td>
                  <td>This is Item number 2-11</td>
                  <td>This is Item number 3-11</td>
                  <td>This is Item number 4-11</td>
                  <td>This is Item number 5-11</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>12</td>
                  <td>This is Item number 1-12</td>
                  <td>This is Item number 2-12</td>
                  <td>This is Item number 3-12</td>
                  <td>This is Item number 4-12</td>
                  <td>This is Item number 5-12</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>13</td>
                  <td>This is Item number 1-13</td>
                  <td>This is Item number 2-13</td>
                  <td>This is Item number 3-13</td>
                  <td>This is Item number 4-13</td>
                  <td>This is Item number 5-13</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>14</td>
                  <td>This is Item number 1-14</td>
                  <td>This is Item number 2-14</td>
                  <td>This is Item number 3-14</td>
                  <td>This is Item number 4-14</td>
                  <td>This is Item number 5-14</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>15</td>
                  <td>This is Item number 1-15</td>
                  <td>This is Item number 2-15</td>
                  <td>This is Item number 3-15</td>
                  <td>This is Item number 4-15</td>
                  <td>This is Item number 5-15</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>16</td>
                  <td>This is Item number 1-16</td>
                  <td>This is Item number 2-16</td>
                  <td>This is Item number 3-16</td>
                  <td>This is Item number 4-16</td>
                  <td>This is Item number 5-16</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>17</td>
                  <td>This is Item number 1-17</td>
                  <td>This is Item number 2-17</td>
                  <td>This is Item number 3-17</td>
                  <td>This is Item number 4-17</td>
                  <td>This is Item number 5-17</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>18</td>
                  <td>This is Item number 1-18</td>
                  <td>This is Item number 2-18</td>
                  <td>This is Item number 3-18</td>
                  <td>This is Item number 4-18</td>
                  <td>This is Item number 5-18</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>19</td>
                  <td>This is Item number 1-19</td>
                  <td>This is Item number 2-19</td>
                  <td>This is Item number 3-19</td>
                  <td>This is Item number 4-19</td>
                  <td>This is Item number 5-19</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>20</td>
                  <td>This is Item number 1-20</td>
                  <td>This is Item number 2-20</td>
                  <td>This is Item number 3-20</td>
                  <td>This is Item number 4-20</td>
                  <td>This is Item number 5-20</td>
                </tr> */}
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
