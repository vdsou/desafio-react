/**
 * Tabela dos servidores
 */
import React from 'react';
import './styles.css';

function ServersTable() {
  return (
    <section className="servers-table">
      <div className="table-container">
      <h3 className="heading">Tabela de servidores</h3>
      <table>
        <tr>
          <th>Select</th>
          <th>Hostname</th>
          <th>Memória</th>
          <th>vCPUs</th>
          <th>Disco</th>
          <th>IP</th>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="select" />
          </td>
          <td>
            Server 1
          </td>
          <td>
            10 GB
          </td>
          <td>
            4 vCPUs
          </td>
          <td>
            200 GB
          </td>
          <td>
            10.0.0.1
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="select" />
          </td>
          <td>
            Server 1
          </td>
          <td>
            10 GB
          </td>
          <td>
            4 vCPUs
          </td>
          <td>
            200 GB
          </td>
          <td>
            10.0.0.1
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="select" />
          </td>
          <td>
            Server 1
          </td>
          <td>
            10 GB
          </td>
          <td>
            4 vCPUs
          </td>
          <td>
            200 GB
          </td>
          <td>
            10.0.0.1
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="select" />
          </td>
          <td>
            Server 1
          </td>
          <td>
            10 GB
          </td>
          <td>
            4 vCPUs
          </td>
          <td>
            200 GB
          </td>
          <td>
            10.0.0.1
          </td>
        </tr>
        <tr>
          <td className="last-line">
            <input type="checkbox" name="select" />
          </td>
          <td className="last-line">
            Server 1
          </td>
          <td className="last-line">
            10 GB
          </td>
          <td className="last-line">
            4 vCPUs
          </td>
          <td className="last-line">
            200 GB
          </td>
          <td className="last-line">
            10.0.0.1
          </td>
        </tr>
      </table>
      </div>
    </section>
  )
}
export default ServersTable;
