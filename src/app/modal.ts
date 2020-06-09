export interface Inter1 {
    
    societyno: number;
    fname: string;
    lname: string;
    email: string;
    mobileno: number;
    uid: string;
}
export interface Inter2 {
    sname: string;
    address: string;
    societyno: number;
}
export interface Feed {
    sname?: string;
    address?: string;
    societyno?: number;
    name?: string;
    country?: string;
    uid?: string;
}
export interface usersign {

    id: string;
    username: string;
    mobileno: number;
    password: string;
    snumber: number;
}
export interface userlogin {

    id: string;
    fname: string;
    lname: string;
    email: string;
    mobileno: number;
    password: string;
    societyno: number;
}
export interface userProfile {

    uid: string;
    fname: string;
    lname: string;
    email: string;
    mobileno: string;
    societyno: string;
}
export interface Activity {
    id:string;
    uid:string;
    adate: string;
    aimage: string;
    adetail: string;
    atitle: string;
    societyno: number;
}
export interface Member {
    id: string;
    sname: string;
    snumber: number;
    simage: string;
    societyno: number;
    pname: string;
    pimage: string;
    pnumber: number;
}
export interface Services {

    id: string;
    societyno: number;
    category: string;
    name: string;
    aadharno: number;
    mobileno: number;
    image: string;
}
export interface Office {

    id: string;
    societyno: number;
    officebname: string;
    des: string;
}
export interface AppUser
{
  name: string;
  email: string;
  isAdmin?: boolean;
}
export interface AppUsersuper
{
  name: string;
  email: string;
  isSuperAdmin?: boolean;
}
export interface AppUser1{
  name: string;
  email: string;
  isSuperadmin: boolean;
}
export interface Activityd{
    id:string;
    uid: string;
    societyno: number;
    atitle: string;
    aimage: string;
    adetail: string;
    adate: string;
}
export interface Memberm{
    societyno: number;
    pname: string;
    pimage:string;
    pnumber: number;
    sname:string;
    simage:string;
    snumber: number;
}
export interface Superadmin{
    societyno:number;
    rname:string;
    street:string;
    landmark:string;
    local:string;
    city:string;
    state:string;
    pin:number;
    rnumber:number;
    ron: string;
    sname:string;
    sno:number;
    pname:string;
    pno:number;
    email:string;
}
export interface Officebearers{
    societyno:number;
    officebname:string;
    des:string;

}
export interface ServiceI{
    id:string;
    societyno:number;
    category:string;
    name:string;
    aadharno:number;
    mobileno:number;
    image:string;
}
export interface Chat{
   
    des: string;
    officebname: string;
    societyno: number;
  }

  export interface Activitydetail{
    id: string;
    societyno: number;
    atitle: string;
    aimage: string;
    adetail: string;
    adate: string;
}
export interface Act{
    id: string;
    uid:string;
    societyno: number;
    atitle: string;
    aimage: string;
    adetail: string;
    adate: string;
}
export interface rwarules{
    rwarules: string;
    societyno: number;
}