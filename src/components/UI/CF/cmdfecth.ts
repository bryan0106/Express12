import { useEffect, useState } from "react";





export const fetchme = <T>(apiUrl: string) => {
    const [data, setData] = useState<T[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const jsonData: T[] = await res.json();
                setData(jsonData);
            } catch (err: any) {
            }
        };
        fetchData();
    }, [apiUrl]); 

    return { data };
};

export const fetchschool = <T>(apiUrl: string) => {
    const [school, setData] = useState<T[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const jsonData: T[] = await res.json();
                setData(jsonData);
            } catch (err: any) {
            }
        };
        fetchData();
    }, [apiUrl]); 

    return { school };
};

export const fetchexperience = <T>(apiUrl: string) => {
    const [exper, setData] = useState<T[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const jsonData: T[] = await res.json();
                setData(jsonData);
            } catch (err: any) {
            }
        };
        fetchData();
    }, [apiUrl]); 

    return { exper };
};

export const fetchservice = <T>(apiUrl: string) => {
    const [service, setData] = useState<T[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const jsonData: T[] = await res.json();
                setData(jsonData);
            } catch (err: any) {
            }
        };
        fetchData();
    }, [apiUrl]); 

    return { service };
};

export const fetchSkills = <T>(apiUrl: string) => {
    const [skil, setData] = useState<T[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const jsonData: T[] = await res.json();
                setData(jsonData);
            } catch (err: any) {
            }
        };
        fetchData();
    }, [apiUrl]); 

    return { skil };
};

export const fetchProj = <T>(apiUrl: string) => {
    const [proj, setData] = useState<T[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const jsonData: T[] = await res.json();
                setData(jsonData);
            } catch (err: any) {
            }
        };
        fetchData();
    }, [apiUrl]); 

    return { proj };
};

export const fetchStack = <T>(apiUrl: string) => {
    const [stack, setData] = useState<T[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const jsonData: T[] = await res.json();
                setData(jsonData);
            } catch (err: any) {
            }
        };
        fetchData();
    }, [apiUrl]); 

    return { stack };
};