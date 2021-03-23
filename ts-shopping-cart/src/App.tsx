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

const getProducts = async (): Promise<CardItemType[]> =>
  await (await fetch('https://fakestoreapi.herokuapp.com/products')).json()



const App = () => {

  const { data, isLoading, error } = useQuery<CardItemType[]>('products', getProducts)

  const getTotalItems = () => null

  const handleAddToCart = () => null

  const handleRemoveFromCart = () => null

  if(isLoading) return <LinearProgress />
  if(error) return <div>Something went wrong...</div>
  

  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
