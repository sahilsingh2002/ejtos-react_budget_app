import React, {useState} from 'react'
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md"

function ExpenseItem() {
  const [Marketing, setMarketing] = useState(50);
  const [finance, setFinance] = useState(50);
  const [Sales, setSales] = useState(50);
  const [HR, setHR] = useState(50);
  const [IT, setIT] = useState(50);
  return (
<div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs  uppercase ">
            <tr>
                <th scope="col" className="px-6 py-3 ">
                    Department
                </th>
                <th scope="col" className="px-6 py-3">
                    Allocated Price
                </th>
                <th scope="col" className="px-6 py-3 ">
                    Increase by 10
                </th>
                <th scope="col" className="px-6 py-3">
                    Decrease by 10
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap b">
                   Marketing
                </th>
                <td className="px-6 py-4">
                    {Marketing}
                </td>
                <td className="px-6 py-4 ">
                    <FaPlusCircle className='w-8 h-8 text-green-500' onClick={()=>{
                      setMarketing(Marketing+10)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <FaMinusCircle className='w-8 h-8 text-red-500'  onClick={()=>{
                      Marketing>0?setMarketing(Marketing-10):setMarketing(0)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <MdCancel />
                </td>
              
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                   Finance
                </th>
                <td className="px-6 py-4">
                    {finance}
                </td>
                <td className="px-6 py-4 ">
                    <FaPlusCircle className='w-8 h-8 text-green-500' onClick={()=>{
                      setFinance(finance+10)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <FaMinusCircle className='w-8 h-8 text-red-500' onClick={()=>{
                      finance>0?setFinance(finance-10):setFinance(0)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <MdCancel />
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    Sales
                </th>
                <td className="px-6 py-4">
                    70
                </td>
                <td className="px-6 py-4 ">
                    <FaPlusCircle className='w-8 h-8 text-green-500' onClick={()=>{
                      setSales(Sales+10)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <FaMinusCircle className='w-8 h-8 text-red-500' onClick={()=>{
                      Sales>0?setSales(Sales-10):setSales(0)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <MdCancel />
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    Human Resource
                </th>
                <td className="px-6 py-4">
                    40
                </td>
                <td className="px-6 py-4 ">
                    <FaPlusCircle className='w-8 h-8 text-green-500' onClick={()=>{
                      setHR(HR + 10)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <FaMinusCircle className='w-8 h-8 text-red-500' onClick={()=>{
                      HR>0?setHR(HR-10):setHR(0)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <MdCancel />
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    IT
                </th>
                <td className="px-6 py-4">
                    500
                </td>
                <td className="px-6 py-4 ">
                    <FaPlusCircle className='w-8 h-8 text-green-500' onClick={()=>{
                      setIT(IT+10)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <FaMinusCircle className='w-8 h-8 text-red-500' onClick={()=>{
                      IT>0?setIT(IT-10):setIT(0)
                    }}/>
                </td>
                <td className="px-6 py-4">
                    <MdCancel />
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
  )
}

export default ExpenseItem
