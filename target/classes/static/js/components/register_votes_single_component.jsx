var RegisterVotesSingleComponent = React.createClass({
    render: function() {
        return (
                <form>         
                <label>1. Petras Gražulis (LGBJ)</label>
                <input className="form-control" type="number" /><br />
                
                <label>2. Vytautas Šustauskas (TP)</label><br />
                <input className="form-control" type="number" /><br />
                
                <label>3. Jonas Smitas (LDDLDLLP)</label><br />
                <input className="form-control" type="number" /><br />
                
                <label>4. Politikus Nevykėlus (LKEKLRRPPPRSKLP) </label><br />
                <input className="form-control" type="number" /><br />
                
                
                <input type="checkbox" /> Patvirtinu, kad įvesti duomenys teisingi.<br />
                
                <button className="btn btn-success" >Pateikti rezultatus</button>
                <button className="btn btn-danger">Atšaukti</button>
                </form>
                
        
        )
    }
});

window.RegisterVotesSingleComponent = RegisterVotesSingleComponent;