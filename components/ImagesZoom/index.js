import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-slick';
import styled from 'styled-components';

const ModalWrap = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const SlideHeader = styled.div`
  height: 44px;
  background: #fff;
  position: relative;
  padding: 0;
  text-align: center;
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
  & button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
  }
`

const SlideWrap = styled.div`
  height: cal(100% - 44px);
  background: #090909;
`

const ImageWrap = styled.div`
  padding: 32px;
  text-align: center;
  & img {
    display: block;
    margin: 0 auto;
    max-height: 750px;
  }
`

const Indicator = styled.div`
  text-align: center;
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`

const ImagesZoom = ({ images, onClickClose }) => {
  const [ currentSlide, setCurrentSlide ] = useState(0)

  return (
    <ModalWrap>
      <SlideHeader>
        <h1>상세 이미지</h1>
        <button onClick={onClickClose}>X</button>
      </SlideHeader>
      <SlideWrap>
        <div>
          <Slide
            initialSlide={0}
            afterChange={slide => setCurrentSlide(slide)}
            infinite
            arrow={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map(image => (
              <ImageWrap key={image.src}>
                <img src={image.src} alt={image.src} />
              </ImageWrap>
            ))}
          </Slide>
        </div>
      </SlideWrap>
    </ModalWrap>
  )
}

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickClose: PropTypes.func.isRequired,
}

export default ImagesZoom;