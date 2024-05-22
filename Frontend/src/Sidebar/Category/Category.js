import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Dress"
          title="Women Dress"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="T-shirts"
          title="Men's Wear"
          name="test"
          
        />
        <Input
          handleChange={handleChange}
          value="kids"
          title="Kid's wear"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="earbuds"
          title="Earbuds"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="furniture"
          title="Furniture"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="stationary"
          title="Stationary"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="watch"
          title="Watches"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
