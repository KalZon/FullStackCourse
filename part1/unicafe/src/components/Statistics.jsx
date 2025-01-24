import StatisticLine from "./StatisticLine"

function Statistics({good, neutral, bad, total, score}){
    const promedioPositivo = ((good/total)*100).toFixed(2)
    const promedioScore = (score/total).toFixed(2)
    return (
        <table>
            <tbody>
                <StatisticLine value={good}>Good</StatisticLine>
                <StatisticLine value={neutral}>Neutral</StatisticLine>
                <StatisticLine value={bad}>Bad</StatisticLine>
                <StatisticLine value={total}>All</StatisticLine>
                <StatisticLine value={score}>Score</StatisticLine>
                <StatisticLine value={promedioPositivo.concat('%')}>Positive Avr.</StatisticLine>
                <StatisticLine value={promedioScore}>Average Score</StatisticLine>
            </tbody>
        </table>
    )
}

export default Statistics