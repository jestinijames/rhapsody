import React, { createContext, useState } from 'react';

import { MapContextType, MapDirectionProviderProps } from '@/types/types';

export const MapContext = createContext<MapContextType | null>(null);

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
