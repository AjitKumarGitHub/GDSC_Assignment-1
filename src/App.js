 
import { useEffect, useState } from 'react';
import './App.css';
import SearchedData from './SearchedData';
function App() {
    
      const [data,setData]=useState([]);
      const [searchValue,setSearchValue]=useState();
      const [filteredData,setFilteredData]=useState();
      // Dummy employees Api for creating the search functionality on web-page
      useEffect(()=>{
        async function getData(){
          const response= await fetch(`https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1`);
           if(response.ok){
            const values=  await response.json();
            console.log(values);
            setData(values);
            setFilteredData(values);
           }
        }

        getData();
      },[]);
//comment
      const searchHandler=(event)=>{
          const getSearch= event.target.value;
          
           setSearchValue(getSearch);
         // console.log(getSearch);
          if(getSearch.length>0){
            const getSearch= event.target.value;
            const searchData=data.filter((event)=>event.firstName.toLowerCase().includes(getSearch));
            setData(searchData);
          }
          else{
            setData(filteredData);
          }
           
          setSearchValue(getSearch);
          
      }
     
  return (

    <div >
      <div className='bg-slate-600'> 
       <h2 className=' m-4 text-4xl font-bold text-white'>Search the data for Particular employee</h2>
       <div className='w-full h-1/4 mr-6'>
         <div className=' h-1/4 bg-slate-600  justify-center justify-items-center p-auto m-8'>
          <input type='text' value={searchValue} placeholder='Search....' className='border-2 w-1/2 p-1 text-2xl m-2' onChange={(e)=>searchHandler(e)}/>
         </div>
       </div>
       </div>
       <div className='flex flex-row text-3xl font-bold justify-around shadow-lg mb-4 bg-slate-800 text-white'>
          <h2>Id</h2>
          <h2>Fname</h2>
          <h2>Contact</h2>
          <h2>Age</h2>
          <h2>Salary (in $K)</h2>
       </div>
       <div className='m-4'>
        {
          data.map((element,index)=>{
            return (
             <SearchedData 
             key={index}
             id={element.id}
             fname={element.firstName}
             cnumber={element.contactNumber}
             age={element.age}
             salary={element.salary}
             />
            )
          })
        }
       </div>

    </div>
  );
}

export default App;
