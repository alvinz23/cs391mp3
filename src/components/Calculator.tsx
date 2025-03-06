
import { useState } from 'react'; 


export default function Calculator() {

    const [result, setResult] = useState<string>(''); 
    const [num1, setNum1] = useState<string>(''); 
    const [num2, setNum2] = useState<string>(''); 

    function Calculate(op : string) : void{
        const n1 = Number(num1);
        const n2 = Number(num2); 

        if (op == 'clear'){
            setResult(''); 
            setNum1(''); 
            setNum2(''); 
            return; 
        }

        if (isNaN(n1) || isNaN(n2)){
            setResult('Invalid Input'); 
            return; 
        }

        if (op == 'add'){
            const res = n1 + n2; 
            setResult(res.toString()); 
        }
        if (op == 'sub'){
            const res = n1 - n2; 
            setResult(res.toString()); 
        }
        if (op == 'multiply'){
            const res = n1 * n2; 
            setResult(res.toString()); 
        }
        if (op == 'divide'){
            if (n2 === 0){
                setResult('Divide by zero error, try again')
            }else{
                const res = n1 / n2; 
                setResult(res.toString()); 
            }
        }
        if (op == 'pow'){
            const res = n1 ** n2; 
            setResult(res.toString()); 
        }


    }
    return (
      <div className="calculator-section">
        <h4>JavaScript Calculator Project</h4>
        <div className="calculator-container">
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="num1">First Number:</label>
              <input id="num1" value={num1} placeholder="" onChange = {(e) => setNum1(e.target.value)} />
            </div>
            <div className="input-field">
              <label htmlFor="num2">Second Number:</label>
              <input id="num2" value={num2} placeholder="" onChange = {(e) => setNum2(e.target.value)} />
            </div>
          </div>
          <div className="button-group">
            <button onClick = {() => Calculate('add')}>+</button>
            <button onClick ={() => Calculate('sub')}>-</button>
            <button onClick ={() => Calculate('multiply')}>*</button>
            <button onClick ={() => Calculate('divide')}>/</button>
            <button onClick ={() => Calculate('pow')}>**</button>
            <button onClick ={() => Calculate('clear')}>Clear</button>
          </div>
          <div className="output-container">
            <p id="output">Result : {result}</p>
          </div>
        </div>
      </div>
    );
  }
  