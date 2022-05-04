const List = (props) => {

    const skills = props.skills

    return ( 
        <div className="home-list">
            {skills.map((skill) => ( 
                <div className="list" key={skill.id}>
                    <h2>{ skill.title } </h2>
                    <p>Experience: { skill.exp }</p>
                </div>
             ))}
        </div>
     );
}
 
export default List  