import { useRef, useState } from 'react';
import './App.css';
import './Style/bootstrap/css/bootstrap.min.css'



function App() {

  const [text, setText] = useState("유")
  const [active, setActive] = useState(false)
  const [green, setGreen] = useState(false)
  const [stopFlash, setStopFlash] = useState(false)
  const [flashing, setFlashing] = useState(false)

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const button = useRef();
  const buttont = useRef();
  const div = useRef();
  const klik = useRef();
  

  function flash(){

    if(!button.current.classList.contains("btn-danger")){

    setTimeout(() => {
      buttont.current.classList.remove("btn-success")
      buttont.current.classList.add("btn-dark")
      setTimeout(() => {
        if(!button.current.classList.contains("btn-danger")){
        buttont.current.classList.remove("btn-dark")
        buttont.current.classList.add('btn-success')
        }

      }, 250);
    }, 250);
  }
  else{
    buttont.current.classList.remove('btn-success')
    buttont.current.classList.add("btn-dark")
  }
  }

  function Enter(){
    if(!active){
      setActive(true)
      setTimeout(() => {
        button.current.classList.remove("btn-danger")
        button.current.classList.add("btn-dark")
        buttont.current.classList.remove("btn-dark")
        buttont.current.classList.add("btn-success")
        setGreen(true)
        setTimeout(() => {
          setFlashing(true)
          const interval = setInterval(() => {
            
            flash();
            
          }, 500);
            
            
          setTimeout(() => {
            console.log("ongeveer")
            clearInterval(interval)
            
            setGreen(false)
            setStopFlash(true)
            setFlashing(false)


            
            
            button.current.classList.remove("btn-dark")
            button.current.classList.add("btn-danger")
            
            
            
            setActive(false)
            
            
          }, 5000);
        }, 10000);
      }, 5000);
      
    }
    else{
      if(!button.current.classList.contains("btn-danger")){
        alert("u kunt al veilig oversteken")
      }
      
    }
    
  }
  function mouseMover(e){
    if(e.clientX){
      setX(e.clientX)
    }
    if(e.clientY){
      setY(e.clientY)
    }
    if(green){
    }
  }


  return (
    <div className="App" onMouseMove={(e) => mouseMover(e)}>

      <div className='container'>

        <div className='row m-3'>
          <div className='col-md-2 p-5 rounded' ref={div}  style={{backgroundColor: 'grey'}}>
            <div className='row'>
            <button className='btn btn-danger m-2' ref={button}>
          <h1>{text}</h1>
        </button>
            </div>
            <div className='row'>
            <button className='btn btn-dark m-2' ref={buttont}>
          <h2>웃</h2>
        </button>
            </div>
            </div>
            <div className='row-sm-1'>
              <div className='col-sm-1 ms-4' style={{height: '400px', backgroundColor: "grey", position: 'relative'}} >
                <div style={{position: 'absolute', bottom: "200px", left: "-30px", width: "150px", height: "150px"}}onMouseEnter={Enter}>
                  <div className=''>
                    <button className='btn btn-dark mt-5' ref={klik}>
                      O
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {active ? (
              <>
              {active && green && flashing ? (
                <>
                <div className='col-auto rounded' style={{position: 'absolute', top: y - 10, left: x - 50, backgroundColor: 'orange'}}>
              ︷       ︷<br></br>
                Het licht knippert
                <br></br>
                ︸       ︸
              </div>
                </>
              ) : <>
              
              {active && green ? (
                <>
                <div className='col-auto rounded' style={{position: 'absolute', top: y - 10, left: x - 50, backgroundColor: 'green'}}>
              ︷︷︷︷︷<br></br>
                U mag oversteken!!
                <br></br>
                ︸︸︸︸︸
              </div>
                </>
              ) : <>

            <div className='col-auto rounded' style={{position: 'absolute', top: y - 10, left: x - 50, backgroundColor: 'red'}}>
              ︷<br></br>
                Wachten A.U.B.
                <br></br>
                ︸
              </div>


              </>}
              
              </>}
              
              
              </>
            ): <>
            </>}
          
        
        </div>
        
      </div>
    </div>
  );
}

export default App;
