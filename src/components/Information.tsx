import React from 'react';
import vols from './data';
import Title from './Title';

interface Vol {
  vol: string;
  airline: string;
  destination: string;
  heureDepart: string;
  status: string;
  gate: string;
}

const Information: React.FC = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="container">
        <Title subtitle="Informations sur les Vols" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="table-responsive">
              <table className="table table-borderless table-hover table-striped text-center">
                <thead className="table-primary">
                  <tr>
                    <th>Vol</th>
                    <th>Airlines</th>
                    <th>Destination</th>
                    <th>Heure Départ</th>
                    <th>Status</th>
                    <th>Gate</th>
                  </tr>
                </thead>
                <tbody>
                  {vols.map((vol: Vol, index: number) => (
                    <tr key={index}>
                      <td>{vol.vol}</td>
                      <td>{vol.airline}</td>
                      <td>{vol.destination}</td>
                      <td>{vol.heureDepart}</td>
                      <td>{vol.status}</td>
                      <td>{vol.gate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
