// import React from 'react'
// import { SideBar } from '../../component/sidebar/SideBar'
// import { Row, Col } from 'react-bootstrap'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Employee from '../../component/user-component/Employee'

// const Admin = () => {
//   return (
//     <div className='admin-page'>
//       <h2>This is Admin Pages</h2>
//       <Row className='w-100'>
//         <Col xs lg="2" className='p-0'>
//           <SideBar />
//         </Col>
//         <Col className='p-0'>

//           <BrowserRouter>
//             <Routes>
//               <Route path='/' />
//               <Route path='/employee' element={<Employee/>}/>
//               <Route path='/role' />
//               <Route path='/project' />
//               <Route path='/task' />
//               <Route path='/blank' />
//               <Route path='/error' />
//               <Route path='/profile' />
//             </Routes>
//           </BrowserRouter>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default Admin