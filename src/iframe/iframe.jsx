import React, {Component} from 'react';
import iframeTemplate from './template.html';

export default class IFrame extends Component {


  initIframe() {
    const content = 'test content';
    const iframe = document.getElementById('iframe')
    iframe.src = "data:text/html;charset=utf-8," + iframeTemplate.replace('${content}', content);
  }


  componentDidMount() {
    this.initIframe();
  }

  render() {
    return (
      <div>
        <div className="tool-bar">
          <span>this is the toolbar</span>
        </div>
        <div className="editor-content">
          <iframe id="iframe"
                  src="javascript:void(0);"/>
        </div>
      </div>
    );
  }
}
