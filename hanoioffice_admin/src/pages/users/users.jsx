import React from 'react';

import Users from '../../components/users';
import Filter from '../../components/users/filters';
import Layout from '../../layouts';

const Employee = () => {
  return (
    <>
      <Layout nav={ <Filter /> } title='Khách hàng'>
        <Users />
      </Layout>
    </>
  );
};
export default Employee;