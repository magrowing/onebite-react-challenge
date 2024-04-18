/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useGoBack() {
  const navigation = useNavigate();

  const handleGoBack = useCallback(() => {
    navigation(-1)
  },[]);

  return { handleGoBack }
}

export default useGoBack;
