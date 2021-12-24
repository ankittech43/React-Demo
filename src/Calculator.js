import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Calculator({initialValue}) {
    const [result,setResult] = useState(0);
    const [zeroData,setZeroData]=useState(false);
    useEffect(() => {
    setResult(initialValue);
    setZeroData(false);
    }, [zeroData]);
    
    useEffect(() => {
     getData();
    }, []);
    const add=()=>{
        let res = result+1;
        setResult(res);
    }

    const sub=()=>{
        let res = result-1;
        if(res==0){
            setZeroData(true);
        }else{
        setResult(res);
        }
    }

    const getData =async() =>{
        var config = {
            method: 'post',
            url: 'https://test.americandebtshield.com/public/api/admin/login?email=justin.banes@gmail.com&password=Justin@123&device_token=apiv2-token-development&device_type=ANDROID',
            headers: { 
              'API-TOKEN': 'apiv2-token-development'
            }
          };
          
          axios(config)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div style={{margin:"3%"}}>
            <p>Calculator</p>

            <button onClick={add}>+</button>
            <p>{result}</p>
            <button onClick={sub}>-</button>
        </div>
    )
}

export default Calculator
