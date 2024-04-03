



const Article = (props ) => {

 //   console.log(props)

    return (

        
        <div className="article" >
    
        <h3>
            {props.titre}

        </h3>

            <p>
                { props.texte }
            </p>

        </div>
    )
    
    }
    
    
    
    export default Article;