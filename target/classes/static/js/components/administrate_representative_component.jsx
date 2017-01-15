var AdministrateRepresentativeComponent = React.createClass({
    render: function() {
        return (
                <form>         
                <label>Vardas</label><br />
                <input className="form-control" type="text" /><br />
                
                <label>Pavardė</label><br />
                <input className="form-control" type="text" /><br />
                
                <label>Prisijungimo vardas</label><br />
                <input className="form-control" type="text" /><br />
                
                <label>Slaptažodis </label><button className="btn btn-warning" >Generuoti slaptažodį</button><br />
                <input className="form-control" type="password" /><br />
                
                
                <label>El. paštas</label><br />
                <input className="form-control" type="email" /><br />
                
                <button className="btn btn-success" >Pridėti</button>
                <button className="btn btn-danger">Atšaukti</button>
                </form>
                
        
        )
    }
});

window.AdministrateRepresentativeComponent = AdministrateRepresentativeComponent;