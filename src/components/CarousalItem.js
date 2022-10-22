import "./CarousalItem.css";
const CarousalItem = (props) => {
    const {item, width} = props;
    const {avatar,content,href,name,id} = item;
    return (
        <div className="carousal-item" style={{width: props.width}}>
            <p>{content}</p>
        </div>
    )
}
export default CarousalItem;