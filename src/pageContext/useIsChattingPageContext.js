import { useContext } from 'react'
import IsChattingPageContext from './IsChattingPageContext';

export const useIsChattingPageContext = () => {
  const context = useContext(IsChattingPageContext);

  if(!context){
    throw new Error('Context not initialized');
  }

  return context;
}

