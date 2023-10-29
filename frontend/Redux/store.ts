import { configureStore } from '@reduxjs/toolkit'
import AuthModalReducer from './features/AuthModal/authModal'

export const store = configureStore({
    reducer: {
        authModal: AuthModalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch