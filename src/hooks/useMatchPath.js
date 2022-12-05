import { matchPath, useLocation } from 'react-router-dom';

const useMatchPath = () => {
    const { pathname } = useLocation();
    return (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
}

export default useMatchPath