  import ProductDetails from "./Componet/ProductDetail";
  import CartPage from "./Pages/CartPage";
  import Home from "./Pages/Home";
  import HomePage from "./Pages/HomeBody";
  import LoginPage from "./Pages/LoginPage";
  import NotFoundPage from "./Pages/NotFoundPage";
  import ProductPage from "./Pages/ProductPage";
  import RegistrationPage from "./Pages/RegistrationPage";
  import PaymentSection from "./Pages/PaymentPage";
  import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
  import ContactPage from "./Pages/ContactPage";
  import ProtectedRoute from "./Componet/protectedRoute";

  function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/"  element={<Home/>}>
              <Route index element={<HomePage/>} />
              <Route path="products" element={<ProtectedRoute element={<ProductPage/>} />} />
              <Route path="Contact" element={<ContactPage/>} />
              <Route path="cart" element={<ProtectedRoute element={<CartPage/>} />} />
              <Route path="products/:id" element={<ProtectedRoute element={<ProductDetails/>}/>} />
              <Route path="paymentsection" element={<ProtectedRoute element={<PaymentSection/>}/>} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Route>
              <Route path="login" element={<LoginPage/>} />
              <Route path="registration" element={<RegistrationPage/>} />
          </Routes>
        </Router>
      </>
    );
  }

  export default App;
