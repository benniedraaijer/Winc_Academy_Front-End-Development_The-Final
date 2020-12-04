import React from "react";

export const SideNavUser = () => {
  return (
    <div className='nav-sidebar-user-container'>
      <i className='nav-sidebar-user-icon fas fa-user-circle'></i>
      <div className='profile_info'>
        <p className='user-name'>Bennie Draaijer</p>
        <p className='user-role'>FE Educator</p>
      </div>
    </div>
  );
};
