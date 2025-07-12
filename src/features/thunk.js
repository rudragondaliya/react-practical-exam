import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = 'http://localhost:3000/students'

export const fetchData = createAsyncThunk("student/fetchData",async()=>{
    const res = await axios.get(api);
    const data = res.data;
    return data;
})

export const addData = createAsyncThunk("student/addData",async(student)=>{
    const res = await axios.post(`${api}`,student);
    const data = res.data;
    return data;
})

export const updateData = createAsyncThunk(
  "student/updateData",
  async (student) => {
    const res = await axios.put(`${api}/${student.id}`, student); // <-- pass the student data here
    const data = res.data;
    return data;
  }
);


export const deleteData = createAsyncThunk("student/deleteData",async(id)=>{
    const res = await axios.delete(`${api}/${id}`);
    return id;
})

