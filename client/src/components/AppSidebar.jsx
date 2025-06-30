import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo-white.png";
import { IoHome } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { FaComments } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";



const AppSidebar = () => {
  return (
    <Sidebar className="mt-23">
      {/* <SidebarHeader className="bg-red">
        <img src={logo} width={140}/>
      </SidebarHeader> */}
      <SidebarContent className="bg-white " >
        <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <IoHome />
                        <Link to="">Home</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <MdCategory />
                        <Link to="">Category</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <TbLogs />
                        <Link to="">Blogs</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <FaComments />
                        <Link to="">Comments</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <FaUsers />
                        <Link to="">Users</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>
            Categories
          </SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <HiOutlineDotsCircleHorizontal />
                        <Link to="">Categories-Item </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                
            </SidebarMenu>
        </SidebarGroup>
        
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
