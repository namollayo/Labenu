export type TPerson = {
    id: string | number,
    name: string,
    email: string,
    password: string,
    role: string
}

const user: TPerson ={
    id: 'AAAAAA',
    name: "Zhongli",
    email: "rexlapis@gmail.com",
    password: "liyue123",
    role: "Admin"
}

export type TAdminAccount = {
    nickname:string,
    permission: boolean
}
export type TNormalAccount = {
    nickname:string,
    permission: boolean
}


const teste = true 

const userAdmin: TAdminAccount = {
    nickname: "Zhongli",
    permission: teste
}

const userNormal: TNormalAccount = {
    nickname: "Childe",
    permission: false
}

enum ROLE {
    ADMIN = 'Admin',
    NORMAL = 'Normal'
}

const usuario : TPerson = {
    id: 1,
    name:'Matheus',
    email: 'matheus@email.com',
    password: '123456',
    role: ROLE.ADMIN

}

type TPersonAdmin = TPerson & TAdminAccount 

const usuarioAdmin: TPersonAdmin = {
    id:100,
    name:'chris',
    email:'chris@email.com',
    password: '654321',
    role: ROLE.ADMIN,
    nickname:'Chris',
    permission: teste
}

type TPersonNormal = TPerson & TNormalAccount

const usuarioNormal: TPersonNormal = {
    id:101,
    name:'Brasil',
    email:'brasil@email.com',
    password: '456987123',
    role: ROLE.NORMAL,
    nickname:'TBrasil',
    permission: false
}

const arrayPersonRole: (TPersonAdmin | TPersonNormal)[] = [usuarioAdmin, usuarioNormal]
const arrayPersonRole2: Array<TPersonAdmin | TPersonNormal> = [usuarioAdmin, usuarioNormal]


console.log(arrayPersonRole2);
