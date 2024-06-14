import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { CanvasContextProvider } from '../../context/CanvasContext';
import { Canvas } from './components/Canvas/Canvas';

type Props = {
  children?: ReactNode;
};

const StyledWrapper = styled.div`
  height: 100%;

  .canvas-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: auto;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      min-width: 800px;
      min-height: 800px;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
      background-color: #fff;
      border-radius: 6px;
    }
  }
`;

const CanvasWrapper: FC<Props> = ({ children }) => {
  return (
    <CanvasContextProvider>
      <StyledWrapper>
        <div className="canvas-wrapper">
          <div className="canvas-wrapper__inner">
            <Canvas />
            {children}
          </div>
        </div>
      </StyledWrapper>
    </CanvasContextProvider>
  );
};

export { CanvasWrapper };