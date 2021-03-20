import React, { useState } from 'react';
import { useQuery } from 'react-query';

// Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Styles
import { Wrapper } from './App.styles';

// Types
export type CardItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CardItemType[]> => {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  const init: RequestInit = {
    mode: 'no-cors',
    credentials: 'omit',
    headers,
  }
  return await (await fetch('https://fakestoreapi.com/products',
    init
  )).json()
}


const App = () => {

  const { data, isLoading, error } = useQuery<CardItemType[]>('products', getProducts)
  console.log('here', data);

  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
