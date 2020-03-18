import React, { Component } from 'react';
import { connect } from 'dva';

class BasicLayout extends Component {

  componentDidMount() {
    this.props.dispatch({
      type:'global/effectCase'
    })
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }


}

export default connect(({global, loading}) => ({
  global,
  loading: loading.models.global
}))(BasicLayout);
