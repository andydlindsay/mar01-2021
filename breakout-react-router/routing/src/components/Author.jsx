import { useEffect } from 'react';
import {useParams, useHistory, useLocation} from 'react-router-dom';

const Author = () => {
  const params = useParams();
  console.log(params);

  const history = useHistory();
  console.log(history);

  const buttonHandler = () => {
    // window.location = 'http://www.google.com';
    history.push('/');
  };

  useEffect(() => {
    setTimeout(() => {
      history.push('/aboutfajhsdfkh');
    }, 3000);
  });

  // useEffect(() => {
  //   axios.get(`/authors/${params.whateverWeWant}`)
  //     .then(res => console.log(res.data));
  // }, [params.whateverWeWant]);

  return (
    <div>
      <h2>Author {params.whateverWeWant}</h2>
      <button onClick={buttonHandler}>Go somewhere?</button>
    </div>
  );
};

export default Author;
