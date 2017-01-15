var App = React.createClass({
  render: function() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <NavigationComponent />
        {this.props.children}
      </div>
    );
  }
});

var NoMatch = React.createClass({
  render: function() {
    return <div>Route did not match</div>;
  }
});

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HelloWorldComponent} />
      <Route path="/hello-world" component={HelloWorldComponent} />
        <Route path="/con" component={ConstituencyListContainer} />
        <Route path="/dis" component={DistrictListContainer} />
        <Route path="/add-con" component={AddConstituencyContainer} />
        <Route path="/add-dis" component={AddDistrictContainer} />
        <Route path="/add-rep" component={AdministrateRepresentativeContainer} />
        <Route path="/reg-votes" component={RegisterVotesSingleContainer} />
        <Route path="/repres" component={RepresentativeInfoContainer} />
        <Route path="/parties" component={PartyListContainer} />
        <Route path="/add-party" component={AddPartyContainer} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'));
