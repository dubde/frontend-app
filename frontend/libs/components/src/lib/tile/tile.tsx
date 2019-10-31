import React, { useState, useEffect } from 'react';

import { TileValue } from '@frontend/models';

export interface TileProps {
  id: string;
  value: TileValue;
  onClickHandler;
}

export const Tile = (props: TileProps) => {

  const [tileValue, setState] = useState(null);

  useEffect(() => setState(props.value),[props.value])

  return <td key={props.id} onClick={!tileValue ? props.onClickHandler : undefined }>{tileValue}</td>;
};

export default Tile;
