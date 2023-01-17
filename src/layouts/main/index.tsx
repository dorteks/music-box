type Props = {
  children: React.ReactNode;
};

const Home = (props: Props) => {
  return (
    <div>
      Home
      {props.children}
    </div>
  );
};

export default Home;
