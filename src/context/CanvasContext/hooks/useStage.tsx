import { useContext } from "react";
import { CanvasContext } from "../CanvasContext";

export const useStage = () => {
  const { setStage, stage } = useContext(CanvasContext);

  return { setStage, stage };
};