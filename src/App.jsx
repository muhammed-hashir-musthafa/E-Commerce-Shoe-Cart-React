import ProductDetails from "./User/Componet/ProductDetail/ProductDetail";
import CartPage from "./User/Pages/CartPage/CartPage";
import Home from "./User/Pages/Home/Home";
import HomePage from "./User/Pages/HomeBody/HomeBody";
import LoginPage from "./User/Pages/LoginPage/LoginPage";
import NotFoundPage from "./User/Pages/NotFoundPage/NotFoundPage";
import ProductPage from "./User/Pages/ProductPage/ProductPage";
import RegistrationPage from "./User/Pages/RegistrationPage/RegistrationPage";
import PaymentSection from "./User/Pages/PaymentPage/PaymentPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactPage from "./User/Pages/ContactPage/ContactPage";
import ProtectedRoute from "./User/Componet/protectedRoute/protectedRoute";
import { ToastContainer } from "react-toastify";
import { AdminSidebar } from "./Admin/Pages/AdminSideBar/AdminSideBar";
import UsersLists from "./Admin/Pages/UsersLists/UsersLists";
import { AdminProductPage} from "./Admin/Pages/AdminProductPage/AdminProductPage";
import AdminAddProduct from "./Admin/Pages/AdminAddProduct/AdminAddProduct";
import AdminProductUpdate from "./Admin/Components/AdminProductUpdate/AdminProductUpdate";
import AdminUserCart from "./Admin/Components/AdminUserCart/AdminUserCart";
import AdminOrderList from "./Admin/Components/AdminOrderList/AdminOrderList";
import LoginProtect from "./User/Componet/LoginProtect/LoginProtect";
import AdminProtect from "./Admin/Components/AdminProtect/AdminProtect";
import AdminHomePage from "./Admin/Pages/AdminHomePage/AdminHomePage";

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
            <Route path="/admin/productPage" element={<AdminProtect  element={<ProtectedRoute element={<AdminProductPage /> } /> } />}/>
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