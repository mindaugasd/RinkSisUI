var PartyListComponent = React.createClass({
    render: function() {

      return (
              <div className="panel panel-default">

              <table className="table table-hover">     
              <thead>  
                  <tr>
                      <th>Partijos pavadinimas</th>
                      <th>Trumpinys</th>
                      <th>Trinti</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Lietuvos Liberų Sąjūdžio Partija</td>
                      <td>LLSP</td>
                      <td>
                          <button type="button" className="btn btn-default">
                          <span className="glyphicon glyphicon-remove"></span>
                          </button></td>
                  </tr>
              </tbody>
              </table>
            </div>
              )
    }
  });


window.PartyListComponent = PartyListComponent;