import { useState } from "react";
// 회원가입 폼 만들기
// 1. 이름
// 2. 생일
// 3. 국적
// 4. 자기소개
const Register = () => {
  const [name, useName] = useState("")
  const [birth, useBirth] = useState("")

  const onChangeName = (e) => {
    console.log(e) // e.target.value에 입력한 값이 저장되어 있음을 확인할 수 있음
    useName(e.target.value)
  }

  const onChangeBirth = (e) => {
    console.log(e)
    useBirth(e.target.value)
  }

  return (
    <div>
        <h1>회원가입</h1>
      <div>
        {/* 1. 자기소개 */}
        <input value={name} onChange={onChangeName} placeholder="이름" />
        {name}
      </div>
      <div>
        {/* 2. 생일 */}
        <input onChange={onChangeBirth} type="date" />
        {birth}
      </div>
    </div>
  )
}

export default Register;