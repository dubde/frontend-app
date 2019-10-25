import React, { useState, useEffect } from 'react';

import './tile.css';
import { TileValue } from '@frontend/models';

export interface TileProps {
  value: TileValue;
  onClickHandler;
}

export const Tile = (props: TileProps) => {

  const [tileValue, setState] = useState(null);

  useEffect(() => setState(props.value),[props.value])

  return <td onClick={!tileValue ? props.onClickHandler : undefined }>{tileValue}</td>;
};

export default Tile;
