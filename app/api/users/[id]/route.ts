import {NextResponse} from "next/server";
import {User} from "@/slice/user";

type MyResponse = {
    status: 'success' | 'failed',
    data: User
}
export const GET = (req:Request, {params}:{params:{id:string}}):NextResponse<MyResponse> =>{
    console.log({id:params.id})
    return NextResponse.json({
        status: 'success',
        data: {
            id:params.id,
            name: "alexanda malecha",
            email:'alexismalecha@gmail.com'
        }
    })
}