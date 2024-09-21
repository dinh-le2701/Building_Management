import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from '../pages/admin/Admin'
import User from '../pages/user/User'


const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin' element={<Admin />} />
                        <Route path='/admin/employees' />
                        <Route path='/admin/services' />
                        <Route path='/admin/employee' />
                            <Route path='/admin/apartments' />
                        <Route path='/admin/residents' />
                        <Route path='/admin/verhicles' />
                    <Route path='/user' element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router