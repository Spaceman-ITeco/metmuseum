import {get} from "../api/api";
import {useEffect, useState} from "react";


export function DepartmentsPages()
{
 const [ , setDepartments] = useState([])

    useEffect( () =>{
        getDepartmentsList()
    },[])

    async function getDepartmentsList() {
        const departmentsList = await get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
          console.log(departmentsList)
        setDepartments(departmentsList)
    }
    return (<></>)
}