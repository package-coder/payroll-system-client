import { matchPath, useLocation } from 'react-router-dom';

const useMatchPath = () => {
    const { pathname, search } = useLocation();
    console.log(pathname)
    return (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
}

export default useMatchPath