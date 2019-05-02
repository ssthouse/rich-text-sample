import React, {Component} from 'react';
import iframeTemplate from './template.html';
import Toolbar from './toolbar/toolbar.jsx';

export default class IFrame extends Component {

  constructor(options) {
    super(options);
    this.onToolbarAction = this.onToolbarAction.bind(this);
  }

  initIframe() {
    const content = 'test content';
    const iframe = document.getElementById('iframe');
    iframe.src = "data:text/html;charset=utf-8," + iframeTemplate.replace('${content}', content);
  }

  componentDidMount() {
    this.initIframe();
  }

  onToolbarAction(cmdEvent) {
    document.getElementById('iframe').contentWindow.postMessage(cmdEvent, '*');
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
      </div>
    );
  }
}
