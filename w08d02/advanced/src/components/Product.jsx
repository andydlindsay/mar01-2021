import { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';

const Product = () => {
  const params = useParams();
  // console.log(params);

  const history = useHistory();
  // console.log(history);
  const {push} = history;

  useEffect(() => {
    setTimeout(() => {
      push('/about');
    }, 3000);
  }, [push]);

  // useEffect(() => {
  //   axios.get(`/api/products/${params.productId}`)
  //     .then(res => setProduct(res.data));
  // }, [params.productId]);

  return (
    <div>
      <h2>Product #{params.productId}</h2>
    </div>
  );
};

export default Product;