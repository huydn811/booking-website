import React from "react";
import HomePage from "./pages/pagesFE/homepage/homepage";
import DetailPage from "./pages/pagesFE/detailpage/detailpage";
import AllTour from "./pages/pagesFE/pageAllTour/pageAllTour";
// import OrderTour from "./pages/pagesFE/orderPage/orderPage";
import MyCart from "./components/componentsFE/cart/indexCart";
import NotFoundPage from "./pages/pagesFE/notfoundpage/notfoundpage";
//admin page
import PageDashBoard from "./pages/pagesAdmin/pagedashboard/pagedashboard";
//admin page tour
import AllTourPage from "./pages/pagesAdmin/pagetour/pagealltour/pagealltour";
import AddTourPage from "./pages/pagesAdmin/pagetour/pageaddtour/pageaddtour";
import EditTourPage from "./pages/pagesAdmin/pagetour/pageedittour/pageedittour";
//admin page user
import AllUserPage from "./pages/pagesAdmin/pageuser/pagealluser/pagealluser";
import AddUserPage from "./pages/pagesAdmin/pageuser/pageadduser/pageadduser";
import EditUserPage from "./pages/pagesAdmin/pageuser/pageedituser/pageedituser";
//admin page employee
import AllEmployeePage from "./pages/pagesAdmin/pageemployee/pageallemployee/pageallemployee";
import AddEmployeePage from "./pages/pagesAdmin/pageemployee/pageaddemployee/pageaddemployee";
import EditEmployeePage from "./pages/pagesAdmin/pageemployee/pageeditemployee/pageeditemployee";
//admin page transport
// admin page chat
import ChatPgae from "./pages/pagesAdmin/pageChat/chat";
// import AllTransport from "./pages/pagesAdmin/page"
// import RootAdmin from "./pages/pagesAdmin/rootAdmin";
//page login
import PageLogin from "./pages/pagesAuth/pagesLogin/pageLogin";
import PageRegister from "./pages/pagesAuth/pageRegister/pageRegister";

export const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <HomePage history={history} />,
  },
  // {
  //     path : "/admint",
  //     exact : true,
  //     main : () => <RootAdmin />
  // },
  {
    path: "/all-tour",
    exact: true,
    main: (match) => <AllTour match={match} />,
  },
  {
    path: "/detail-tour/:tourID",
    exact: false,
    main: ({ match, history }) => (
      <DetailPage history={history} match={match} />
    ),
  },

  // {
  //     path : "/order-tour",
  //     exact : false,
  //     main : () => <OrderTour />
  // },
  {
    path: "/my-cart",
    exact: true,
    main: () => <MyCart />,
  },
  //page not found
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export const routesAuth = [
  //page login
  {
    path: "/login",
    exact: false,
    main: ({ match, history }) => <PageLogin match={match} history={history} />,
  },
  {
    path: "/register",
    exact: false,
    main: ({ match, history }) => (
      <PageRegister match={match} history={history} />
    ),
  },
];

export const routesAdmin = [
  //admin routes
  // {
  //     path : "/",
  //     exact : false,
  //     main : () => <PageDashBoard />
  // },
  {
    path: "/admint/dashboard",
    exact: false,
    main: () => <PageDashBoard />,
  },
  //admin routes tour
  {
    path: "/admint/all-tour",
    exact: false,
    main: () => <AllTourPage />,
  },
  {
    path: "/admint/add-tour",
    exact: false,
    main: ({ history }) => <AddTourPage history={history} />,
  },
  {
    path: "/admint/edit-tour/:tourID",
    exact: false,
    main: ({ match, history }) => (
      <EditTourPage match={match} history={history} />
    ),
  },

  //admin route user
  {
    path: "/admint/all-user",
    exact: false,
    main: () => <AllUserPage />,
  },
  {
    path: "/admint/add-user",
    exact: false,
    main: ({ history }) => <AddUserPage history={history} />,
  },
  {
    path: "/admint/edit-user/:userID",
    exact: false,
    main: ({ match, history }) => (
      <EditUserPage match={match} history={history} />
    ),
  },

  //admin route employee
  {
    path: "/admint/all-employee",
    exact: false,
    main: () => <AllEmployeePage />,
  },
  {
    path: "/admint/add-employee",
    exact: false,
    main: ({ history }) => <AddEmployeePage history={history} />,
  },
  {
    path: "/admint/edit-employee/:employeeID",
    exact: false,
    main: ({ match, history }) => (
      <EditEmployeePage match={match} history={history} />
    ),
  },
  //page chat
  {
    path: "/admint/chat/:chatRoomID",
    exact: false,
    main: ({ match, history }) => <ChatPgae match={match} history={history} />,
  },
  //page not found
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },

  //page not found
  // {
  //     path : "",
  //     exact : false,
  //     main : () => <NotFoundPage />
  // },
];

// export routes;
