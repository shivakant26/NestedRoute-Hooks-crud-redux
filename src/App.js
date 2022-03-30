
import './App.css';
import Home from './Component/Home';
import MyClassForm from './Component/MyClassForm';
import Myform from './Component/Myform';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllPage from './Component/AllPage';
import PageNotFound from './Component/PageNotFound';
import UseState from './Component/UseState';
import ReduxComponent from './Component/ReduxComponent';
import Container from './Component/Container';
import EmployeeTable from './Component/EmployeeTable';
import AddEmployee from './Component/AddEmployee';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allpage/' exact element={<AllPage />}>
            <Route path='myclassform' exact element={<MyClassForm />} />
            <Route path='myform' exact element={<Myform />} />
            <Route path='usestate' exact element={<UseState />} />
            <Route path='redux-component/' exact element={<ReduxComponent />} >
            <Route path='container/' exact element={<Container />} >
                <Route path='employeetable' exact element={<EmployeeTable />} />
                <Route path='addemployee' exact element={<AddEmployee />} />
                <Route path='addemployee/:id' exact element={<AddEmployee />} />
            </Route>
            </Route>
          </Route>
          <Route path='*' exact element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
