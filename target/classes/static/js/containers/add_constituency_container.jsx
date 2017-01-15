var AddConstituencyContainer = React.createClass({
    
    handleCancel: function() {
        this.context.router.push('/con');
    },
    

    render: function() {
        return <AddConstituencyComponent onCancel={this.handleCancel}/>
    }
});


AddConstituencyContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.AddConstituencyContainer = AddConstituencyContainer;