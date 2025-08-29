import StudentLogin from './StudentLogin';
import StudentSignup from './StudentSignup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider';
import TeacherLogin from './TeacherLogin';
import AdminLogin from './AdminLogin';
import Studenthome from './Studenthome';
import StudentLayout from './StudentLayout';
import PrivateRoute from './PrivateRoute';
import StudentPage from './StudentPage';
import StudentSubject from './StudentSubject';
import StudentAssignment from './StudentAssignment';
import TodayAssignment from './TodayAssignment'
import TodayQuizzes from './TodayQuizzes';
import SubmitAnswer from './SubmitAnswer';
import StudentSuccessPage from './StudentSuccessPage';
import TeacherRoute from './TeacherRoute';
import TeacherHome from './TeacherHome';
import ViewSubmission from './ViewSubmission';
import GiveMarks from './GiveMarks'
import MarkSuccessPage from './MarkSuccessPage';
import TeacherLayout from './TeacherLayout';
import ViewResult from './ViewResult';
const route = createBrowserRouter([
  {
    path: '/studentsignup',
    element: <StudentSignup />
  },
  {
    path: '/studentlogin',
    element: <StudentLogin />
  },
  {
    path: '/teacherlogin',
    element: <TeacherLogin />
  },
  {
    path: '/adminlogin',
    element: <AdminLogin />
  },
  
  {
    path: '/',
    element: (
      <PrivateRoute>
        <StudentLayout />
      </PrivateRoute>
    ),
    children: [
      { path: '/', element: <Studenthome /> },
      { path: 'studentpage', element: <StudentPage /> },
      { path: 'studentsubject/:id', element: <StudentSubject /> },
      { path: 'studentsubject/:id/subjectdetails/:classId/:subjectId', element: <StudentAssignment /> },

      { path: 'todayassignments/:classId/:subjectId', element: <TodayAssignment /> },
      { path: 'todayquizzes/:classId/:subjectId', element: <TodayQuizzes /> },
      { path: 'submitanswer/:type/:classId/:subjectId/:itemId', element: <SubmitAnswer /> },
      {path:'studentsuccesspage',element:<StudentSuccessPage/>},
      {path:'viewresult',element:<ViewResult/>}
    ],
  },

{
  path: 'teacherhome', 
  element: (
    <TeacherRoute>
      <TeacherLayout /> {/* <Outlet /> must be inside TeacherLayout */}
    </TeacherRoute>
  ),
  children: [
    { path: '', element: <TeacherHome /> }, // default page for /teacherhome
    { path: 'viewsubmission', element: <ViewSubmission /> },
    { path: 'givemarks/:type/:classId/:subjectId/:itemId', element: <GiveMarks /> },
    { path: 'markssuccesspage', element: <MarkSuccessPage /> }, // ✅ success page
  ]
}
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  );
}

export default App;
