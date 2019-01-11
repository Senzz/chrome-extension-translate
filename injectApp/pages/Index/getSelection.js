import { getBodyElement } from '../../utils'
export default (preContent, e, rootEle) => {
  try {
    console.log(rootEle.contains(e.target), e.target);
    if (rootEle.contains(e.target)) {
      return false;
    }
    const selection = window.getSelection();
    const content = selection.toString().trim();

    if (content === preContent) {
      console.log('same')
      return false;
    }
    const result = {
      content,
      x: 0,
      y: 0
    }
    console.log(!!content)
    if (!!content) {
      const rangeEle = selection.getRangeAt(0);
      let { x, y, width, height } = rangeEle.getBoundingClientRect();
      const { scrollTop, scrollLeft } = getBodyElement();

      result.x = x + scrollLeft + width / 2;
      result.y = y + scrollTop + height;
    } else {
      result.translated = false;
    }
    return result;
  } catch (e) {
    console.warn(e);
    return {
      content: '',
      translated: false,
      audioSrc: '',
    }
  }
}