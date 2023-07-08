import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import ProblemList from "./components/ProblemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KiemSoLonNhatTrongMang from './components/array/easy/KiemSoLonNhatTrongMang/KiemSoLonNhatTrongMang';
import KiemSoLonNhiTrongMang from './components/array/easy/KiemSoLonNhiTrongMang/KiemSoLonNhiTrongMang';

import "react-bootstrap/dist/react-bootstrap.min.js";
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
function App() {
  return (
  
     <BrowserRouter>
     <div>
       <div>
         <Routes>
           <Route path="/" element={<ProblemList />} />

           <Route
             path="/kiem-so-lon-nhat-trong-mang"
             element={
                 <KiemSoLonNhatTrongMang />
             }
           />
           <Route
             path="/kiem-so-lon-nhi-trong-mang"
             element={
                 <KiemSoLonNhiTrongMang />
             }
           />
         </Routes>
       </div>
     </div>
   </BrowserRouter>

  );
}

export default App;
