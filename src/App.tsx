import AOS from "aos";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Layout from "./layout";
import NotFound from "./pages/404";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import Projects from "./pages/Projects";
import { AnimatePresence } from "framer-motion";
// import DigitalPage from "./pages/DigitalPage";
import GraphicPage from "./pages/GraphicPage";
import DevelopmentPage from "./pages/DevelopmentPage";
import ServerPage from "./pages/ServerPage";
import Posts from "./pages/Posts";
import Post from "./pages/Posts/post";

import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import { DashboardLayout } from "./layout/dashboardLayout";
import CreateProjectView from "./pages/ProjectsView/CreateProjectView";
import Clients from "./pages/Clients/index.tsx";
import EditProjectView from "./pages/ProjectsView/EditProjectView";
import ProjectDetails from "./pages/ProjectsView/ProjectDetails";
import ProjectView from "./pages/ProjectsView/ProjectsView";
import Register from "./pages/Auth/Register";
import ConfirmAccountView from "./pages/Auth/ConfirmAccount";
import RequestNewCodeView from "./pages/Auth/RequestNewCodeView.tsx";
import ForgotPasswordView from "./pages/Auth/ForgotPassword/index.tsx";
import NewPasswordView from "./pages/Auth/NewPasswordView/index.tsx";
import ProfileView from "./pages/Profile/ProfileView.tsx";
import ProfileLayout from "./layout/ProfileLayout.tsx";
import ChangePassword from "./pages/Profile/ChangePassword.tsx";
import ProjectTeamView from "./pages/ProjectsView/ProjectTeam.tsx";
import RegisterClients from "./pages/Clients/registerClients/index.tsx";
import ClientDetails from "./pages/Clients/clientDetails/index.tsx";
import Blog from "./pages/Blog/index.tsx";
import CreatePost from "./pages/Blog/createBlog/index.tsx";
import EditClient from "./pages/Clients/editClient/index.tsx";
import {  HelmetProvider } from 'react-helmet-async'
import ShowDetailsPost from "./pages/Blog/showDetails/index.tsx";
import EditBlog from "./pages/Blog/editBlog/index.tsx";
import Leads from "./pages/Leads/index.tsx";
import  Analytics  from "./pages/Analytics/index.tsx"
import RouteTracker from "./components/RouterTracker/index.tsx";

import CalendarComponent from "./pages/Calendar/index.tsx";
import TransactionManagement from "./pages/expanses/TransactionManagement.tsx";
import AccessibilityDeclaration from "./pages/AccessibilityPage/index.tsx";
import Terms from "./pages/Conditions/index.tsx";


AOS.init();

function App() {
  return (
    <>
    <HelmetProvider>
      <AnimatePresence mode="wait">
      <RouteTracker />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accesibility" element={<AccessibilityDeclaration />} />
            <Route path="/conditions" element={<Terms />} />
       
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/projects" element={<Projects />} />
         {/* <Route path="/digital" element={<DigitalPage />} /> */}
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/design" element={<GraphicPage />} />
            <Route path="/server" element={<ServerPage />} />
          </Route>
          <Route
            path="/auth/confirm-account/"
            element={<ConfirmAccountView />}
            />
          <Route path="/auth/request-code" element={<RequestNewCodeView />} />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordView />}
            />
          <Route path="/auth/new-password" element={<NewPasswordView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/expanses" element={<TransactionManagement />} />
            <Route path="/dashboard/leads" element={<Leads />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/calendar" element={<CalendarComponent />} />
            <Route path="/dashboard/workflows" element={<Dashboard />} />
            <Route path="/dashboard/blog" element={<Blog />} />
            <Route path="/dashboard/blog/newPost" element={<CreatePost />} />
            <Route path={`/dashboard/blog/:id/details`} element={<ShowDetailsPost />} />
            <Route path={`/dashboard/blog/:id/edit`} element={<EditBlog />} />
            <Route path="/dashboard/notifications" element={<Dashboard />} />
            <Route path="/dashboard/projects" element={<ProjectView />} />
            <Route
              path="/dashboard/projects/create"
              element={<CreateProjectView />}
              />
            <Route
              path="/dashboard/projects/:projectId"
              element={<ProjectDetails />}
              />
            <Route
              path="/dashboard/projects/:projectId/team"
              element={<ProjectTeamView />}
              />
            <Route
              path="/dashboard/projects/:projectId/edit"
              element={<EditProjectView />}
              />
            <Route path="/dashboard/clients" element={<Clients />} />
            <Route path="/dashboard/clients/:clientId" element={<ClientDetails/>} />
            <Route path="/dashboard/clients/:clientId/edit" element={<EditClient/>} />
            <Route path="/dashboard/clients/register" element={<RegisterClients />} />
            <Route path="/dashboard/register" element={<Register />} />
            <Route element={<ProfileLayout />}>
              <Route path="/dashboard/profile" element={<ProfileView />} />
              <Route
                path="/dashboard/profile/password"
                element={<ChangePassword />}
                />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
                </HelmetProvider>
    </>
  );
}

export default App;
