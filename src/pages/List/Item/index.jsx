import React, { Component } from 'react';
import { Flex, } from 'antd-mobile';

class Item extends Component {
  render() {
    return <div style={{ 
      // width: '100%',
      background: 'white',
      border: 'none',
      margin: '.5rem',
      borderRadius: '5px',
      boxShadow: 'rgba(90, 116, 148, 0.4) 0px 0px 0px 0px'
    }}>
      <Flex>
        <Flex.Item>
          <img 
          style={{
            margin: '1rem',
            borderRadius: '15px'
          }}
          src={require('../../../../static/150.png')}></img>
        </Flex.Item>
        <Flex.Item>
          <div style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            fontWeight: 'bold'
          }}>经营快报</div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.3rem'
            }}
          >2019年第11期</div>
        </Flex.Item>
      </Flex>
      </div>
  }
}

export default Item;