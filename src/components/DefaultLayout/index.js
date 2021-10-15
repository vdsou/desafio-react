import React, { createContext, useState, useEffect } from 'react';
import Header from '../Header';
import api from '../../services/api';
import './styles.css';

const Context = createContext();

function DefaultLayout({ children }) {
  const [serverList, setServerList] = useState([]);
  useEffect(() => {
    const getData = () => {
      api
        .get('/servers')
        .then(({ data }) => {
          if (data) {
            const servers = data.map((server) => {
              const { id_vm, hostname, configuracao } = server;
              return {
                select: false,
                id: id_vm,
                hostname,
                memory: configuracao.memoryProvisioned,
                cpu: configuracao.cpuProvisioned,
                disk: configuracao.totalDiskGB,
                ip: configuracao.ip,
              };
            });
            setServerList(servers);
          }
        })
        .catch((err) => console.log(err));
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <Context.Provider value={{ serverList, setServerList }}>
      <Header />
      <div className="container">{children}</div>
    </Context.Provider>
  );
}

export { DefaultLayout, Context };
