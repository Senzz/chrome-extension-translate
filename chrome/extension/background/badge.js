chrome.tabs.onActivated.addListener(function (activeInfo) {
  if (activeInfo.tabId) {
    chrome.tabs.executeScript(activeInfo.tabId, {
      code: `
        document.body.style.background = 'blue';
      `,
      runAt: 'document_end'
    }, () => {
      console.log('id', activeInfo.tabId)
    })
  }
});

