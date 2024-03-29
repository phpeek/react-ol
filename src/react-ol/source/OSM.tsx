import { useContext, useEffect } from "react";

// openlayers
import OSMSource from "ol/source/OSM";
import type { Options as OSMOptions } from 'ol/source/OSM'

// react-ol
import { TileLayerContext } from "react-ol/layer/TileLayer";

type OSMProps = OSMOptions; 

export default function OSM(props?: OSMProps) {
  const layer = useContext(TileLayerContext);

  useEffect(() => {
    if (!layer) return;

    const osm = new OSMSource(props);
    layer.setSource(osm);

    return () => {
      osm.dispose();
    };
  }, [props, layer]);

  return null;
}
