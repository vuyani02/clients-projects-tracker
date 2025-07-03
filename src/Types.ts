import { ChangeEvent } from "react"

export type clientDataType = {
    client: string,
    country: string,
    email: string,
    project: string,
    progress: string,
    status: string,
    date: string,
    image: string
};

export type clientsDataType = {data: clientDataType[],
    setData: React.Dispatch<React.SetStateAction<clientDataType[]>>,
    pageNumber: number
};

export type sortPropType = {sortProjects: (option: string) => void};

export type filterPropType = {filterProjects: (e: ChangeEvent<HTMLInputElement>) => void};