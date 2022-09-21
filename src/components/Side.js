import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
const Side = () => {
    return (
        <div
            style={{ display: 'flex', height: '100vh',overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#007ae5" backgroundColor="#ffffff">
                <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                    <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={'data:image/png;base64,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'}
                            alt="..."
                            style={{ width: '90px',  }}
                        />
                    </div>
                </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                    <NavLink exact to="/" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="home">Anasayfam</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/profil" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Profilim</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/çalışmabelgesi" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="fa fa-file ">Çalışma Belgesi</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/organizasyon" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="fa fa-sitemap">Organizasyon</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink exact to="/destek" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="fa fa-question-circle">Destek</CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarMenu>
            </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};
export default Side;