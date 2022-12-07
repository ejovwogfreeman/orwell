const PicsBox = ({ img, text, text2, width, link, display, icon }) => {
  const disAbleReload = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ width: width }} className="picBox">
      <div className="img-container">
        <img src={img} alt="pic" />
      </div>
      <div style={{ display: display }} className="title">
        <p>
          {text} <br /> {text2}
        </p>
        <span>
          <a
            onClick={disAbleReload}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {icon}
          </a>
        </span>
      </div>
    </div>
  );
};

export default PicsBox;
