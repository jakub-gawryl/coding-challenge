import { FC, ReactNode, useEffect, useState } from 'react';
import Konva from 'konva';
import styled from 'styled-components';
import { useStage } from '../../../../context/CanvasContext/hooks/useStage';

type Props = {
  children?: ReactNode;
};

const StyledCanvas = styled.div`
  border: 1px solid rgba(0, 0, 60, 0.25);
  background: #000;
  margin: 20px;
`;

const Canvas: FC<Props> = ({ children }) => {
  const { setStage } = useStage();

  useEffect(() => {
    const stage = new Konva.Stage({
      container: 'canva',
      width: 500,
      height: 500
    });

    setStage(stage);
  }, []);

  return (
    <StyledCanvas>
      <div id="canva"></div>
      {children}
    </StyledCanvas>
  );
};

export { Canvas };
