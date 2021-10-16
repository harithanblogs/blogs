import Singlebook from "./Singlebook";
import BL from "./bookList.json"
function Book() {
  return (
    <>
        
        <div className="container justify-center px-5 mx-auto flex flex-wrap">
          <div className="flex justify-center flex-wrap mx-10 mt-2 sm:px-1   ">
          {
            BL.map(obj => {
              return(
                <Singlebook Data={obj} key={obj.id}/>
              )
            })
          }
          </div>
        </div>
    </>
  )
}
export default Book;
  
  //
  //   "id":,
  //   "type":,
  //   "title":,
  //   "author":,
  //   "color":,
  //   "link":,
  //   "image":,
  // 
  