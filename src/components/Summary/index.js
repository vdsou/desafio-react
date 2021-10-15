/**
 * Summary of server resources
 */
import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import { Context } from '../DefaultLayout';

function Summary() {
  const { serverList } = useContext(Context);
  const [summary, setSummary] = useState({
    selectedTotal: 0,
    memoryTotal: 0,
    cpuTotal: 0,
    diskTotal: 0,
  });
  const filtered = serverList.filter((server) => server.select);
  let sumMemory = 0;
  let sumCpu = 0;
  let sumDisk = 0;
  if (filtered.length > 0) {
    filtered.forEach((server) => {
      sumMemory = sumMemory + server.memory;
      sumCpu = sumCpu + server.cpu;
      sumDisk = sumDisk + server.disk;
    });
  }
  useEffect(() => {
    setSummary({
      selectedTotal: filtered.length,
      memoryTotal: sumMemory,
      cpuTotal: sumCpu,
      diskTotal: sumDisk,
    });
    // eslint-disable-next-line
  }, [serverList]);

  return (
    <section className="summary">
      <div className="table-container">
        <h3 className="heading">Sumário dos recursos dos servidores</h3>
        <table>
          <tbody>
            <tr>
              <th>Servidores Selecionados</th>
              <td> {summary.selectedTotal} servidores selecionados</td>
            </tr>
            <tr>
              <th>Total de Memória</th>
              <td>{summary.memoryTotal} GB</td>
            </tr>
            <tr>
              <th>Total de CPUs</th>
              <td>{summary.cpuTotal} vCPUs</td>
            </tr>
            <tr>
              <th className="last-line">Total de Discos</th>
              <td className="last-line">{summary.diskTotal} GB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
export default Summary;
