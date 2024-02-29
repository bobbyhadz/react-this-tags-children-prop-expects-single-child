type HeaderProps = {
  children: JSX.Element;
};

function Header(props: HeaderProps) {
  return <div>{props.children}</div>;
}

function App() {
  return (
    <div>
      <Header>
        {/* 👇️ wrap in Fragment */}
        <>
          <h1>Hello</h1>
          <h1>World</h1>
        </>
      </Header>
    </div>
  );
}

export default App;
