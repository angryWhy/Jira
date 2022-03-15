import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import EpicScreen from "../EpicScreen";
import KanBan from "../KanBan";

export const ProjectScreen = () =>{
    return(
        <div>
            <h1>ProjectScreen</h1>
            <Link to="/kanban">看板</Link>
            <Link to="/epic">任务组</Link>
            <Routes>
                <Route path="/kanban" element={<KanBan/>}/>
                <Route path="/epic" element={<EpicScreen/>}/>
                {/* <Route path="*" element={<Navigate to={"/projects"}/>}/> */}
            </Routes>
        </div>
    )
}