import ProductDetails from "./User/Componet/ProductDetail";
import CartPage from "./User/Pages/CartPage";
import Home from "./User/Pages/Home";
import HomePage from "./User/Pages/HomeBody";
import LoginPage from "./User/Pages/LoginPage";
import NotFoundPage from "./User/Pages/NotFoundPage";
import ProductPage from "./User/Pages/ProductPage";
import RegistrationPage from "./User/Pages/RegistrationPage";
import PaymentSection from "./User/Pages/PaymentPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactPage from "./User/Pages/ContactPage";
import ProtectedRoute from "./User/Componet/protectedRoute";
import { ToastContainer } from "react-toastify";
import { AdminSidebar } from "./Admin/Pages/AdminSideBar";
import UsersLists from "./Admin/Pages/UsersLists";
import {AdminHomePage} from "./Admin/Pages/AdminHomePage";
import AdminAddProduct from "./Admin/Pages/AdminAddProduct";
import AdminProductUpdate from "./Admin/Components/AdminProductUpdate";
import AdminUserCart from "./Admin/Components/AdminUserCart";
import AdminOrderList from "./Admin/Components/AdminOrderList";
import LoginProtect from "./User/Componet/LoginProtect";
import AdminProtect from "./User/Componet/AdminProtect";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Users Routes */}

          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
            <Route
              path="products"
              element={<ProtectedRoute element={<ProductPage />} />}
            />
            <Route path="Contact" element={<ContactPage />} />
            <Route
              path="cart"
              element={<ProtectedRoute element={<CartPage />} />}
            />
            <Route
              path="products/:id" 
              element={<ProtectedRoute element={<ProductDetails />} />}
            />
            <Route
              path="paymentsection"
              element={<ProtectedRoute element={<PaymentSection />} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="login" element={<LoginProtect element={<LoginPage />}  />}  />
          <Route path="registration"  element={<LoginProtect element={<RegistrationPage />}  />}  />

          {/* Admin Routes */}

          <Route path="/admin" element={<AdminProtect element={<ProtectedRoute element={<AdminSidebar /> } />} /> } >
            <Route path="/admin" element={<AdminProtect  element={<ProtectedRoute element={<AdminHomePage /> } /> } />}/>
            <Route path="/admin/userslist" element={<AdminProtect  element={<ProtectedRoute element={<UsersLists /> } /> } />}/>
            <Route path="/admin/addproduct" element={<AdminProtect  element={<ProtectedRoute element={<AdminAddProduct /> } /> } />}/>
            <Route path="/admin/products/:id" element={<AdminProtect  element={<ProtectedRoute element={<AdminProductUpdate /> } /> } />}/>
            <Route path="/admin/userslist/user/:id" element={<AdminProtect  element={<ProtectedRoute  element={<AdminUserCart /> } /> } />}/>
            <Route path="/admin/userslist/user/:id/orders" element={<AdminProtect  element={<ProtectedRoute   element={<AdminOrderList/> } /> } />}/>


          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;