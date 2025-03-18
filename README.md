# ReactVite

onChangeName을 통해 바뀐 setName을 name에 저장

const Register = () => {
  const [name, setName] = useState("이름");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
    </div>
  );
};

export default Register;
