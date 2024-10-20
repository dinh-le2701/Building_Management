import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ element: Component, ...rest }) => {
    const token = localStorage.getItem('token'); // Kiểm tra token trong localStorage
  
    return (
      <Route
        {...rest}
        element={token ? <Component {...rest} /> : <Redirect to="/signin" />} // Redirect đến trang đăng nhập nếu không có token
      />
    );
  };
  