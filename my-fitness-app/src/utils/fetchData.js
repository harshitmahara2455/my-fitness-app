 export const exerciseOptions = {
	method: 'GET',
	
	headers: {
	  'x-rapidapi-key': '49297c84f9msh3d7a942ac49f81ep15345ajsnc325e4fd685d',
	  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
  };


export const fetchData =async(url,options)=>{
    const response = await fetch (url,options);
    const data = await response.json();


    return data;


}



