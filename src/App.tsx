import Controls from "react-ol/Controls";
import Map from "react-ol/map/Map";
import View from "react-ol/View";
import { FullScreen } from "react-ol/control";
import Layers from "react-ol/layer";
import TileLayer from "react-ol/layer/TileLayer";
import MapProvider from "react-ol/map/MapProvider";
import { OSM } from "react-ol/source";

export default function App() {
  return (
    <MapProvider>
      <div>
        <Map>
          <Layers>
            <TileLayer>
              <OSM />
            </TileLayer>
          </Layers>
          <View center={[0, 0]} zoom={2} />
          <Controls>
            <FullScreen />
          </Controls>
        </Map>
      </div>
    </MapProvider>
  );
}
