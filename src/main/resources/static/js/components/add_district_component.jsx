var AddDistrictComponent = React.createClass({
    render: function() {
        return (
                <form>         
                <label>Apylinkės pavadinimas</label><br />
                <input className="form-control" type="text" /><br />
                
                <label>Adresas</label><br />
                <input className="form-control" type="text" /><br />
                
                <label>Rinkėjų skaičius</label><br />
                <input className="form-control" type="number" /><br />
                

                <button className="btn btn-success" >Pridėti</button>
                <button className="btn btn-danger"  onClick={this.props.onCancel}>Atšaukti</button>
                </form>
                
        
        )
    }
});

window.AddDistrictComponent = AddDistrictComponent;