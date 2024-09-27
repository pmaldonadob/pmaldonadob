import { Menu } from 'antd';
import { Link } from 'react-router-dom' // Importar Router y Routes

import { 
     HomeOutlined,
     DatabaseOutlined,
     UserOutlined,
     CalendarOutlined,
     DollarOutlined,
     BarChartOutlined } from '@ant-design/icons'

const MenuList = ({darkTheme}) => {
     return ( 
          <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>

               <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                    <Link to="/">Dashboard</Link>
               </Menu.Item>

               <Menu.SubMenu key="master-data" icon={<DatabaseOutlined />} title="Master Data">

                    <Menu.Item key="medical-conditions">
                         <Link to="/medical-conditions">Medical Conditions</Link>
                    </Menu.Item>

                    <Menu.Item key="medicines">
                         <Link to="/medicines">Medicines</Link>
                    </Menu.Item>

                    <Menu.Item key="treatments">
                         <Link to="/medicines">Medicines</Link>
                    </Menu.Item>

               </Menu.SubMenu>

               <Menu.Item key="patient-management" icon={<UserOutlined />}>
                    <Link to="/patient-management">Patient</Link>
               </Menu.Item>
               
               <Menu.Item key="appointment-scheduling" icon={<CalendarOutlined />}>
                    <Link to="/appointment-scheduling">Appointment</Link>
               </Menu.Item>
               
               <Menu.SubMenu key="sub1" icon={<DollarOutlined />} title="Financial">

                    <Menu.Item key="invoices">
                         <Link to="/invoices">Invoices</Link>
                    </Menu.Item>

                    <Menu.Item key="expenses-tracker">
                         <Link to="/expenses-tracker">Expenses Tracker</Link>
                    </Menu.Item>

               </Menu.SubMenu>

               <Menu.Item key="reporting" icon={<BarChartOutlined />}>
                    <Link to="/reporting">Reporting</Link>
               </Menu.Item>

          </Menu>
          
      );
}
 
export default MenuList;