import { createSlice } from "@reduxjs/toolkit";

interface IModalState {
    isOpen: boolean
}

const initialState: IModalState = {
    isOpen: false
}

const AuthModal = createSlice({
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

export const { openModal, closeModal } = AuthModal.actions

export default AuthModal.reducer