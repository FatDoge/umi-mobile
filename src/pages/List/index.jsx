import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import Item from './Item'


export default class List extends Component {
  render() {
    
    return <div style={{
      minHeight: '100vh',
      background: '#ddeefc'
    }}>
      <SearchBar style={{
      background: '#ddeefc',
      }}/>
      {
        [1,2,3,4,5].map( item => <Item key={item}/>)
      }
      <div style={{
        textAlign: 'center',
        color: 'grey',
        padding: '1rem'
      }}>
        已经滑到底了
      </div>
    </div>
  }
}
