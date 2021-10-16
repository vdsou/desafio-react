/**
 * Servers' table
 */
import React, { useContext } from 'react';
import './styles.css';
import { Context } from '../DefaultLayout';

function ServersTable() {
  const { serverList, setServerList } = useContext(Context);
  const handleSelect = (event, id) => {
    const updated = serverList.map((server) => {
      if (server.id === id) {
        return {
          ...server,
          select: event.target.checked,
        };
      }
      return server;
    });
    setServerList(updated);
  };

  return (
    <section className="servers-table">
      <div className="table-container">
        <h3 className="heading">Tabela de servidores</h3>
        <table>
          <tbody>
            <tr>
              <th>Select</th>
              <th>Hostname</th>
              <th>Memória</th>
              <th>vCPUs</th>
              <th>Disco</th>
              <th>IP</th>
            </tr>
          </tbody>
          <tbody>
            {serverList &&
              serverList.map((server) => (
                <tr key={server.id}>
                  <td>
                    <input
                      type="checkbox"
                      name="select"
                      value={server.select}
                      onChange={(event) => handleSelect(event, server.id)}
                    />
                  </td>
                  <td>{server.hostname}</td>
                  <td>{`${server.memory} GB`}</td>
                  <td>{`${server.cpu} vCPUs`}</td>
                  <td>{`${server.disk} GB`}</td>
                  <td>{server.ip}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default ServersTable;
