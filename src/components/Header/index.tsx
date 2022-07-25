import { useEffect } from 'react';
import { Logger } from '../utils';

export const Header = () => {
  useEffect(() => {
    Logger.info('Component - Header Rendered');
  }, []);

  return <div>HEADER</div>;
};
