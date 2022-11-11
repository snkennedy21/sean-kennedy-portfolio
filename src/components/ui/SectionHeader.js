function SectionHeader(props) {
  return (
    <h1 className="my-10 text-white text-4xl underline underline-offset-8 decoration-2 decoration-accentPrimary">
      {props.children}
    </h1>
  );
}

export default SectionHeader;
