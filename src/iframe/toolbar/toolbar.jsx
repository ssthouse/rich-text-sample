import React, {Component} from 'react';
import {Button, Popover, Input} from 'antd';
import richTextCmd from '../rich-text-cmd';
import './toolbar.css';

const ButtonGroup = Button.Group;


export default class Toolbar extends Component {

  constructor(options) {
    super(options);

    this.state = {
      urlValue: ''
    };

    this.onClickBold = this.onClickBold.bind(this);
    this.onClickItalic = this.onClickItalic.bind(this);
    // this.onClickFontSize = this.onClickFontSize.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
    this.onClickFontMenu = this.onClickFontMenu.bind(this);

    this.onConfirmUrl = this.onConfirmUrl.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onClickBold() {
    this.props.onAction(richTextCmd.newBoldCmdMsg());
  }

  onClickItalic() {
    this.props.onAction(richTextCmd.newItalicCmdMsg())
  }

  onClickLink() {
    this.props.onAction(richTextCmd.newFontSizeCmdMsg(Math.floor(Math.random() * 8)))
  }

  onClickFontMenu(size) {
    switch (size) {
      case 'small':
        this.props.onAction(richTextCmd.newFontSizeCmdMsg(1));
        break;
      case 'medium':
        this.props.onAction(richTextCmd.newFontSizeCmdMsg(4));
        break;
      case 'large':
        this.props.onAction(richTextCmd.newFontSizeCmdMsg(7));
        break;
    }
  }

  onConfirmUrl() {
    this.props.onAction(richTextCmd.newLinkCmdMsg('https://baidu.com'));
  }

  onInputChange(event) {
    this.setState({
      urlValue: event.target.value
    });
  }

  render() {
    const fontMenuContent = (
      <div className="selector-panel">
        <span onClick={() => this.onClickFontMenu('small')}>小</span>
        <span onClick={() => this.onClickFontMenu('medium')}>中</span>
        <span onClick={() => this.onClickFontMenu('large')}>大</span>
      </div>
    );

    const linkMenuContent = (
      <div className="link-menu-panel">
        <Input placeholder='请输入跳转链接' onChange={this.onInputChange}/>
        <Button onClick={this.onConfirmUrl}
                className="confirm-btn"
                value={this.state.urlValue}>Confirm</Button>
      </div>
    );


    return <div className="toolbar">
      <ButtonGroup>
        <Button onClick={this.onClickBold}>B</Button>
        <Button onClick={this.onClickItalic}>I</Button>
        <Popover content={fontMenuContent}>
          <Button>字体大小</Button>
        </Popover>
        <Popover content={linkMenuContent}>
          <Button onClick={this.onClickLink}>Link</Button>
        </Popover>
        <Button onClick={this.onClickFontMenu}>字体</Button>
      </ButtonGroup>
    </div>
  }
}
