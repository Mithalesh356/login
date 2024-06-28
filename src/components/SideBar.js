import React from 'react';

const SideBar = () => {
  const menuItems = [
    { name: "Dashboards", icon: "fa-tachometer-alt" },
    { name: "Template Management", icon: "fa-clipboard-list" },
    { name: "Aggregator Master", icon: "fa-cogs" },
    { name: "Channel Master", icon: "fa-tags" },
    { name: "Store Groups", icon: "fa-store" },
    { name: "Store Master", icon: "fa-store" },
    { name: "Category Master", icon: "fa-list-alt" },
    { name: "Tags Master", icon: "fa-tags" },
    { name: "Order Mode Master", icon: "fa-shopping-cart" },
    { name: "Upsell Configuration", icon: "fa-chart-line" },
    { name: "Banner Management", icon: "fa-shopping-bag" },
    { name: "Pricing Tool Reference", icon: "fa-file-invoice" },
  ];

  return (
    <div className='bg-white shadow-xl   p-5 grid-cols-4 w-72'>
          <img src="lg.jpg" alt="logo" className='h-[30px] w-[100px] ml-5 mb-3' />
          <hr></hr>
      <ul className='text-gray-500 mt-3 text-sm'>
        {menuItems.map((item, index) => (
          <li key={index} className='flex items-center hover:bg-gray-200 p-2 rounded-xl cursor-pointer'>
            <i className={`fa ${item.icon} p-2`}></i>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
