

const ProgrammerList = ({programmers}) => {



  return (
    <>
        <h3>List of Programmers:</h3>
        {programmers.map((p) => (
            <div key={p.id}>
                <h4>Username: {p.username}</h4>
                <h5>Favorite Language: {p.language}</h5>
            </div>
        ))}
    </>
  )
}

export default ProgrammerList