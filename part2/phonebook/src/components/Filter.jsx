export function Filter({filter, handleFilterChange}){
    
    return (
        <div>
            filter shown with <input name='filter' type="text" value={filter} onChange={handleFilterChange} />
        </div>
    )
}