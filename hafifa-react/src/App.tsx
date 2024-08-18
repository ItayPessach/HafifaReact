import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";
import NotFound from '@/pages/not-found/NotFound.tsx';
import Schedule from '@/pages/schedule/Schedule.tsx';
import TargetsBank from '@/pages/targets-bank/TargetsBank.tsx';
import Layout from '@/components/layout/components/Layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Navigate to="targets-bank" />} />
                <Route path="targets-bank" element={<TargetsBank />} />
                <Route path="schedules" element={<Schedule />} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default App;
