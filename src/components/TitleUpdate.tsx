import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const TitleUpdater: React.FC = () => {
  const currentPath = useParams();
  let lastValue = Object.values(currentPath).pop() || "";
  lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);

  useEffect(() => {
    if (lastValue === "") {
      document.title = "Home | Resume";
    } else {
      document.title = lastValue + " | Resume";
    }
  }, [lastValue]);
  
  return null; 
};

export default TitleUpdater;
