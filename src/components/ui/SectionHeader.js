function SectionHeader(props) {
  return (
    <h1 className="my-10 text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl underline underline-offset-8 decoration-2 decoration-accentPrimary pt-24">
      {props.children}
    </h1>
  );
}

export default SectionHeader;
