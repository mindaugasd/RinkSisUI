var RepresentativeInfoComponent = React.createClass({
    render: function() {
        return (
                <div>
                <p>Vardas: Jonas</p>
                <p>Pavardė: Smitas</p>
                <p>Prisijungimo vardas: jsmitas</p>
                <p>Slaptažodis: **********</p>
                <p>El. paštas: jonas.smitas@vrk.lt</p>
                <button className="btn btn-success" >Redaguoti</button>
                <button className="btn btn-info">Siųsti prisijungimus atstovui</button>
                <button className="btn btn-danger">Trinti atstovą</button>
                <button className="btn btn-warning">Grįžti</button>
                </div>
        
        )
    }
});

window.RepresentativeInfoComponent = RepresentativeInfoComponent;