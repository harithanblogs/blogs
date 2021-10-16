function Singlebook({Data}) {
  var { id, type, title, author, color, link, image }={ ...Data };
  var txtCls=`tracking-widest text-${color}-600 text-xs font-medium title-font pb-0.5`
  console.log(id);
  return (
    <>
      <div className="xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 xl:px-4 md:px-4 sm:px-4 px-8 py-5" key={id}>
        <div className="hover:bg-gray-100  p-4 rounded-lg">
          <img className="h-40 rounded w-full object-contain object-center mb-6" src={image} alt="content"/>
          <h3 className={txtCls}><b>{type}</b></h3>
          <div className="grid grid-cols-6 gap-4 justify-between  ">
            <h3 className="text-sm text-gray-900 font-medium title-font mb-1 col-span-5">{title}</h3>

            <a href={link}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" viewBox="0 0 20 20" fill="gray-700">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
            </svg>
            </a>
          </div>
          <p className="text-xs text-gray-400 font-medium mt-0.6 title-font">{author}</p>
          
        </div>
        
      </div>
    </>
  );
}
export default Singlebook;