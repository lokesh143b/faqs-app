import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isClickedBtn: false}

  componentWillUnmount() {
    this.setState({isClickedBtn: false})
  }

  faqAnswerText = () => {
    const {faqsItem} = this.props
    const {answerText} = faqsItem

    return (
      <div className="answer-text-container">
        <hr />
        <p className="answer-text">{answerText}</p>
      </div>
    )
  }

  onClickBtn = () => {
    this.setState(prevState => ({isClickedBtn: !prevState.isClickedBtn}))
  }

  plusAndMinusImg = () => {
    const {isClickedBtn} = this.state

    const clickedImg = isClickedBtn
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return clickedImg
  }

  render() {
    const {isClickedBtn} = this.state
    const {faqsItem} = this.props
    const {questionText} = faqsItem

    const imgAltText = isClickedBtn ? 'plus' : 'minus'

    return (
      <li className="faqs-item-container">
        <div className="faq-item">
          <h1>{questionText}</h1>
          <button
            onClick={this.onClickBtn}
            className="plus-minus-btn"
            type="button"
          >
            <img src={this.plusAndMinusImg()} alt={imgAltText} />
          </button>
        </div>
        {isClickedBtn && this.faqAnswerText()}
      </li>
    )
  }
}

export default FaqItem
