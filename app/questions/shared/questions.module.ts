/**
 * Created by rakesh on 31-Oct-2017.
 */
export interface Question{
    id:number,
    question:string,
    options:Options
}

export interface Options{
    options:Option[]
}

export interface Option{
    description:String
}