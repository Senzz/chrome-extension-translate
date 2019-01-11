const Api = require('./services/api')

chrome.extension.onRequest.addListener(CHandle);

function CHandle (request, sender, sendResponse) {
  const { type, content } = request;
  switch(type) {
    case 'playVoice': {
      Api.voice(content, 'en').then(audioSrc => {
        const audio = new Audio();
        audio.src = audioSrc;
        audio.play();
        sendResponse({})
      });
      return;
    }
    case 'translate': {
      Api.translate(content, {
        from: 'en',
        to: 'zh-CN'
      }).then(res => {
        sendResponse(res);
      });
      return;
    }
    default: {
      sendResponse({});
      return;
    }
  }
};