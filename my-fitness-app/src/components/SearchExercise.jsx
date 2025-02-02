import React,{useEffect,useState} from 'react'
import { Button,TextField,Typography} from '@mui/material'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


import {exerciseOptions ,fetchData} from '../utils/fetchData'

const SearchExercise = ({ bodyPart, setBodyPart }) => {
  const [search ,setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(()=>{
    const fetchexerciseData =async()=>{
      const bodyPartsdata =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

      setBodyPart(['all',...bodyPartsdata]);
    }
  },[]
  )
  const handleSearch =async()=>{
    if(search){
       const exercicesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
      
        exerciseOptions);
        const searchedExercises = exercicesData.filter(
          (exercise)=> exercise.name.toLowerCase().includes(search)
           ||exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
           ||exercise.bodypart.toLowerCase().includes(search)
        );
        setSearch('');
        setExercises(searchedExercises);
  

      
      
    }
  }
  return (
    <Stack alignItems = "center"mt ="37px"
    justifyContent = "center"  p ="20px">
      <Typography fontWeight={700}
      sx={{fontSize:{lg:'44px' ,xs :'30px'}}}
      mb ='50px' textAlign={'center'}
      >
        Awesome Exercises You <br/>
        Should Know
      </Typography>

      <Box position = 'relative' mb = '72px'>
        <TextField 
        sx ={{
          input :{
            fontWeight:'700',
            border:'none',
            borderRadius:'4px'
            
          },
          width :{lg :'1000px',  xs:'350px'}
        }}
        height ='76px'
        value ={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder=' Search Exercise'
        type ='text'
        />
         <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} 
         onClick={handleSearch}>
     
          Search
        </Button>

    


      </Box>


    </Stack>
    
  )
}

export default SearchExercise