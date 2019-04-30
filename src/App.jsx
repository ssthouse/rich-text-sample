import React, {Component} from "react";
import {Layout, Menu} from 'antd'
import 'antd/dist/antd.css'
import './app.css'

const {Header, Content} = Layout;
import IFrame from './iframe/iframe.jsx';
import JsonRich from './json/JsonRich.jsx';

export default class Container extends Component {

  constructor() {
    super();
    this.state = {
      selectedTab: 'iframe'
    };

  }

  onIFrameClick() {
    this.setState(() => {
      return {selectedTab: 'iframe'}
    });
  }

  onJsonClick() {
    this.setState(() => {
      return {selectedTab: 'json'}
    });
  }

  render() {
    return (
      <Layout className="main-layout">
        <Header>
          <Menu theme="dark"
                mode="horizontal"
                style={{lineHeight: '64px'}}>
            <Menu.Item key="1" onClick={() => this.onIFrameClick()}>iFrame实现</Menu.Item>
            <Menu.Item key="2" onClick={() => this.onJsonClick()}>JSON自定义实现</Menu.Item>
          </Menu>
        </Header>
        <Content className="content-panel"
                 style={{padding: '0 50px'}}>
          {
            this.state.selectedTab === 'iframe' ? <IFrame/> : <JsonRich/>
          }
        </Content>
      </Layout>
    );
  }
}
