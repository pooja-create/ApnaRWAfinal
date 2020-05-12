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
export interface AppUser1{
  name: string;
  email: string;
  isSuperadmin: boolean;
}