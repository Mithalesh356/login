import React from 'react';

const DataView = () => {
  const data = [
    { TEMPLATE_ID: '34567', TEMPLATE_NAME: 'Kiosk Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'True' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    { TEMPLATE_ID: '34568', TEMPLATE_NAME: 'Booth Template', CREATED_DATE: '2024-06-27', UPDATED_ON: '2024-06-27', STATUS: 'Inactive', ACTION: 'False' },
    
  ];

  return (
    <div>
      <table className=' mt-2  table-fixed w-full '>
        <thead>
          <tr className='text-gray-500 text-sm pl-0'>
            <th className=' w-1/6'>TEMPLATE ID</th>
            <th className=' w-1/6'>TEMPLATE NAME</th>
            <th className=' w-1/6'>CREATED DATE</th>
            <th className=' w-1/6'>UPDATED ON</th>
            <th className=' w-1/6'>STATUS</th>
            <th className=' w-1/6'>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr className='text-sm border border-b-gray-100 ' key={index}>
              <td className='text-center p-2 text-red-500'>#{item.TEMPLATE_ID}</td>
              <td className='text-center p-2'>{item.TEMPLATE_NAME}</td>
              <td className='text-center p-2'>{item.CREATED_DATE}</td>
              <td className='text-center p-2'>{item.UPDATED_ON}</td>
              <td className='text-center p-2 text-green-800 font-bold'><button className='bg-green-100 p-1 rounded-lg'>{item.STATUS}</button></td>
              <td className='text-center p-2'>{item.ACTION}</td>
            </tr>
          ))} 
        </tbody>

      </table>
    </div>
  );
};

export default DataView;
