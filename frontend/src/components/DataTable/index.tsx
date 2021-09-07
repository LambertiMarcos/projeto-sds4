const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>23/04/2021</td>
                        <td>Jack Ben</td>
                        <td>44</td>
                        <td>35</td>
                        <td>11055.00</td>
                    </tr>
                    <tr>
                        <td>24/04/2021</td>
                        <td>Petter</td>
                        <td>14</td>
                        <td>33</td>
                        <td>24010.00</td>
                    </tr>                                        
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;