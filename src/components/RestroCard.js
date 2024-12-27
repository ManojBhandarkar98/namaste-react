const RestroCard = (props) => {
    const { restData } = props;

    const { name, cuisines, avgRating, sla,cloudinaryImageId } = restData?.info;
    return (
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="rest-logo"
                src={cloudinaryImageId} alt="rest-logo" />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} rating</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}
export default RestroCard;
