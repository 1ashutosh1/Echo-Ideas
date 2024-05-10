import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from '../components/DashProfile'
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";

const DashBoard = () => {
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search])
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
       {/* SideBar */}
       <DashSideBar/>
      </div>
      {/* Profile */}
      {tab === 'profile' && <DashProfile />}
      {/* posts */}
      {tab === 'posts' && <DashPosts/>}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/* comments */}
      {tab === 'comments' && <DashComments/>}
      {/* Dashboard comp */}
      {tab === 'dash' && <DashboardComp/>}
    </div>
  )
}

export default DashBoard;
