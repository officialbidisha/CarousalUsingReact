import "./CarousalItem.css";
const CarousalItem = (props) => {
  const { item, width } = props;
  const { avatar, content, href, name, id} = item;
  return (
    <div
      className="carousal-item"
      style={{ width: width, backgroundImage: `url(${avatar})` }}
    >
      <div className="container">
        <p className="text">{content}</p>

        <a href={href}>Reference</a>
        <p style={{color: "white"}}>{name } - {id}</p>
      </div>
    </div>
  );
};
export default CarousalItem;
