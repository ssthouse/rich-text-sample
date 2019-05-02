import React, {Component} from 'react';
import iframeTemplate from './template.html';
import {Button} from 'antd';
import richTextCmd from './rich-text-cmd';

const ButtonGroup = Button.Group;

export default class IFrame extends Component {

  constructor(options) {
    super(options);

    this.onClickBold = this.onClickBold.bind(this);
    this.onClickItalic = this.onClickItalic.bind(this);
    this.onClickBigger = this.onClickBigger.bind(this);
    this.onClickSmaller = this.onClickSmaller.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
    this.onClickFontMenu = this.onClickFontMenu.bind(this);
  }

  initIframe() {
    const content = 'test content';
    const iframe = document.getElementById('iframe');
    iframe.src = "data:text/html;charset=utf-8," + iframeTemplate.replace('${content}', content);


  }

  onClickBold() {
    this.getFrameWindow().postMessage(richTextCmd.newBoldCmdMsg(), '*');
  }

  onClickItalic() {
    this.getFrameWindow().postMessage(richTextCmd.newItalicCmdMsg(), '*');
  }

  onClickFontSize() {
    this.getFrameWindow().postMessage(richTextCmd.newFontSizeCmdMsg(Math.floor(Math.random() * 8)));
  }

  onClickLink() {

  }

  onClickFontMenu() {

  }

  getFrameWindow() {
    return document.getElementById('iframe').contentWindow;
  }


  componentDidMount() {
    this.initIframe();
  }

  render() {
    return (
      <div>
        <div className="tool-bar">
          <ButtonGroup>
            <Button onClick={() => this.onClickBold()}>B</Button>
            <Button onClick={this.onClickItalic}>I</Button>
            <Button onClick={this.onClickFontSize}>字体大小</Button>
            <Button onClick={this.onClickLink}>Link</Button>
            <Button onClick={this.onClickFontMenu}>字体</Button>
          </ButtonGroup>
        </div>
        <div className="editor-content">
          <iframe id="iframe"
                  src="javascript:void(0);"/>
        </div>
      </div>
    );
  }
}
