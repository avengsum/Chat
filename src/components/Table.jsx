const Table = ({rows,cols}) => {
    return(
        <div>
            <table>
                {Array.from({length:rows}).map((_,row) => (
                    <tbody key={row}>
                        <tr>
                            {Array.from({length:cols}).map((_,col) => (
                                <td>
                                    { col % 2 === 0 ? rows * col  + (row + 1)
                                    : rows * (col + 1) - row
                                    }
                                </td>
                                
                ))}
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    )
}

export default Table