import styled from 'styled-components';

const Styled = () => {
  const Heading = styled.h1`
    color: purple;
    background-color: green;
    font-size: 36px;
    text-decoration: underline;
  `;

  const Custom = styled.p`
    color: ${ (props) => props.jimmy ? 'yellow' : 'grey' };
    background-color: ${ (props) => props.jimmy ? 'purple' : 'white' };
  `;

  return (
    <div>
      <h2>Styled Components</h2>
      <Heading>How do I look?</Heading>
      <Heading>More than that?</Heading>

      <Custom jimmy>I am a custom component</Custom>
      <Custom>Is this one any different?</Custom>
    </div>
  );
};

export default Styled;
