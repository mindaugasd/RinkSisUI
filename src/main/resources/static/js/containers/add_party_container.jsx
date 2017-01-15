var AddPartyContainer = React.createClass({
    
    handleCancel: function() {
        this.context.router.push('/parties');
    },
    

    render: function() {
        return <AddPartyComponent onCancel={this.handleCancel}/>
    }
});


AddPartyContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.AddPartyContainer = AddPartyContainer;