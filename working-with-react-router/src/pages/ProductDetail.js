import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  console.log(params.id);
  return (
    <section>
      <h1>Details about Product </h1>
      <p>the id of this product is {params.id}</p>
    </section>
  )
}

export default ProductDetail