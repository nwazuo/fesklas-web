import React, { useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

import { useRouter } from 'next/router';
import CustomScrollbars from '../../../util/CustomScrollbars';
import SidebarLogo from './SidebarLogo';
import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE,
} from '../../../constants/ThemeSetting';
import IntlMessages from '../../../util/IntlMessages';
import { useDispatch, useSelector } from 'react-redux';
import { setPathName } from '../../../redux/actions';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { navStyle, themeType, pathname } = useSelector(
    ({ settings }) => settings
  );

  const getNoHeaderClass = (navStyle) => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return 'gx-no-header-notifications';
    }
    return '';
  };
  const getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return 'gx-no-header-submenu-popup';
    }
    return '';
  };

  useEffect(() => {
    dispatch(setPathName(router.pathname));
  }, [router.pathname]);

  const selectedKeys = router.pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div
          className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}
        >
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline"
          >
            {/* Customer menu starts here */}
            <Menu.Item key="dashboard">
              <Link href="/dashboard">
                <a>
                  <i className="icon icon-dasbhoard" />
                  <span>Dashboard</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="subscription">
              <Link href="/subscription">
                <a>
                  <i className="icon icon-shopping-cart" />
                  <span>Subscription</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="account">
              <Link href="/account">
                <a>
                  <i className="icon icon-setting" />
                  <span>Account</span>
                </a>
              </Link>
            </Menu.Item>
            {/* Customer menu ends here */}
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;
