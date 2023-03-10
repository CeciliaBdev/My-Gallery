function Lightbox({ clickedImg, Prev, Suiv, setClickedImg }) {
  const Close = () => {
    // console.log('click')
    setClickedImg(null)
  }

  return (
    <div className="lightbox_content">
      <div className="lightbox_gallery">
        <i className="fas fa-chevron-left boutonPrev left" onClick={Prev}></i>
        <img src={clickedImg} alt="galerie photos" width="600px" />
        <i className="fas fa-chevron-right boutonSuiv" onClick={Suiv}></i>
      </div>
      <span className="close" onClick={Close}>
        <i className="fas fa-times-circle"></i>
      </span>
    </div>
  )
}
export default Lightbox
