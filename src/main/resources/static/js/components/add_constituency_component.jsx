var AddConstituencyComponent = React.createClass({
    render: function() {
        return (
                <form>         
                <label>Apygardos pavadinimas</label><br />
                <input className="form-control" type="text" /><br />
                <button className="btn btn-success" >Pridėti</button>
                <button className="btn btn-danger" onClick={this.props.onCancel}>Atšaukti</button>
                </form>
                
        
        )
    }
});

window.AddConstituencyComponent = AddConstituencyComponent;