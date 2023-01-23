//Import component
import ProductCard from "./ProductCard";

//Import UI
import Image from "next/image";
import styles from "styles/ProductList.module.css";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore
        quas esse deleniti minima voluptates debitis, totam suscipit ipsa,
        nesciunt eligendi tempore consectetur vitae eveniet a illo veritatis eos
        officia.
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;