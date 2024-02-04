import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//  prisma.user // how does it know that it already have prisma.user / prisma.todo 
// when we run the command npx prisma generate it will generate the tables 
// so automated clients have generated 

async function insertUser(username:string, password:string, firstName:string, lastName:string){

    const res = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        },
        // select:{
        //     id:true,
        //     password:true
        // }
    })
    console.log(res);

}
insertUser("revanthkothuri@gmail.com", "1234567890", "manvanthsai", "kothuri")