export default function({store, location, routes}) {
    const matchedRoute = routes[routes.length - 1];
    const defaultFetchData = () => Promise.resolve();
    const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;

    return fetchDataHandler({store, location});
}
