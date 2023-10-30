import React, {useState} from 'react';
import { Button,Input,Layout } from 'antd';

const  {Content} = Layout;
const App = ( ) => {
   const [input,setInput] = useState(" ");
   const [result,setResult] = useState(0);
   const handler = e => {
      setInput(e.target.value);
   }
   return (
      <div>
        <Layout>
          <Content>
          <center>
               <Input.Group compact><Input style={{ width: 'calc(30% - 50px)' }} defaultValue="0" type="text" value={input} name="input" onChange={handler}></Input>
               </Input.Group>
               <Button type="primary" onClick={() => setResult(no-eval(input))}>Result</Button><br></br><br></br><Button>{result}</Button>
               <br></br><br></br>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'1')}>1</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'2')}>2</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'3')}>3</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'4')}>4</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'5')}>5</Button>
               <br></br>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'6')}>6</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'7')}>7</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'8')}>8</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'9')}>9</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'0')}>0</Button>
               <br></br>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'+')}>+</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'-')}>-</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'/')}>/</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'*')}>x</Button>
               <br></br>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'%')}>Rem</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput(input+'**')}>Pow</Button>
               <Button type="primary" shape="circle" onClick={( ) =>setInput('')}>clr</Button>  
            </center>
          </Content>
        </Layout>
      </div>
   )
}

export default App;



      
    

