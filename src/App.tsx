import { FC, ReactNode } from 'react';
import { CanvasWrapper } from './components/CanvasWrapper';

type Props = {
  children?: ReactNode;
};

const App: FC<Props> = ({ children }) => {
  return (
    <CanvasWrapper>
      <h1>Hello world!</h1>
    </CanvasWrapper>
  );
};

export { App };