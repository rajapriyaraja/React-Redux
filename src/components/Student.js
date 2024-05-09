export const Student=(Props)=>{

return(
    <>
    <div className="Student">
         
        <table>
                <tr>
                    
                    <th>Name</th>
                    <td>{Props.name}</td>
             
                    <th>Age</th>
                    <td>{Props.age}</td>
                
                    <th>comment</th>
                    <td>{Props.comment?"yes":"no"}</td>
                </tr>
        </table>
            
    </div>
    
    </>
)
}
