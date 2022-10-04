import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductList from 'pages/product-list';
import Form from 'pages/form';
import { ConfigRoutes } from '../shared/config/routes';

const Pages = () => {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path={ConfigRoutes.FORM} element={<Form />} />
    </Routes>
  );
};

export default Pages;