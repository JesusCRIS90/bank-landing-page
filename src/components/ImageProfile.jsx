function ImageProfile({ info }) {
  return (
    <>
      <img src={info.src} className={info.className} alt={info.alt} />
    </>
  );
}

export default ImageProfile;
