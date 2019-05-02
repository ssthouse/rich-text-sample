class RichTextCmd {
  newBoldCmdMsg() {
    return {
      type: 'cmd',
      cmd: 'bold'
    };
  }

  newItalicCmdMsg() {
    return {
      type: 'cmd',
      cmd: 'italic'
    };
  }

  newFontSizeCmdMsg(value) {
    return {
      type: 'cmd',
      cmd: 'fontSize',
      value: value + '' || '0'
    }
  }
}

export default new RichTextCmd();
