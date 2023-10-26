'use client'
// import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppRoot} from "@/store";
import {addUser, User} from "@/slice/user";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {useGetProductByNameQuery} from "@/app/api/test";
export default function Home() {
  // const {user} = useSelector((state:AppRoot)=>state);

  // const dispatch = useDispatch<AppDispatch>();
  const {user} = useAppSelector(state=>state.user)
  const dispatch = useAppDispatch()
  const handleUserAdd = async () =>{
    const res = await fetch('/api/users/2')

    const userData = await res.json()as User
    // console.log(user.email)
    // const userData = {
    //   id:'1',
    //   name:'alexanda francis malecha',
    //   email:'alexismalecha@gmail.com'
    // };
    // // dispatch({
    // //   type:'user/requested',
    // //   payload:userData
    // // })
    dispatch(addUser(userData))
  }

  const {data} = useGetProductByNameQuery("");

  return (
    <>
    <p>Redux toolkit</p>
      <button onClick={handleUserAdd}>Add User</button>

      <pre>
        {JSON.stringify(user,null,2)}
      </pre>

      <p>rtk-query data: {JSON.stringify(data)}</p>

    </>
  )
}
