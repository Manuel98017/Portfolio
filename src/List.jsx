const List = ({items, title}) => {

    return ( 
        <div className="home-list">
            <h2>{title}</h2>
            {items.map((item) => ( 
                <div className="list" key={item.id}>
                    <h2>{ item.title } </h2>
                    <p>{item.qualifier}: { item.description }</p>
                </div>
             ))}
        </div>
     );
}
 
export default List  