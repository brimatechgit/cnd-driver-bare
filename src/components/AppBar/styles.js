import { Appbar } from 'react-native-paper';
import React from 'react';

function CustomNavigationBar() {
  return (
    <Appbar.Header>
      <Appbar.Content title="My awesome app" style={{alignItems: 'center', justifyContent: 'center'}}/>
    </Appbar.Header>
  );
}

export default CustomNavigationBar;