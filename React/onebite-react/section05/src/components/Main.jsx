import "./Main.css";

const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  // if문 이용하는 방법
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>
  }

  // 삼항연산자 이용하는 방법
  // return (
  //   <>
  //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //   </>
  // );
};

export default Main;