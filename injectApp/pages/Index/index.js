import React from 'react'
import styles from './index.less'
import translateIcon from '../../assets/translate-icon.png'
import getSelection from './getSelection'
import classnames from 'classnames'

export default class extends React.Component {
  state = {
    x: 0,
    y: 0,
    content: '',
    translated: false,
    audioSrc: '',
    translateData: {}
  }
  componentDidMount() {
    document.addEventListener('keyup', async (e) => {
      if (e.keyCode === 16) {
        const state = getSelection(this.state.content, e, this.root);
        state && await this.setState(state);
      }
    }, false);
    document.addEventListener('mouseup', async (e) => {
      const state = getSelection(this.state.content, e, this.root);
      state && await this.setState(state);
    }, false);
  }
  translate = async (e) => {
    const { content } = this.state;
    console.log(content);
    
    chrome.extension.sendRequest({ type: "translate", content }, async (res) => {
      await this.setState({
        translated: true,
      });
      console.log('res', res);
    });
    e.stopPropagation();
  }
  playVoice = (e) => {
    console.log('playVoice')
    const { content } = this.state;
    chrome.extension.sendRequest({ type: "playVoice", content });
    e.stopPropagation();
  }
  render() {
    const { x, y, content, translated, audioSrc } = this.state;
    console.log(translated);
    const Content = () => {
      if (translated) {
        return (
          <div data-id='s-translate-play' className={styles['translate-wrapped']} onClick={this.playVoice}>
            play
          </div>
        );
      }
      return (
        <img data-id='s-translate-t' onClick={this.translate} src={translateIcon} alt='T' />
      );
    }
    return (
      <div ref={el => this.root = el} className={styles['root']} >
        <div className={classnames(styles['translate-icon'], { [styles['hide']]: !content })} style={{ left: x, top: y }}>
          <Content />
          <audio ref={el => this.audio = el} src={audioSrc} preload='auto'></audio>
        </div>
      </div>
    )
  }
}