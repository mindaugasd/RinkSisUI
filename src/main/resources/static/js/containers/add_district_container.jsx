var AddDistrictContainer = React.createClass({
    
    
    handleCancel: function() {
        this.context.router.push('/dis');
    },
    
    render: function() {
        return <AddDistrictComponent onCancel={this.handleCancel}/>
    }
});

AddDistrictContainer.contextTypes = {
        router: React.PropTypes.object.isRequired,
};

window.AddDistrictContainer = AddDistrictContainer;