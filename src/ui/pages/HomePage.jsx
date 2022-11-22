import { Footer, ListInventory, NavBar, ShowCategories, SliderShow } from "../components";
import { Banner } from "../components/Banner";
import MapView from "../components/Map/MapView";


export const HomePage = () => {
  return (
    <div >
      
      <NavBar />

      <Banner />

      {/* <h1 className="top">
        {" "}
        <strong> Nuestros Productos </strong>
      </h1>
      <Slider />
      <hr />
      <hr /> */}

      <SliderShow />



      
      <h1 className="top">
        {" "}
        <strong> Nuestra Ubicacion </strong>
      </h1>

      <MapView />

      <h1 className="top">
        {" "}
        <strong> Nuestras Categorias </strong>
      </h1>

      <ShowCategories />


      <h1 className="top">
        {" "}
        <strong> Nuevos Productos </strong>
      </h1>

      <ListInventory />

      <Footer />
    </div>
  );
};
