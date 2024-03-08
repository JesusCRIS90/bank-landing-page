function Image({ ImageInfo }) {
  return (
    <>
      <img
        src={ImageInfo.src}
        className={ImageInfo.className}
        alt={ImageInfo.alt}
      />
    </>
  );
}

export default Image;
