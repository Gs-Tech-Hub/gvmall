import prototype from "prop-types";


const Button = ({children}) => {
  return (
<button type="button" className='flex px-4 py-2 rounded items-center gap-2 bg-orange-500'> 
    {children}      
</button>
  )
}


Button.prototype = {
    children: prototype.oneOfType([prototype.node, prototype.string]).isRequired,
};


export default Button;