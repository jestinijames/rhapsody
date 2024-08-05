import React, { createContext, ReactNode, useState } from 'react';

interface MapContextType {
  mapDirection: [number, number];
  setMapDirection: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export const MapContext = createContext<MapContextType | null>(null);

interface MapDirectionProviderProps {
  children: ReactNode;
}

const MapDirectionProvider: React.FC<MapDirectionProviderProps> = ({
  children,
}) => {
  const [mapDirection, setMapDirection] = useState<[number, number]>([
    35.9588148, -80.0130777,
  ]);

  return (
    <MapContext.Provider value={{ mapDirection, setMapDirection }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapDirectionProvider;
