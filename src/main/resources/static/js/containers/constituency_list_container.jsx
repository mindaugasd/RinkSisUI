var ConstituencyListContainer = React.createClass({

    handleAdministerDistricts: function() {
        this.context.router.push('/dis');
    },
    
    
    render: function() {
        return (
                <div>
                <ConstituencyListComponent onAdministerDistricts={this.handleAdministerDistricts}/>
                <AddNewContainer redirectTo={'/add-con'}/>
                </div>
                )
  }
});

ConstituencyListContainer.contextTypes = {
        router: React.PropTypes.object.isRequired
};


window.ConstituencyListContainer = ConstituencyListContainer;