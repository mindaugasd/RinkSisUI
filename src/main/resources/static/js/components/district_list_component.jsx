var DistrictListComponent = React.createClass({
    render: function() {

      return (
              <div className="panel panel-default">

              <table className="table">     
              <thead>  
              <tr>
                  <th>Alinkės pavadinimas</th>
                  <th>Adresas</th>
                  <th>Rinkėjų skaičius</th>
                  <th>Atstovas</th>
                  <th></th>
                  <th>Trinti</th>
                </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>Gedimino</td>
              <td>Gedimino pr. 9, Vilnius</td>
              <td>1555</td>
              <td>Jonas Smitas</td>
              <td><button type="button" className="btn btn-primary" onClick={this.props.onAdministerRepresentative}>Administruoti atstovą</button></td>
              <td>
              <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-remove"></span>
              </button></td></tr>
              <tr>
              <td>L. Giros</td>
              <td>L. Giros g. 5, Vilnius</td>
              <td>4523</td>
              <td>nepriskirta</td>
              <td><button type="button" className="btn btn-primary" onClick={this.props.onAddRepresentative}>Pridėti atstovą</button></td>
              <td>
              <button type="button" className="btn btn-default">
              <span className="glyphicon glyphicon-remove"></span>
              </button></td></tr>
              
                  </tbody>
              </table>
            </div>
              )
    }
  });


window.DistrictListComponent = DistrictListComponent;