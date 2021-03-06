import React, {Component} from 'react';
import iframeTemplate from './template.html';
import Toolbar from './toolbar/toolbar.jsx';
import {Button} from 'antd'

export default class IFrame extends Component {

  constructor(options) {
    super(options);
    this.initWindowListener();
    this.onToolbarAction = this.onToolbarAction.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickLoadStorage = this.onClickLoadStorage.bind(this);
  }

  initWindowListener() {
    window.addEventListener('message', event => {
      const content = event.data.content;
      localStorage.setItem('iframeContent', content);
    })
  }


  loadIframeContent(content) {
    this.getIframe().src = "data:text/html;charset=utf-8," + iframeTemplate.replace('$body', content);
  }

  initIframe() {
    this.loadIframeContent('');
  }

  componentDidMount() {
    this.initIframe();
  }

  onToolbarAction(cmdEvent) {
    this.getIframe().contentWindow.postMessage(cmdEvent, '*');
  }

  onClickSave() {
    this.getIframe().contentWindow.postMessage({
      type: 'getContent'
    }, '*');
  }

  onClickLoadStorage() {
    const content = localStorage.getItem('iframeContent') || '';
    this.loadIframeContent(content);
  }

  getIframe() {
    return document.getElementById('iframe');
  }

  render() {
    return (
      <div>
        <div className="tool-bar">
          <Toolbar onAction={this.onToolbarAction}/>
        </div>
        <div className="editor-content">
          <iframe id="iframe"
                  src="javascript:void(0);"/>
        </div>
        <Button onClick={this.onClickSave}>Save</Button>
        <Button onClick={this.onClickLoadStorage}>Load last saved content</Button>
      </div>
    );
  }
}
