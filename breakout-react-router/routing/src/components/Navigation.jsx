import {Link} from 'react-router-dom';

const Navigation = () => {
  // const images = [
  //   { id: 1, src: 'https://images.macrumors.com/t/Nef1flhQYBFH40BZXBYVOXz5d0Q=/1600x0/article-new/2017/11/crying-tears-of-joy-emoji.jpg'},
  //   { id: 2, src: 'https://cdn.vox-cdn.com/thumbor/MSoXNfYbAxYBqSUurBSnTgh7G50=/0x0:560x300/1200x800/filters:focal(236x106:324x194)/cdn.vox-cdn.com/uploads/chorus_image/image/66628415/upside-down-face.0.0.png' }
  // ];

  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/authors">Authors</Link>

      {/* <ol>
        { images.map(image => {
          return <li key={image.id} onClick={() => alert(`you clicked on id ${image.id}`)}>
            <img width="200" src={image.src} />
          </li>
        })}
      </ol> */}
    </nav>
  );
};

export default Navigation;
