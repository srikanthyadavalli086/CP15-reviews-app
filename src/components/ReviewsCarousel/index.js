import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  onLeftArrow = () => {
    const {activeId} = this.state
    if (activeId > 0) {
      this.setState(prevState => ({activeId: prevState.activeId - 1}))
    }
  }

  onRightArrow = () => {
    const {activeId} = this.state
    const {reviewsList} = this.props
    if (activeId < reviewsList.length - 1) {
      this.setState(prevState => ({activeId: prevState.activeId + 1}))
    }
  }

  render() {
    const {activeId} = this.state
    const {reviewsList} = this.props
    const filteredItem = reviewsList[activeId]

    return (
      <div className="bg-container">
        <h1 className="reviews">Reviews</h1>
        <div className="container">
          <button
            onClick={this.onLeftArrow}
            type="button"
            className="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <div className="review-container">
            <img src={filteredItem.imgUrl} alt={filteredItem.username} />
            <p className="username">{filteredItem.username}</p>
            <p>{filteredItem.companyName}</p>
            <p>{filteredItem.description}</p>
          </div>

          <button
            onClick={this.onRightArrow}
            type="button"
            className="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
