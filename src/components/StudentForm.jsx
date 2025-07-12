
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../features/thunk";

const StudentForm = () => {
  const dispatch = useDispatch();
  const selectedStudent = useSelector((state) => state.students.selectedStudent);

  const [studentData, setStudentData] = useState({});

  
  useEffect(() => {
    if (selectedStudent && selectedStudent.id) {
      setStudentData(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentData.id) {
      dispatch(updateData(studentData));
    } else {
      dispatch(addData(studentData));
    }

    setStudentData({});
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form method="post" className="mt-4" onSubmit={handleSubmit}>
              <h1 className="text-start text-primary">Admission Form</h1>
              <div className="mb-3 mt-4">
                <label htmlFor="grid" className="form-label">
                  GR.ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="grid"
                  min={1}
                  max={10000}
                  name="grid"
                  value={studentData.grid || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={studentData.username || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={studentData.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  max={18}
                  min={6}
                  name="age"
                  value={studentData.age || ""}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                {studentData.id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;

