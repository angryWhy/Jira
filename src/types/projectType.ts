export type User = {
    id:string,
    name:string,
    personId:string,
    pin:boolean,
    organization:string,
    token?:string
}
export type Project = {
    id:string,
    name:string,
    personId:string,
    pin:boolean,
    organization:string
}