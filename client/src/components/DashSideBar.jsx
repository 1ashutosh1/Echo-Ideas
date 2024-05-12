import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiAnnotation, HiArrowSmRight, HiChartPie, HiDocumentText, HiOutlineUserGroup, HiUser } from "react-icons/hi";
import { useDispatch,useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";

export default function DashSideBar() {
  const location = useLocation();
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const handleSignout = async () => {
    try{
      const res = await fetch(`${backendUrl}/api/user/signout`,{
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      }else{
        dispatch(signoutSuccess())
      }
    } catch(error){
      console.log(error.message);
    }
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          {currentUser.isAdmin && (
            <Link to={'/dashboard?tab=dash'}>
              <Sidebar.Item
              active={tab === 'dash' || !tab}
              icon={HiChartPie}
              as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin' : 'User'}  
              labelColor="dark"
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <>
          <Link to='/dashboard?tab=posts'>
            <Sidebar.Item active={tab === 'posts'} icon={HiDocumentText} as='div'>
             Posts
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=users'>
            <Sidebar.Item active={tab === 'users'} icon={HiOutlineUserGroup} as='div'>
             Users
            </Sidebar.Item>
          </Link>
          <Link to='/dashboard?tab=comments'>
            <Sidebar.Item active={tab === 'comments'} icon={HiAnnotation} as='div'>
             Comments
            </Sidebar.Item>
          </Link>
            </>
          )}
          <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer" onClick={handleSignout}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
