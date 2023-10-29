import { createSlice } from "@reduxjs/toolkit";

interface IModalState {
    isOpen: boolean
}

const initialState: IModalState = {
    isOpen: false
}

const authModal = createSlice({
    name: "AuthModal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        }
    }
})

export const { openModal, closeModal } = authModal.actions

export default authModal.reducer