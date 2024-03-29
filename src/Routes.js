import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./core/Home";
import Homev2 from "./core/Homev2";

import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Cart from "./core/Cart";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import PrivateRoute from "./auth/helper/PrivateRoute";
import AdminRoute from "./auth/helper/AdminRoute";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import ManageCategoriesV2 from "./admin/ManageCategoriesV2";
import UpdateCategory from "./admin/UpdateCategory";
import AddTrips from "./admin/AddTrips";
import ManageTrips from "./admin/ManageTripsV2";
import UpdateProduct from "./admin/UpdateProduct";
import BookingModal from './core/components/BookingModal';
import Card from './core/components/Card';
import MyBookings from './core/components/MyBookingV2';
import Cancellations from './core/components/CancellationsV2'
import AdminCancellations from "./admin/AdminCancellations";
import RequestSolved from "./core/components/ResolvedQuery";
import AdminSolvedReq from "./admin/AdminAllSolvedReq";
import Testing from "./core/components/Testing"

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Homev2 />} />
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        

        <Route element={<PrivateRoute />}>
          <Route path="/user/userdashboard" element={<UserDashBoard />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/user/mybookings" element={<MyBookings />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/user/mycancellations" element={<Cancellations />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin/admindashboard" element={<AdminDashBoard />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin/create/category" element={<AddCategory />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin/categories/:categoryId" element={<ManageCategoriesV2 />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin/create/trips" element={<AddTrips />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin/trips/update/:productId" element={<ManageTrips />} />
        </Route>


        {/* <Route element={<AdminRoute />}>
          <Route path="/admin/categories/:categoryId" element={<ManageCategoriesV2 />} />
        </Route> */}

        {/* <Route path="/card" element={<Card/>} />z
        <Route path="/user/dashboard" element={
          <PrivateRoute>
            <UserDashBoard/>
          </PrivateRoute>
        }
        />
        <PrivateRoute path="/user/mycancellations" element={<MyCancellations/>} />
        <PrivateRoute path="/user/requestsolved" element={<RequestSolved/>} /> */}
        {/* <AdminRoute path="/admin/dashboard" element={<AdminDashBoard/>} />
        <AdminRoute path="/admin/categories" element={<ManageCategories/>} />
        <AdminRoute
          path="/admin/create/category"
          element={<AddCategory/>}
        />
        <AdminRoute
          path="/admin/category/update/:categoryId"
          element={<UpdateCategory/>}
        />
        <AdminRoute path="/admin/products" element={<ManageProducts/>} />
        <AdminRoute path="/admin/create/product" element={<AddProduct/>} />
        <AdminRoute
          path="/admin/product/update/:productId"
          element={<UpdateProduct/>}
        />
        <AdminRoute
          path="/admin/cancellation/update"
          element={<AdminCancellations/>}
        />
        <AdminRoute
          path="/admin/cancellation/adminsolved"
          element={<AdminSolvedReq/>}
        /> */}
      </Routes>

    </Router>
  );
};

export default App;
