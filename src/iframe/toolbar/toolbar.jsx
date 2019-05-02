import React, {Component} from 'react';
import {Button} from 'antd';
const ButtonGroup = Button.Group;
import richTextCmd from '../rich-text-cmd';


export default class Toolbar extends Component {

  constructor(options) {
    super(options);
    this.onClickBold = this.onClickBold.bind(this);
    this.onClickItalic = this.onClickItalic.bind(this);
    this.onClickFontSize = this.onClickFontSize.bind(this);
    this.onClickLink = this.onClickLink.bind(this);
    this.onClickFontMenu = this.onClickFontMenu.bind(this);
  }

  onClickBold() {
    this.props.onAction(richTextCmd.newBoldCmdMsg());
  }

  onClickItalic() {
    this.props.onAction(richTextCmd.newItalicCmdMsg())
  }

  onClickFontSize() {
    this.props.onAction(richTextCmd.newFontSizeCmdMsg(Math.floor(Math.random() * 8)));
  }

  onClickLink() {
    this.props.onAction(richTextCmd.newFontSizeCmdMsg(Math.floor(Math.random() * 8)))
  }

  onClickFontMenu() {
    // this.props.onAction(richTextCmd.new)
  }


  render() {
    return <div className="toolbar">
      <ButtonGroup>
        <Button onClick={() => this.onClickBold()}>B</Button>
        <Button onClick={this.onClickItalic}>I</Button>
        <Button onClick={this.onClickFontSize}>字体大小</Button>
        <Button onClick={this.onClickLink}>Link</Button>
        <Button onClick={this.onClickFontMenu}>字体</Button>
      </ButtonGroup>
    </div>
  }
}
