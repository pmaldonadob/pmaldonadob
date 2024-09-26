import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  DatabaseOutlined,
  UserOutlined,
  CalendarOutlined,
  DollarOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <SubMenu key="4" icon={<DatabaseOutlined />} title="Master Data">
              <Menu.Item key="2">
                <Link to="/medical-conditions">Medical Conditions</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/medicines">Medicines</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/treatments">Treatments</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to="/patient-management">Patient</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<CalendarOutlined />}>
              <Link to="/appointment-scheduling">Appointment</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<DollarOutlined />} title="Financial">
              <Menu.Item key="7">
                <Link to="/invoices">Invoices</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/expenses-tracker">Expenses Tracker</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<BarChartOutlined />}>
              <Link to="/reporting">Reporting</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            <Routes>
              <Route path="/" element={<h2>Dashboard</h2>} />
              <Route path="/master-data" element={<h2>Master Data</h2>} />
              <Route path="/medical-conditions" element={<h2>Medical Conditions</h2>} />
              <Route path="/medicines" element={<h2>Medicines</h2>} />
              <Route path="/treatments" element={<h2>Treatments</h2>} />
              <Route path="/patient-management" element={<h2>Patient Management</h2>} />
              <Route path="/appointment-scheduling" element={<h2>Appointment Scheduling</h2>} />
              <Route path="/invoices" element={<h2>Invoices Page</h2>} />
              <Route path="/expenses-tracker" element={<h2>Expenses Tracker Page</h2>} />
              <Route path="/reporting" element={<h2>Reporting</h2>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
