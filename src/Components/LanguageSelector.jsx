function LanguageSelector({ heading1, heading2, heading3 }) {
  return (
    <div className="flex flex-col justify-center text-center items-center h-96">
      <h1 className="text-white text-5xl font-extrabold">{heading1}</h1>
      <h4 className="text-white text-4xl font-semibold">{heading2}</h4>
      <h6 className="text-white text-2xl font-bold">{heading3}</h6>
    </div>
  );
}

export default LanguageSelector;
