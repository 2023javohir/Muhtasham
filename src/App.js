import React from 'react'; 
import './App.css';
import { Box} from '@chakra-ui/react';
// import Navbar from './Components/Nanvbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Asosiy from './Components/Menu/Asosiy';
import Buyurtmachilar from './Components/Menu/Buyurtmachilar';
import Foydalanuvchilar from './Components/Menu/Foydalanuvchilar';
import Lavozimlar from './Components/Menu/Lavozimlar';
import Skladlar from './Components/Menu/Skladlar';
import Detallar from './Components/Menu/Sozlamalar';
import Xodimlar from './Components/Menu/Xodimlar';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Doborlar from './Components/Eshik/Doborlar';
import EshikTurlari from './Components/Eshik/EshikTurlari';
import FramogaShakllari from './Components/Eshik/FramogaShakllari';
import Korona from './Components/Eshik/Korona';
import Kubik from './Components/Eshik/Kubik';
import Nalichniklar from './Components/Eshik/Nalichniklar';
import NaqshShakllari from './Components/Eshik/NaqshShakllari';
import Qalinliklar from './Components/Eshik/Qalinliklar';
import QulfTurlari from './Components/Eshik/QulfTurlari';
import Sapog from './Components/Eshik/Sapog';
import Tabaqalar from './Components/Eshik/Tabaqalar';
import Chaspak from './Components/Eshik/Chaspak';
import Sishalar from './Components/Shisha/Sishalar';
import Sishaturlari from './Components/Shisha/Sishaturlari';
import Sishashakllari from './Components/Shisha/Sishashakllari';
import Kategoriyalar from './Components/Tovarlar/Kategoriyalar';
import Mahsulotlar from './Components/Tovarlar/Mahsulotlar';
import StudentCreate from './Components/Create/StudentCreate';
import {Login, Main, Register } from './Components/index';



function App() {
  return (
  

        <Routes>
       
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      
        
    
       
        </Routes>
    
  
  );
}

export default App;



{/* <Route path='/' element={<Asosiy />} />
<Route path='/buyurtmachilar' element={<Buyurtmachilar />} />
<Route path='/foydalanuvchilar' element={<Foydalanuvchilar />} />
<Route path='/lavozimlar' element={<Lavozimlar />} />
<Route path='/chaspak' element={<Chaspak />} />
<Route path='/doborlar' element={<Doborlar />} />
<Route path='/eshikTurlari' element={<EshikTurlari />} />
<Route path='/framogaShakllari' element={<FramogaShakllari />} />
<Route path='/korona' element={<Korona />} />
<Route path='/kubik' element={<Kubik />} />
<Route path='/nalichniklar' element={<Nalichniklar/>} />
<Route path='/naqshShakllari' element={<NaqshShakllari />} />
<Route path='/qalinliklar' element={<Qalinliklar />} />
<Route path='/qulfTurlari' element={<QulfTurlari />} />
<Route path='/Sishalar' element={<Sishalar />} />
<Route path='/Sishaturlari' element={<Sishaturlari />} />
<Route path='/Sishashakllari' element={<Sishashakllari/>} />
<Route path='/doborlar' element={<Doborlar />} />
<Route path='/nalichniklar' element={<Nalichniklar/>} />
<Route path='/kategoriyalar' element={<Kategoriyalar/>} />
<Route path='/mahsulotlar' element={<Mahsulotlar/>} />
<Route path='/studentcreate' element={<StudentCreate/>} /> */}

{/* <Box w={'full'} display={'flex'} gap={8}>
<Box w={'350px'} h={'100vh'} bg={'gray.500'}>
<Sidebar />
</Box>

<Box w={'full'}>
  <Navbar /> */}