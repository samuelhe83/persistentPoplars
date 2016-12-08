class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Test</h1>

        <ProposalList proposals={[]} />
      </div>
    );
  }
}






window.App = App;