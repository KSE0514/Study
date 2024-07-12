// components/Botton.jsx

// // 점 표기법으로 props값 추출하기
// const Button = (props) => {
//   console.log(props);
//   return (
//     <button style={{ color: props.color }}>
//       {props.text} - {props.color.toUpperCase()}
//     </button>
//   );
// };

// 구조분해할당으로 props값 추출하기
const Button = ({ text, color, children }) => {
  const onClickButton = () => {
    console.log(text);
  };
  
  return (
    <button
      onClick={onClickButton}
      onMouseEnter ={onClickButton}
      style={{ color: color }}
    >
      {text} - {color}
      {children}
    </button>
  )
}

// Button의 디폴트props값 설정
Button.defaultProps = {
  color: "black",
}

export default Button;