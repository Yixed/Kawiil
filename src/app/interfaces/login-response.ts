export interface LoginResponse {
    succes: boolean
    token: string
    user: LoginUser
  }
  
  export interface LoginUser {
    _id: string
    name: string
    surname: string
    email: string
    password: string
    role: string
    userInvoices: UserInvoice[]
    __v: number
  }
  
  export interface UserInvoice {
    _id: string
    company: string
    creationDate: string
    name: string
    description: string
    amount: number
    file: string
    __v: number
  }