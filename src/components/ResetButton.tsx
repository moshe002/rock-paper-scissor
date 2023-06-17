interface ResetProps {
  setResultDisplay: (value: boolean) => void;
  setDisabled: (value: boolean) => void;
}

function Reset({ setResultDisplay, setDisabled } : ResetProps) {

  const handleReset = () => {
    setResultDisplay(false)
    setDisabled(false)
    window.location.reload()
  }

  return (
    <>
        <button
          onClick={handleReset} 
          className="border-2 p-3 rounded-md hover:border-green-500 duration-100">
          Reset
        </button>
    </>
  )
}

export default Reset


