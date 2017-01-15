var ConstituencyListComponent = React.createClass({
    render: function() {

      return (
              <div className="panel panel-default">

              <table className="table">     
              <thead>  
                  <tr>
                      <th>Apygarda</th>
                      <th>Apylinkės</th>
                      <th></th>
                      <th>Trinti</th>
                  </tr>
              </thead>
              <tbody>
                      <tr>
                  <td>Naujamiesčio</td>
                  <td>5</td>
                  <td><button type="button" className="btn btn-info" onClick={this.props.onAdministerDistricts}>Administruoti apylinkes</button></td>
                  <td>
                  <button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-remove"></span>
                  </button></td></tr>
                  
                  <tr>
                  <td>Fabijoniškių</td>
                  <td>8</td>
                  <td><button type="button" className="btn btn-info" onClick={this.props.onAdministerDistricts}>Administruoti apylinkes</button></td>
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


window.ConstituencyListComponent = ConstituencyListComponent;