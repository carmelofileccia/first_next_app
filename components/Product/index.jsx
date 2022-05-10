import styles from "./index.module.scss";

export default function Product({ productData }) {
  const { title, image, price, description } = productData;

  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}
