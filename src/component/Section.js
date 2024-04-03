import Article from "./Article"


const Section = () => {


const articles = [
    {id:"1", titre: "", resume: "" },
    {id:"2", titre: "C'est quoi koinBio", resume: "Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, est un footballeur international argentin jouant au poste d'attaquant à l’Inter Miami CF en MLS. Octuple vainqueur du Ballon d'or, un record, il est considéré comme l'un des meilleurs joueurs de football toutes générations confondues." },


        ]

 const articlesOk =   articles.map((article) =>{
  return  <Article key={article.id} titre={article.titre} texte={article.resume}/>
   })        

    return (
        <div className="section">
            { articlesOk }
        </div>
    )
    
    }
    
    
    
    export default Section;