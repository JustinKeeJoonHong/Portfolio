const Test = () => {
  const Object = {
    state: {
      information: {
        name: "velopert",
        language: ["korean", "english", "chinese"],
      },
    },
    value: 5,
  };
  const { name, language } = Object.state.information;
  const { value } = Object;
  console.log(value);
  console.log(name);
  console.log(language);
  const extracted = {
    name,
    language,
    value,
  };

  console.log(extracted);
  return;
};
export default Test;
