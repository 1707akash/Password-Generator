

import './Pw.css'
import {useState} from 'react';

const Pw =()=>{
    const[passwordLength, setpasswordLength] = useState(8);
    const[requiredPassword, setRequiredPassword] = useState('');

    const[uppercase, setUppercase] = useState(false)
    const handleUppercase =()=>{
        setUppercase((prev)=> !prev)
        
    }

    const[lowercase, setLowercase] = useState(false)
    const handleLowercase=()=>{
        setLowercase((prev)=>!prev)
    }

    const[numb, setNumb] = useState(false)
    const handleNumber =()=>{
        setNumb((prev)=>!prev)
    }

    const[symb, setSymb] = useState(false)
    const handleSymbol =()=>{
        setSymb((prev)=>!prev)
    }

    const generatePassword =()=>{
        let charSet = '';

        if(uppercase===false && lowercase===false && numb===false && symb===false){
            alert('No checkbox ticked')
        }
        else{
            if(uppercase){
                charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if(lowercase){
                charSet += 'abcdefghijklmnopqrstuvwxyz'
            }
            if(numb){
                charSet += '0123456789'
            }
            if(symb){
                charSet += '~!@#$%&*-_+'
            }

            let newPw ='';
            for(let i=0; i<passwordLength; i++){
                newPw += charSet[Math.floor(Math.random()*charSet.length)]
            }
            setRequiredPassword(newPw)
        }   
    }
    

    


    return(
        <>
        <h1>Password Generator</h1>

        <div className="passwordContainer">
            <div className='generatedPassword' id='generatedPassword'>{requiredPassword}</div>
            <button>Copy Password</button>
        </div>

        <div className="specifications">
            <label htmlFor="pwLength">Select Password length(**8-50 characters**)</label>
            <input type="number" id='pwLength' onChange={(e)=>setpasswordLength(e.target.value)} value={passwordLength} />

            <div className="checkBoxes">
                <input type="checkbox" name="uppercase" id="uppercase" onChange={handleUppercase} checked={uppercase} />
                <label htmlFor="uppercase">Include upper case</label>
                <br />
                <input type="checkbox" name="lowercase" id="lowercase" onChange={handleLowercase} checked={lowercase} />
                <label htmlFor="lowercase">Include lower case</label>
                <br />
                <input type="checkbox" name="num" id="num" onChange={handleNumber} checked={numb} />
                <label htmlFor="num">Include numbers</label>
                <br />
                <input type="checkbox" name="symb" id="symb" onChange={handleSymbol} checked={symb} />
                <label htmlFor="symb">Include symbols</label>
                <br />
                <button onClick={generatePassword} >Generate Password</button>
            </div>
        </div>

        </>
    )
}

export default Pw;