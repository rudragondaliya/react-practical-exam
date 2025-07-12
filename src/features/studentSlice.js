import { createSlice } from "@reduxjs/toolkit";
import { addData, deleteData, fetchData, updateData } from "./thunk";

const initialState = {
    students:[],
    loading:false,
    error:false,
    selectedStudent:null,
}

const studentSlice = createSlice({
    name:"students",
    initialState,
    reducers: {
    //     setStudents: (state, action) => {
    //   state.students = action.payload;
    // },
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
  },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false;
            state.students = action.payload;
        })

        builder.addCase(fetchData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(addData.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })

        builder.addCase(addData.fulfilled,(state,action)=>{
            state.loading = false;
            state.students.push(action.payload)
        })

        builder.addCase(addData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(deleteData.pending,(state)=>{
            state.loading = true;
            state.error = false
        })

        builder.addCase(deleteData.fulfilled,(state,action)=>{
            state.loading = false;
            state.students = state.students.filter((s)=> s.id !== action.payload)
        })

        builder.addCase(deleteData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(updateData.pending,(state)=>{
            state.loading = true;
            state.error = false;
        })


       builder.addCase(updateData.fulfilled, (state, action) => {
        const updatedStudent = action.payload;
        const index = state.students.findIndex((s) => s.id === updatedStudent.id);
        if (index !== -1) {
            state.students[index] = updatedStudent;
        }
        })


        builder.addCase(updateData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })

    }
})

export const {setSelectedStudent} = studentSlice.actions
export default studentSlice.reducer;