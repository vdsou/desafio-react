/**
 * Sumário dos recursos dos servidores
 */
import React from "react";
import './styles.css';

function Sumary() {
    return (
        <section className="sumary">
            <div className="table-container">
            <h3 className="heading">Sumário dos recursos dos servidores</h3>
                <table className="">
                    <tr><th>Servidores Selecionados</th><td>4 servidores selecionados</td></tr>
                    <tr><th>Total de Memória</th> <td>354 GB</td></tr>
                    <tr><th>Total de CPUs</th> <td>75 vCPUs</td></tr>
                    <tr><th className="last-line">Total de Discos</th> <td className="last-line">3096 GB</td></tr>
                </table>
            </div>
        </section>
    )
}
export default Sumary;
