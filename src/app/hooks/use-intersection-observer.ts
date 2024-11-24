import { useEffect, useRef, useState } from "react";
import { useDataContext } from "../contexts/DataContext";
import { sleep } from "./use-add-property";

const useIntersectionObserver = () => {
    const [limit, setLimit] = useState(10);
    const infiniteScrollRef = useRef(null);
    const [hasMore, setHasMore] = useState(true);
    const {
        data: { activeProperties },
    } = useDataContext()

    const properties = activeProperties.properties.slice(0, limit)

    useEffect(() => {
        if (properties.length === activeProperties.properties.length) {
            setHasMore(false)
        }
        if (properties.length < activeProperties.properties.length) {
            setHasMore(true);
        }

        const onIntersection = async (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting && hasMore) {
                await sleep(800)
                setLimit((prevLimit) => Math.min(prevLimit + 10, activeProperties.properties.length));
            }
        };

        const observer = new IntersectionObserver(onIntersection);

        if (infiniteScrollRef.current) {
            observer.observe(infiniteScrollRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [hasMore, limit, properties.length, activeProperties.properties]);


    return { infiniteScrollRef, hasMore, limit, activeProperties, properties, setHasMore, setLimit };
};

export default useIntersectionObserver;
