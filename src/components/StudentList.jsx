import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, fetchData } from '../features/thunk';
// import { selectedStudent } from '../features/studentSlice';
import { setSelectedStudent } from '../features/studentSlice';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const { students } = useSelector(state => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleEditClick = (student) => {
    dispatch(setSelectedStudent(student));
    navigate("/"); 
  };

  const filteredStudents = students.filter(
    (val) =>
      val.username?.toLowerCase().includes(search.toLowerCase()) ||
      val.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Searching...."
              className="form-control"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>GR.ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((val, idx) => {
                  const { grid, username, email, age, id } = val;
                  return (
                    <tr key={id}>
                      <td>{idx + 1}</td>
                      <td>{grid}</td>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{age}</td>
                      <td>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => dispatch(deleteData(id))}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleEditClick(val)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;

