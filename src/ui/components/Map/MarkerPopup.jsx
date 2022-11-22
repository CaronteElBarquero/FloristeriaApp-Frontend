import { Popup } from "react-leaflet";

export const MarkerPopup = (props) => {
  const { name } = props.data;
  return (
    <Popup>
      <div>{name}</div>
    </Popup>
  );
};

