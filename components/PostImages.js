import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom/index';

const PostImages = ({ images }) => {
  const [ isZoom, setIsZoom ] = useState(false)

  const onClickZoom = useCallback(() => {
    setIsZoom(true)
  }, [])

  const onClickClose = useCallback(() => {
    setIsZoom(false)
  }, [])

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onClickZoom}
        />
        {isZoom && <ImagesZoom images={images} onClickClose={onClickClose} />}
      </>
    )
  } else if (images.length === 2) {
    return (
      <>
        <img
          style={{ display: "inline-block", width: "50%" }}
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onClickZoom}
        />
        <img
          style={{ display: "inline-block", width: "50%" }}
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onClickZoom}
        />
        {isZoom && <ImagesZoom images={images} onClickClose={onClickClose} />}
      </>
    )
  } else {
    return (
      <>
        <div>
          <img
            role="presentation"
            width="50%"
            src={images[0].src}
            alt={images[0].src}
            onClick={onClickZoom}
          />
          <div
            role="presentation"
            style={{
              display: 'inline-block',
              width: '50%',
              textAlign: 'center',
              verticalAlign: 'middle'
            }}
            onClick={onClickZoom}
          >
            <PlusOutlined />
            <br />
            {images.length - 1}개의 사진 더보기
          </div>
        </div>
        {isZoom && <ImagesZoom images={images} onClickClose={onClickClose} />}
      </>
    )
  }
}

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
}

export default PostImages;