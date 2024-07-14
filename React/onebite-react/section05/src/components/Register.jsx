import { useState } from "react";
// 회원가입 폼 만들기
// 1. 이름
// 2. 생일
// 3. 국적
// 4. 자기소개
const Register = () => {
  const [name, useName] = useState("")
  const [birth, useBirth] = useState("")
  const [country, useCountry] = useState("")
  const [bio, useBio] = useState("")

  const onChangeName = (e) => {
    console.log(e) // e.target.value에 입력한 값이 저장되어 있음을 확인할 수 있음
    useName(e.target.value)
  }

  const onChangeBirth = (e) => {
    console.log(e)
    useBirth(e.target.value)
  }

  const onChangeCountry = (e) => {
    console.log(e)
    useCountry(e.target.value)
  }

  const onChangeBio = (e) => {
    console.log(e)
    useBio(e.target.value)
  }

  return (
    <div>
        <h1>회원가입</h1>
      <div>
        {/* 1. 자기소개 */}
        <input value={name} onChange={onChangeName} placeholder="이름" />
        {/* placeholder : input 박스 안에 뭘 입력해야하는지 표시 */}
        {/* onChange : 입력값의 변화가 생겼을 때의 이벤트핸들러 */}
        {name}
      </div>
      <div>
        {/* 2. 생일 */}
        <input onChange={onChangeBirth} type="date" />
        {/* type="date"를 통해 날짜정보를 입력받을 수 있게 됨 */}
        {birth}
      </div>
      <div>
        {/* 국적 */}
        <select value={country} onChange={onChangeCountry}>
          {/* select태그 아래 option태그를 추가해 드롭다운을 만들 수 있음 */}
          {/* 이 때, 바로 아래처럼 option태그만 있으면 맨 처음 드롭다운에 아무것도 안 보이도록 할 수 있음 */}
          <option></option>
          <option value="KR">한국</option>
          {/* value값을 따로 지정하지 않으면 onChangeCountry의 인자로 전달되는 e의 e.target.value값이 "한국"이 된다. */}
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
        {country}
      </div>
      <div>
        {/* 4. 자기소개 */}
        <textarea onChange={onChangeBio}></textarea>
        {bio}
      </div>
      <div></div>
    </div>
  )
}

export default Register;