import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectList from "./pages/admin/ProjectList";
import Contact from "./pages/Contact";
import AppLayout from "./ui/AppLayout";
import { AnimatePresence } from "framer-motion";
import ProjectView from "./features/projects/ProjectView";
import AdminRoute from "./ui/AdminRoute";
import UserList from "./pages/admin/UserList";
import UpdateProject from "./pages/admin/UpdatePrject";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<ProjectView />} />
              <Route path="contact" element={<Contact />} />
              <Route element={<AdminRoute />}>
                <Route path="admin/users" element={<UserList />} />
                <Route path="admin/projects" element={<ProjectList />} />
                <Route
                  path="admin/project/:id/edit"
                  element={<UpdateProject />}
                />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
