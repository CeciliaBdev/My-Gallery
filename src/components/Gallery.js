import React, { useState } from 'react'
import '../styles/gallery.css'
import data from '../datas/images.json'
import Lightbox from './Lightbox'

function Gallery() {
  const [clickedImg, setClickedImg] = useState(null)
  const [index, updateIndex] = useState(0)

  const handleClick = (item, index) => {
    updateIndex(index)
    setClickedImg(item.link)
  }
  //   console.log('data', data.data)
  const Prev = () => {
    console.log('click precedent')
    const totalLength = data.length
    if (index === 0) {
      updateIndex(totalLength - 1)
      const newUrl = data[totalLength - 1].link
      setClickedImg(newUrl)
      return
    }
    const newIndex = index - 1
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].link
    setClickedImg(newItem)
    updateIndex(newIndex)
  }
  const Suiv = () => {
    console.log('click suivant')
    const totalLength = data.length
    if (index + 1 >= totalLength) {
      updateIndex(0)
      const newUrl = data[0].link
      setClickedImg(newUrl)
      return
    }
    const newIndex = index + 1
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex
    })
    const newItem = newUrl[0].link
    setClickedImg(newItem)
    updateIndex(newIndex)
  }

  return (
    <div className="gallery_wrapper">
      <div className="gallery">
        {data.map((item, index) => (
          <div key={index} className="pictures">
            <img
              src={item.link}
              alt={item.text}
              // width="200px"
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}
        {clickedImg && (
          <Lightbox
            clickedImg={clickedImg}
            Prev={Prev}
            Suiv={Suiv}
            setClickedImg={setClickedImg}
          />
        )}
      </div>
    </div>
  )
}

export default Gallery
