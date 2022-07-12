import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div className="dsmeta-form-control-container">
        <div>
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show-id-responsive">ID</th>
              <th className="show-date-responsive">Data</th>
              <th>Vendedor</th>
              <th className="show-visits-responsive">Visitas</th>
              <th className="show-sales-responsive">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show-id-responsive">#341</td>
              <td className="show-date-responsive">09/09/2009</td>
              <td>Anakin</td>
              <td className="show-visits-responsive">15</td>
              <td className="show-sales-responsive">11</td>
              <td>R$55300.00</td>
              <td>
                <div className="dsmeta-notification-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-id-responsive">#341</td>
              <td className="show-date-responsive">19/06/2019</td>
              <td>Anakin</td>
              <td className="show-visits-responsive">15</td>
              <td className="show-sales-responsive">11</td>
              <td>R$55300.00</td>
              <td>
                <div className="dsmeta-notification-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show-id-responsive">#341</td>
              <td className="show-date-responsive">02/03/2020</td>
              <td>Anakin</td>
              <td className="show-visits-responsive">15</td>
              <td className="show-sales-responsive">11</td>
              <td>R$55300.00</td>
              <td>
                <div className="dsmeta-notification-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
