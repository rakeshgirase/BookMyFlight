export interface IFlight{
    id:number,
    name:string,
    from:string,
    to:string,
    date: Date,
    time: string,
    price: number,
    imageUrl: string,
    location?: {
        address: string,
        city: string,
        country: string
    },
    onlineUrl: string,
    sessions?: ISession[]
}

export interface ISession{
    id:number,
    name:string,
    pilot:string,
    duration:string,
    level: string,
    abstract: string,
    voters: string[]
}