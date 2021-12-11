import React, { useState } from "react";
import "./DataTable.css";
import Popup from "../Popup/Popup";

const DataTable = () => {
  const [open, setOpen] = useState(false);

  // modal open function
  const handleOpen = () => setOpen(true);

  // modal close function
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="table">
        <div className="card">
          <div className="table-title">
            <h2>REDPOSITIVE SERVICES</h2>
          </div>
          <div className="button-container">
            {/* <span>These buttons aren't working ></span> */}
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
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>1</td>
                  <td>This is Item number 1-1</td>
                  <td>This is Item number 2-1</td>
                  <td>This is Item number 3-1</td>
                  <td>This is Item number 4-1</td>
                  <td>This is Item number 5-1</td>
                </tr>
                <tr>
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
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              {/* <label className="disabled" for="table_radio_-1">
              &laquo; Previous
            </label>
            <label className="active" for="table_radio_0" id="table_pager_0">
              1
            </label>
            <label for="table_radio_1" id="table_pager_1">
              2
            </label>
            <label for="table_radio_2" id="table_pager_2">
              3
            </label>
            <label for="table_radio_3" id="table_pager_3">
              4
            </label>
            <label for="table_radio_4" id="table_pager_4">
              5
            </label>
            <label for="table_radio_1">Next &raquo;</label> */}
            </div>
            <input
              className="table-radio"
              type="radio"
              name="table_radio"
              id="table_radio_1"
            />
            <div className="table-display">Showing 21 to 40 of 95 items</div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>No</th>
                  <th>FIRST HEADER</th>
                  <th>SECOND HEADER</th>
                  <th>THIRD HEADER</th>
                  <th>FOURTH HEADER</th>
                  <th>FIFTH HEADER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>21</td>
                  <td>This is Item number 1-21</td>
                  <td>This is Item number 2-21</td>
                  <td>This is Item number 3-21</td>
                  <td>This is Item number 4-21</td>
                  <td>This is Item number 5-21</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>22</td>
                  <td>This is Item number 1-22</td>
                  <td>This is Item number 2-22</td>
                  <td>This is Item number 3-22</td>
                  <td>This is Item number 4-22</td>
                  <td>This is Item number 5-22</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>23</td>
                  <td>This is Item number 1-23</td>
                  <td>This is Item number 2-23</td>
                  <td>This is Item number 3-23</td>
                  <td>This is Item number 4-23</td>
                  <td>This is Item number 5-23</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>24</td>
                  <td>This is Item number 1-24</td>
                  <td>This is Item number 2-24</td>
                  <td>This is Item number 3-24</td>
                  <td>This is Item number 4-24</td>
                  <td>This is Item number 5-24</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>25</td>
                  <td>This is Item number 1-25</td>
                  <td>This is Item number 2-25</td>
                  <td>This is Item number 3-25</td>
                  <td>This is Item number 4-25</td>
                  <td>This is Item number 5-25</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>26</td>
                  <td>This is Item number 1-26</td>
                  <td>This is Item number 2-26</td>
                  <td>This is Item number 3-26</td>
                  <td>This is Item number 4-26</td>
                  <td>This is Item number 5-26</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>27</td>
                  <td>This is Item number 1-27</td>
                  <td>This is Item number 2-27</td>
                  <td>This is Item number 3-27</td>
                  <td>This is Item number 4-27</td>
                  <td>This is Item number 5-27</td>
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              <label for="table_radio_3">&laquo; Previous</label>
              <label for="table_radio_0" id="table_pager_0">
                1
              </label>
              <label for="table_radio_1" id="table_pager_1">
                2
              </label>
              <label for="table_radio_2" id="table_pager_2">
                3
              </label>
              <label for="table_radio_3" id="table_pager_3">
                4
              </label>
              <label className="active" for="table_radio_4" id="table_pager_4">
                5
              </label>
              <label className="disabled" for="table_radio_5">
                Next &raquo;
              </label>
            </div>
          </div>
        </div>
      </div>
      <Popup open={open} handleClose={handleClose} />
    </>
  );
};

export default DataTable;
