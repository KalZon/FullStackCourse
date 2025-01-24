function StatisticLine({children, value}){
    return(
        <tr>
            <td>{children}</td>
            <td>{value}</td>
        </tr>
    )
}
export default StatisticLine