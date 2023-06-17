import { useState } from "react";

import ResetButton from './components/ResetButton'

import rock from './assets/rock.jpg'
import paper from './assets/paper.jpg'
import scissor from './assets/scissor.jpg'

function App() {

  const choices: string[] = ['Rock', 'Paper', 'Scissor']

  const [userAnswer, setUserAnswer] = useState<string>()
  const [aiAnswer, setAiAnswer] = useState<string>()
  const [result, setResult] = useState<string>()
  const [resultDisplay, setResultDisplay] = useState<boolean>(false)
  const [delayResult, setDelayResult] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userPicture, setUserPicture] = useState<string>()
  const [enemyPicture, setEnemyPicture] = useState<string>()

  const handleClick = (e:any) => {
    let myAns = e.target.value
    let result:string = answer()
    
    if(myAns === 'Rock') {
      setUserPicture(rock)
    } else if (myAns === 'Paper') {
      setUserPicture(paper)
    } else if (myAns === 'Scissor') {
      setUserPicture(scissor)
    }

    if(result === 'Rock') setEnemyPicture(rock)
    else if(result === 'Paper') setEnemyPicture(paper)
    else if(result === 'Scissor') setEnemyPicture(scissor)

    if(result === myAns) {
      setUserAnswer(myAns)
      setAiAnswer(result)
      setResult("It's a tie!")
      //console.log(`User chose: ${myAns} \nAI chose: ${result} \nResult: It's a tie!`)
    } 
    else if (result === 'Scissor' && myAns === 'Rock') {
      setUserAnswer(myAns)
      setAiAnswer(result)
      setResult("You Win!")
      console.log("User Rock wins")
      //console.log(`User chose: ${myAns} \nAI chose: ${result} \nResult: User Rock wins`)
    } 
    else if (result === 'Paper' && myAns === 'Scissor') {
      setUserAnswer(myAns)
      setAiAnswer(result)
      setResult("You Win!")
      console.log("User Scissor wins")
      //console.log(`User chose: ${myAns} \nAI chose: ${result} \nResult: User Scissor wins`)
    } 
    else if (result === 'Rock' && myAns === 'Paper') {
      setUserAnswer(myAns)
      setAiAnswer(result)
      setResult("You Win!")
      console.log("User Paper wins")
      //console.log(`User chose: ${myAns} \nAI chose: ${result} \nResult: User Paper wins`)
    } 
    else if (result === 'Paper' && myAns === 'Rock') {
      setUserAnswer(myAns)
      setAiAnswer(result)
      setResult("Opponent Wins!")
      console.log("Opponent Paper wins")
      //console.log(`User chose: ${myAns} \nAI chose: ${result} \nResult: AI Paper wins`)
    } 
    else if (result === 'Scissor' && myAns === 'Paper') {
      setUserAnswer(myAns)
      setAiAnswer(result)
      setResult("Opponent Wins!")
      console.log("Opponent Scissor wins")
      //console.log(`User chose: ${myAns} \nAI chose: ${result} \nResult: AI Scissor wins`) 
    } 
    else if (result === 'Rock' && myAns === 'Scissor') {
      setUserAnswer(myAns)
      setAiAnswer(result)
      setResult("Opponent Wins!")
      console.log("Opponent Rock wins")
      //console.log(`User chose: ${myAns} \nAI chose: ${result} \nResult: AI Rock wins`)
    } 
    setResultDisplay(true)
    setDisabled(true)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setDelayResult(true)
    }, 2000)
  };

  function answer() {
    let x = Math.random() * 2 + 1
    x = Math.round(x)
    let ans:string = ''
      if(x === 1){
        ans = 'Rock'
      } else if (x === 2) {
        ans = 'Paper'
      } else if (x === 3) {
        ans = 'Scissor'
      }
    return ans
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <div className="flex flex-col items-center gap-10 border-2 w-screen h-screen">
        <h1 className="text-center text-blue-500 text-4xl font-bold mt-5">Rock vs Paper vs Scissor</h1>
        <div className="flex gap-5">
          {
            choices.map((el, i) => {
              return (
                <button
                  disabled={disabled}
                  className={disabled ? 'opacity-40 p-3 duration-100' : `border-2 p-3 rounded-md hover:border-blue-400 duration-100`}
                  onClick={handleClick} 
                  value={el}
                  key={i}>
                  {el}
                </button>
              )
            })
          }
        </div>
        <div className="flex flex-row items-center gap-16">
          {
            resultDisplay 
            &&
            <>
              <div className="flex flex-col gap-3">
                <h2>You chose: <b>{userAnswer}</b></h2>
                <img className="w-36 h-36" src={userPicture} alt="" />
              </div>
              {
                isLoading
                &&
                <h1 className="italic">Opponent is choosing...</h1>
              }
              {
                delayResult
                &&
                <>
                  <div className="flex flex-col gap-3">
                    <h2>Opponent chose: <b>{aiAnswer}</b></h2>
                    <img className="w-36 h-36" src={enemyPicture} alt="" />
                  </div>
                </>
              }
            </>
          }
        </div>
        {
          delayResult
          &&
          <>
            <h1 className="text-red-500 font-bold text-4xl">{result}</h1>
            <ResetButton setResultDisplay={setResultDisplay} setDisabled={setDisabled} />          
          </>
        }
      </div>
    </div>
  )
}

export default App
