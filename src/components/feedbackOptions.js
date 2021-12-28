function FeedbackOptions ({ options, onBtnClick }) {
    return( <div>
     {options.map(option => (
         <button key={option} type="button" onClick={() => onBtnClick(option)}>
           {option}
         </button>
       ))}
     </div>)
 }
 
 export default FeedbackOptions