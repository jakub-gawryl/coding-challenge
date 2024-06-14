import { Stage } from "konva/lib/Stage";
import { Dispatch, FC, ReactElement, createContext, useState } from "react";

type CanvasContextProps = {
  children?: ReactElement;
};
type ContextValues = {
  stage: Stage | undefined;
  setStage: Dispatch<React.SetStateAction<Stage | undefined>>;
};

const CanvasContext = createContext<ContextValues>({
  stage: undefined,
  setStage: () => {}
});
const CanvasContextProvider: FC<CanvasContextProps> = ({
  children,
}) => {
  const [ stage, setStage ] = useState<Stage>();

  return(
    <CanvasContext.Provider value={{
      stage,
      setStage
    }}>
      {children}
    </CanvasContext.Provider>
  );
};

export {
  CanvasContext,
  CanvasContextProvider
}