import prototype from "prop-types"

const DropDown = () => {
  return (
<select>
    <option className="hover:text-yellow-500">
    Deals Today
    </option>
    <option className="hover:text-yellow-500">
    Deals Today
    </option>
    <option className="hover:text-yellow-500">
    Deals Today
    </option>
</select>
  )
}

DropDown.prototype = {
    children: prototype.oneOfType([PropTypes.node]).isRequired,
}

export default DropDown


