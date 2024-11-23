import { useEffect, useRef, useState } from "react";
import { sleep } from "./use-add-property";

const useIntersectionObserver = (data, total) => {
    const [limit, setLimit] = useState(10);
    const infiniteScrollRef = useRef(null); 
    const [hasMore, setHasMore] = useState(true); 
    console.log("🚀 ~ useIntersectionObserver ~ hasMore:", hasMore)

    useEffect(() => {
        if(data.length < total) {
            setHasMore(true)
        }
        if (total) {
            setHasMore(data.length < total);
        }

        const onIntersection = async (entries) => {
            if (entries[0].isIntersecting && hasMore) {
                await sleep(800)
                setLimit((prevLimit) => Math.min(prevLimit + 10, total)); 
            }
        };

        const observer = new IntersectionObserver(onIntersection);

        if (infiniteScrollRef.current) {
            observer.observe(infiniteScrollRef.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [hasMore,limit, total, data.length]);

    return { infiniteScrollRef, hasMore, limit };
};

export default useIntersectionObserver;
