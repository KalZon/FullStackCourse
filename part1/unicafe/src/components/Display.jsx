import StatisticLine from "./StatisticLine"

function Display({reviews}){

    return (
      <table>
        <tbody>
          {
            reviews.map(
              ({name, count}) => (
                
                <StatisticLine value={count}>{name}</StatisticLine>    
                
              )
            )
          }
        </tbody>
      </table>
    )
}

export default Display