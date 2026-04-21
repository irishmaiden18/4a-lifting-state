import { useState } from "react"

const ProgrammerForm = ({addProgrammer}) => {

    const [username, setUsername] = useState("")
    const [language, setLanguage] = useState("")

    // e = event, just another way to say it
    const handleSubmit = (e) => {

        e.preventDefault()
        
        // Date.now() - quick unique id, don't use it for big projects I host, use UUID library
        const newProgrammer = {
            id: Date.now(), 
            // because the property is the same as the value, we can say it just once. same as username: username, language: language
            username, 
            language
        }

        addProgrammer(newProgrammer)

        // empty the input fields
        setUsername("")
        setLanguage("")
    }

  return (
    <>
        <h2>Programmer Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Enter Your Username: </label>
                <input 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label>Enter your favorite programming language: </label>
                <input 
                    value={language} 
                    onChange={(event) => setLanguage(event.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>

    </>
  )
}

export default ProgrammerForm
