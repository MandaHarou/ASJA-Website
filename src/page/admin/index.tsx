import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AdminDashBoardProvider } from './bloc/useAdminDasboardPortalProvider';

import { AppSidebar } from '@/page/admin/components/app-sidebar';
import { Dashboard } from './page/dashboard';
import { Studentlist } from './page/student-list';
import { NavBar } from './components/nav-bar';
import { useState, type JSX } from 'react';
import { Modalprovider } from './bloc/useModalProvider';
import { Loglist } from './page/log-list';
import { Postlist } from './page/post-list';
export const AdminDashboardPage = () => {
  const [index, setIndex] = useState<number>(0);
  const page: JSX.Element[] = [
    <Dashboard />,
    <p>Tranche Page</p>,
    <Studentlist />,
    <p>Document Page</p>,
    <Loglist />,
    <Postlist />,
  ];
  return (
    <AdminDashBoardProvider>
      <Modalprovider>
        {' '}
        <SidebarProvider>
          <AppSidebar changePage={setIndex} />
          <SidebarInset className=" overflow-hidden transition-all duration-500">
            <NavBar />
            {page[index]}
          </SidebarInset>
        </SidebarProvider>
      </Modalprovider>
    </AdminDashBoardProvider>
  );
};
