var PartyListContainer = React.createClass({

    render: function() {
        return (
        <div>
        <PartyListComponent />
        <AddNewContainer redirectTo={'/add-party'}/>
        </div>
        )
  }
});


window.PartyListContainer = PartyListContainer;