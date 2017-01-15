var DistrictListContainer = React.createClass({

    handleAdministerRepresentative: function() {
        this.context.router.push('/repres');
    },
    
    handleAddRepresentative: function() {
        this.context.router.push('/add-rep');
    },
    
    render: function() {
        return (
        <div>
        <h3>Naujamiesčio apygarda</h3>
        <DistrictListComponent onAdministerRepresentative={this.handleAdministerRepresentative} onAddRepresentative={this.handleAddRepresentative}/>
        <AddNewContainer redirectTo={'/add-dis'}/>
        </div>
        )
  }
});

DistrictListContainer.contextTypes = {
        router: React.PropTypes.object.isRequired
};


window.DistrictListContainer = DistrictListContainer;