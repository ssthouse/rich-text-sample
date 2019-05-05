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
      value: value + '' || '1'
    }
  }

  newLinkCmdMsg(uri) {
    return {

      type: 'cmd',
      cmd: 'createLink',
      value: uri || ''
    }
  }

  newFontNameCmdMsg(fontName) {
    return {
      type: 'cmd',
      cmd: 'fontName',
      value: fontName || "Arial"
    }
  }
}

export default new RichTextCmd();
