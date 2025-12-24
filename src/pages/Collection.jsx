import { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Title from "../components/Title";
import { shopContext } from "../context/ShopContext";
import ProductsItem from "../components/ProductsItem";
const Collection = () => {
  const { products,search,showSearch } = useContext(shopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType,setSortType]=useState('relevent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const appplyFilter=()=>{

    let productsCopy=products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }
// method to sort the product

  const srtProduct=()=>{
    let fpCopy=filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
          break;
          default:
            appplyFilter();
            break;
    }

  }



  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(()=>{
    appplyFilter();

  },[category,subCategory,search,showSearch])


  useEffect(()=>{
    srtProduct();
    
  },[sortType])



 
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-400">
      {/*  filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <FaChevronDown
            className={`sm:hidden cursor-pointer ${
              showFilter ? "rotate-90" : ""
            }`}
          />
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-500 pl-5 py-3 mt-6 ${
            showFilter ? " " : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-md  text-gray-800">
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"kid"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div
          className={`border border-gray-500 pl-5 py-3 my-6 ${
            showFilter ? " " : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-md  text-gray-800">
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3 cursor-pointer"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-400 text-sm px-2 rounded outline-none cursor-pointer">
            <option value="relevent">Sort By : Relevent</option>
            <option value="low-high">Sort By : Low - High</option>
            <option value="high-low">Sort By : High - Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductsItem
              key={index}
              name={item.name}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
