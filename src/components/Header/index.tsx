import { useEffect } from 'react';
import { Logger } from '../utils';

export const Header = () => {
  useEffect(() => {
    Logger.info('Component - Header UseEffect');
  }, []);

  return <div>HEADER</div>;
};
