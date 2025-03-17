import { useState } from 'react';

const useDemo = () => {
  const [demoValue, setDemoValue] = useState('Initial Demo Value');

  const updateDemoValue = () => {
    setDemoValue('Updated Demo Value');
  };

  const resetDemoValue = () => {
    setDemoValue('Initial Demo Value');
  };

  return { demoValue, updateDemoValue, resetDemoValue };
};

export default useDemo;